import { graphql } from 'gatsby';

export const HeroFragment = graphql`
  fragment Hero on PrismicPageBodyHero {
    id
    primary {
      section_title {
        html
        text
      }
      first_video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      first_video {
        url
      }
      second_video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      second_video {
        url
      }
      third_video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      third_video {
        url
      }
      fourth_video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fourth_video {
        url
      }
      fifth_video_poster {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fifth_video {
        url
      }
    }
  }
`;
