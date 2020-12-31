/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        loaderOptions: {
          appendData: `@env: ${process.env.NODE_ENV};`,
        },
        lessOptions: {
          javascriptEnabled: true,
          // strictMath: true,
          //plugins: [new LessPluginCleanCSS({ advanced: true })],
        },
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-emoji`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-csv',
      options: {
        noheader: true,
      },
    },
  ],
}
