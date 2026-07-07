import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  canonical,
  schema,
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

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;