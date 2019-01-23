/**
 * Implement Gatsby's config in this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config
 */

require('dotenv').config();
// eslint-disable-next-line
require('regenerator-runtime/runtime');

const { SITE_TITLE, SITE_URL, PRISMIC_REPO } = process.env;

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    siteUrl: SITE_URL,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_REPO,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: SITE_TITLE,
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
