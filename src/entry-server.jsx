import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// react-helmet-async v3 defers to React 19's native <title>/<meta>/<link>
// hoisting and no longer populates its `context` on React 19 (the tags render
// as real elements wherever <Helmet> sits in the tree instead). To capture
// them for the static HTML shell, we render an empty <head> sibling next to
// <App/> in the same tree -- React hoists the page's title/meta/link tags
// into it -- then split that fragment back out of the render output.
export function render(url) {
  const rendered = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <HelmetProvider>
          <head></head>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </React.StrictMode>,
  );

  const headMatch = rendered.match(/^<head>([\s\S]*?)<\/head>/);
  const head = headMatch ? headMatch[1] : "";
  const html = headMatch ? rendered.slice(headMatch[0].length) : rendered;

  return { html, head };
}
