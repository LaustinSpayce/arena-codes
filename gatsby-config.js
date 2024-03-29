module.exports = {
  siteMetadata: {
    title: `MTG Arena Codes`,
    description: `All online redemption codes for Magic The Gathering: Arena, in one convenient place`,
    author: `@LaustinSpayce`,
    siteUrl: `https://arena-codes.netlify.com/`,
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
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true,
        formatting: {
          format: "dddd D MMMM YYYY",
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mtg-arena-codes`,
        short_name: `arena-codes`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/laustin.png`
      },
    },
  ],
}
