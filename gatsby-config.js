module.exports = {
  siteMetadata: {
    title: `Paulo Muniz`,
    description: `Sou Paulo Muniz, Filmmaker, fotógrafo e produto de conteúdo.`,
    author: `@flatcodelab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `paulo-muniz`,
        short_name: `paulomuniz`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bebas Neue`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `paulok1`,
      },
    },
    `gatsby-plugin-modal-routing`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
