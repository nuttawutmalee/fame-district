import { graphql } from 'gatsby';

export const HeroFragment = graphql`
  fragment Hero on PrismicPageBodyHero {
    id
    primary {
      anchor_name
      anchor_link
      section_title {
        html
        text
      }
      section_description {
        html
        text
      }
    }
    items {
      image {
        url
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
