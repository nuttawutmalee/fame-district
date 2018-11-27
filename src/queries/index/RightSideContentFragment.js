import { graphql } from 'gatsby';

export const RightSideContentFragment = graphql`
  fragment RightSideContent on PrismicPageBodyRightSideContent {
    id
    primary {
      section_title {
        html
        text
      }
      section_subtitle {
        html
        text
      }
      section_description {
        html
        text
      }
      side_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 310) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
