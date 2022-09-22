/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
  },
  /* Your site config here */
  siteMetadata: {
    title: "四獸山系",
    description:
      "位於台北信義區的四獸山系，也包含了四座以虎豹獅象合稱四獸山，面積廣闊有著許多休閒步道與世界知名景點，也有著許多自然生態，交通便捷是都市人愛前去散步的地方。虎山環，象山環，四環二軸，九五峰，拇指山，台北大縱走第六段，南縱走",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-PGY7WRNPNZ"],

        pluginConfig: {
          head: true,
        },
      },
    },
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
