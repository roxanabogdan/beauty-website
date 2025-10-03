import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  pathname,
  article = false,
  keywords,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            image
            twitterUsername
            lang
            locale
          }
        }
      }
    `
  );

  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    author,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    lang,
    locale,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ""}`,
  };

  // Structured data for medical practice
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Pure Aesthetic Clinic",
    description:
      "Clinică de chirurgie plastică, oculoplastică, estetică și chirurgia mâinii în Timișoara",
    url: siteUrl,
    telephone: "+40-0727 784 478", // Replace with actual phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aleea Cristalului 2A",
      addressLocality: "Timișoara",
      addressRegion: "Timișoara",
      postalCode: "300000",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.7471",
      longitude: "21.2087",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    medicalSpecialty: [
      "Plastic Surgery",
      "Oculoplastic Surgery",
      "Aesthetic Medicine",
      "Hand Surgery",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii Medicale",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Chirurgie Plastică",
            description: "Proceduri de chirurgie plastică și estetică",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Proceduri Estetice Minim Invazive",
            description: "Botox, acid hialuronic, tratamente cu laser",
          },
        },
      ],
    },
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7C3AED" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};
