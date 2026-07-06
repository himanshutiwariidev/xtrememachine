import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3030;

const app = express();

// Behind a reverse proxy / load balancer (e.g. Nginx, Render, Heroku), trust
// the first hop so req.ip and the rate limiter see the real client address.
if (process.env.TRUST_PROXY) {
  app.set("trust proxy", 1);
}

/* ------------------------------------------------------------------ */
/* Security middleware                                                */
/* ------------------------------------------------------------------ */

app.disable("x-powered-by");

app.use(
  helmet({
    // A strict CSP is the primary defense against XSS/malicious script
    // injection. It's only enforced in production because Vite's dev
    // client relies on inline scripts/eval for HMR.
    contentSecurityPolicy: isProduction
      ? {
          useDefaults: true,
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            fontSrc: ["'self'", "data:"],
            connectSrc: ["'self'"],
            // Google Maps + YouTube embeds used on Contact Us / Video pages
            frameSrc: ["'self'", "https://www.google.com", "https://www.youtube.com"],
            objectSrc: ["'none'"],
            baseUri: ["'self'"],
            formAction: ["'self'"],
            frameAncestors: ["'self'"],
            upgradeInsecureRequests: [],
          },
        }
      : false,
    // The default CSP directive also blocks the Google Maps/YouTube iframes
    // above via COEP; the explicit frameSrc allowlist is the real guard.
    crossOriginEmbedderPolicy: false,
  }),
);

// Basic brute-force / DoS mitigation for the (expensive) SSR render path.
// Scoped to that path only -- applying it ahead of static/asset middleware
// would exhaust the budget on a single asset-heavy page load (image/video
// requests, plus Vite's HMR module graph in dev, all count as hits).
const ssrRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(compression());

/* ------------------------------------------------------------------ */
/* SSR wiring                                                          */
/* ------------------------------------------------------------------ */

let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
} else {
  app.use(
    express.static(path.resolve(__dirname, "dist/client"), {
      index: false,
      // Hashed asset filenames from Vite's build are safe to cache forever.
      immutable: true,
      maxAge: "1y",
    }),
  );
}

app.use(ssrRateLimiter, async (req, res) => {
  try {
    const url = req.originalUrl;

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = await fs.readFile(path.resolve(__dirname, "dist/client/index.html"), "utf-8");
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { html: appHtml, head } = render(url);

    let responseHtml = template.replace("<!--app-html-->", appHtml);

    // Only override the fallback <title>/description when the matched page
    // set its own via <SEO>/<Helmet>; otherwise the static defaults in
    // index.html stand.
    if (/<title>/.test(head)) {
      responseHtml = responseHtml.replace(/<title>[\s\S]*?<\/title>\s*/, "");
    }
    if (/<meta name="description"/.test(head)) {
      responseHtml = responseHtml.replace(/<meta name="description"[^>]*\/?>\s*/, "");
    }
    responseHtml = responseHtml.replace("<!--app-head-->", head);

    res.status(200).set({ "Content-Type": "text/html" }).send(responseHtml);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(isProduction ? "Internal Server Error" : e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
