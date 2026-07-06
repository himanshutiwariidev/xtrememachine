import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  canonical,
}) {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta
        name="description"
        content={description}
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content={keywords}
      />

      {/* Canonical URL */}
      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}
    </Helmet>
  );
}

export default SEO;