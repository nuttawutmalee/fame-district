import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment PrismicPage on PrismicPage {
    id
    type
    lang
    data {
      url
      page_title
      page_description
      page_keywords
      body {
        __typename
        ...Hero
      }
    }
  }
`;
