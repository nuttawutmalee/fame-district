import { graphql } from 'gatsby';

export const DoubleSideContentFragment = graphql`
  fragment DoubleSideContent on PrismicPageBodyDoubleSideContent {
    id
    primary {
      first_section_title {
        html
        text
      }
      first_section_subtitle {
        html
        text
      }
      first_section_description {
        html
        text
      }
      first_side_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 510) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      second_section_title {
        html
        text
      }
      second_section_subtitle {
        html
        text
      }
      second_section_description {
        html
        text
      }
      second_side_image {
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
      middle_image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 470) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
