/**
 * Implement Gatsby's node in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const {
  PrismicPageQuery,
  PrismicPageGenerator,
} = require('./gatsby-nodes/PrismicPages/PrismicPageGenerator');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  // Adding polyfills
  const config = getConfig();

  switch (stage) {
    case 'develop':
      config.entry.commons.unshift('babel-polyfill');
      break;
    case 'build-javascript':
      if (Array.isArray(config.entry.app)) {
        config.entry.app = ['babel-polyfill', ...config.entry.app];
      } else {
        config.entry.app = ['babel-polyfill', config.entry.app];
      }
      break;
    default:
      break;
  }

  actions.replaceWebpackConfig(config);

  return config;
};

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path === '/') {
    const { createPage, deletePage } = actions;

    return new Promise((resolve) => {
      const newPage = { ...page };
      const oldPage = { ...page };

      newPage.component = path.resolve('src/templates/index.js');
      newPage.context = {
        slug: 'Prismic__Page__W_wmIBAAACoAYSOb',
        language: 'en-us',
      };

      deletePage(oldPage);
      createPage(newPage);

      return resolve(true);
    });
  }

  return Promise.resolve(true);
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  try {
    const pages = await graphql(`
      {
        ${PrismicPageQuery}
      }
    `);

    if (pages.errors) {
      return Promise.reject(pages.errors);
    }

    const { data } = pages;
    const { allPrismicPage } = data;

    console.log('+++++++++++++  CREATE WEBSITE  +++++++++++++');
    console.log('---------------  LIST PAGES  ---------------');
    PrismicPageGenerator(allPrismicPage.edges, createPage);

    return Promise.resolve(true);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
