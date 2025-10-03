import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pure Aesthetic - Clinică de Chirurgie Plastică și Estetică`,
    description: `Clinică de chirurgie plastică, oculoplastică, estetică și chirurgia mâinii în Timișoara. Peste 15 ani de experiență în domeniu cu proceduri personalizate și tratamente de calitate.`,
    keywords: `chirurgie plastică, chirurgie estetică, Timișoara, botox, acid hialuronic, blefaroplastie, lifting, liposucție, chirurgie mâinii, proceduri estetice`,
    author: `Pure Aesthetic Clinic`,
    siteUrl: `https://www.pureaesthetic.ro`,
    image: `/src/images/purelogo.png`,
    twitterUsername: `@pureaesthetic`,
    lang: `ro`,
    locale: `ro_RO`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pure Aesthetic',
        short_name: 'Pure Aesthetic',
        start_url: '/',
        icon: 'src/images/favicon.png',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        excludes: ['/dev-404-page/', '/404/', '/404.html'],
        resolveSiteUrl: () => 'https://www.pureaesthetic.ro',
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.pureaesthetic.ro',
        sitemap: 'https://www.pureaesthetic.ro/sitemap-index.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/']
          }
        ]
      }
    }]
};

export default config;
