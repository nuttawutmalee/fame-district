const path = require('path');
const { mapLanguage } = require('../../src/utils/tools');
const PrismicPageQuery = require('./PrismisPageQuery');
const { MOCKUP_PAGE_URL } = require('../../src/constants/constants');

const PrismicPageGenerator = (edges, createPage) => {
  edges.forEach(({ node }) => {
    const { id, lang, data } = node;
    let { url = '' } = data;

    if (url === MOCKUP_PAGE_URL) return;
    if (url === null) url = '';

    const mappedLang = mapLanguage(lang);
    const pageUrl = `${mappedLang}/${url}`;
    const component = path.resolve('src/templates/index.js');

    if (pageUrl) {
      console.log('Create Page');
      console.log('----------------------');
      console.log(`ID:\t\t${id}`);
      console.log(`URL:\t\t${pageUrl}`);
      console.log('----------------------');

      createPage({
        path: pageUrl,
        component,
        context: {
          slug: id,
          url: pageUrl,
          language: lang,
        },
      });
    }
  });
};

module.exports = {
  PrismicPageGenerator,
  PrismicPageQuery,
};
