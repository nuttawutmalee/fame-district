import { graphql } from 'gatsby';

export const LeftSideContentFragment = graphql`
  fragment LeftSideContent on PrismicPageBodyLeftSideContent {
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
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      bottom_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
