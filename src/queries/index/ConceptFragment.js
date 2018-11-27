import { graphql } from 'gatsby';

export const ConceptFragment = graphql`
  fragment Concept on PrismicPageBodyConcept {
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
            fluid(maxWidth: 410) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      video {
        url
      }
    }
  }
`;
