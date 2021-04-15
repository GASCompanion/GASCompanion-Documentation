const path = require(`path`)

module.exports = {
  pathPrefix: `/GASCompanion`,

  siteMetadata: {
    siteTitle: `GAS Companion Docs`,
    defaultTitle: `GAS Companion`,
    siteTitleShort: `GAS Companion`,
    siteDescription: `Documentation for GAS Companion: a Gameplay Ability System Starter and Template`,
    siteUrl: `https://mklabs.github.io/GASCompanion/`,
    siteAuthor: `@mklabs`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/mklabs/GASCompanion`,
        branch: 'dev',
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GAS Companion Documentation`,
        short_name: `GAS Companion Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: path.join(__dirname, `src/api-xml`),
      },
    },

    `gatsby-plugin-sitemap`,
    
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID,
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mklabs.github.io/GASCompanion`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
