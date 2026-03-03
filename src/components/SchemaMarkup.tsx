interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Complete Junk Removal",
  description:
    "Professional junk removal, demolition, and cleanup services in Grand Bend, London, and Southwestern Ontario.",
  url: "https://completejunkremoval.ca",
  telephone: "+1-519-870-9136",
  email: "info@completejunkremoval.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Grand Bend",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.3134,
    longitude: -81.7562,
  },
  areaServed: [
    { "@type": "City", name: "Grand Bend" },
    { "@type": "City", name: "London" },
    { "@type": "City", name: "Lambton Shores" },
    { "@type": "City", name: "Exeter" },
    { "@type": "City", name: "Bayfield" },
    { "@type": "City", name: "Zurich" },
    { "@type": "City", name: "Strathroy" },
    { "@type": "City", name: "St. Thomas" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "19:00",
  },
  priceRange: "$$",
  image: "https://completejunkremoval.ca/images/logo-full.png",
  sameAs: [],
};
