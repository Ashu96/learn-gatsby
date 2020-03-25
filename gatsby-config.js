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
        name: `Travel shop`,
        short_name: `Travel`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#65D7EB`,
        display: `standalone`,
        icon: `src/assets/logo/logoPink-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
