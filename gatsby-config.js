require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `nekohack Portal`,
    titleTemplate: `%s | Portal`,
    description: `We provide IT services`,
    author: `Yuma Kitamura`,
    locale: `Osaka, Kyoto in Japan`,
    url: `https://yuukit.me/`,
    image: `src/images/bakeneko2.png`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-screenshot`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-screenshot`,
      options: {
        nodeTypes: [
          `StartersYaml`,
          `WhateverType`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nekohack Portal`,
        short_name: `Portal`,
        lang: `en`,
        start_url: `/`,
        icon: `src/static/icons/nekohack.png`,
        icons: [
          {
            src: `icons/nekohack-72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `icons/nekohack-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ],
        theme_color: `#ffbb33`,
        background_color: `#ffbb33`,
        display: `standalone`,
      }
    }
  ]
}
