module.exports = `allPrismicPage(filter:{type:{eq:"page"}}) {
  edges {
    node {
      id
      type
      lang
      data {
        url
      }
    }
  }
}`;
