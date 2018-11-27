/**
 * Implement Gatsby's config in this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { WEBSITE_TITLE, PRISMIC_REPOSITORY_NAME } = process.env;

module.exports = {
  siteMetadata: {
    title: WEBSITE_TITLE,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_REPOSITORY_NAME,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: GA_CODE,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     exclude: [],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: URL,
    //     sitemap: `${URL}/sitemap.xml`,
    //     env: {
    //       development: {
    //         policy: [{ userAgent: '*', disallow: ['/'] }],
    //       },
    //       production: {
    //         policy: [{ userAgent: '*', allow: '/' }],
    //       },
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: WEBSITE_TITLE,
        short_name: 'Wink',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'static/favicons/android-icon-192x192.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-meta-redirect',
  ],
};
