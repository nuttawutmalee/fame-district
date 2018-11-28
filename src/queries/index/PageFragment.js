import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment PrismicPage on PrismicPage {
    id
    type
    lang
    data {
      meta_title
      meta_description
      meta_keywords
      body {
        __typename
        ...Hero
        ...Concept
        ...Overview
        ...LeftSideContent
        ...RightSideContent
        ...ThreeImagesContent
        ...DoubleSideContent
      }
    }
  }
`;
