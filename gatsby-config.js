require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `nekohack Tech Hub`,
    titleTemplate: `%s | Tech Hub`,
    description: `nekohack gives your complex the opportunity to increase the percentage of happiness, enjoyment of your staff and as a result, bring productivity to your workspace.`,
    author: `Yuma Kitamura`,
    locale: `Osaka, Kyoto in Japan`,
    siteUrl: `https://yuukit.me/`,
    image: `src/images/bakeneko2.png`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://nekohack.app/`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`
          },
        ],
      },
    },
    // `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nekohack Tech Hub`,
        short_name: `TechHub`,
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
