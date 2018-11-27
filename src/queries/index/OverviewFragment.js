import { graphql } from 'gatsby';

export const OverviewFragment = graphql`
  fragment Overview on PrismicPageBodyOverview {
    id
    primary {
      section_title {
        html
        text
      }
      section_description {
        html
        text
      }
      background_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 1380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
