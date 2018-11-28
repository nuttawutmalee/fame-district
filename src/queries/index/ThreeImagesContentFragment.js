import { graphql } from 'gatsby';

export const ThreeImagesContentFragment = graphql`
  fragment ThreeImagesContent on PrismicPageBodyThreeImagesContent {
    id
    primary {
      menu_title
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
      first_image {
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
      second_image {
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
      third_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 330) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
