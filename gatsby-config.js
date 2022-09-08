/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "今天煮什麼",
    description:
      "煮什麼網站提供乾淨漂亮的網頁，簡單料理的食譜網站，做料理輕鬆容易，不再失敗",
    author: "@jimmyliao",
    siteUrl: `https://xinyi-cook.netlify.app`,
    coverImage: "/main-cover.jpg",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-PGY7WRNPNZ",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: ["G-PGY7WRNPNZ"],

    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wgkhgqcb30us`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Noto Sans TC",
              variants: ["300", "400", "500", "700"],
            },
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
