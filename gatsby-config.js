module.exports = {
  siteMetadata: {
    title: `Travel shop`,
    description: `Travel shop | Best travel blogs`,
    author: `@ashu96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marvel Blog`,
        short_name: `Marvel`,
        start_url: `/`,
        background_color: `#3A3F50`,
        theme_color: `#65D7EB`,
        display: `standalone`,
        icon: `src/assets/logo/logoPink-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
