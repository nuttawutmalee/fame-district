import { graphql } from 'gatsby';

export const LanguagesFragment = graphql`
  fragment Languages on PrismicLanguages {
    id
    data {
      languages {
        language_code
        full_language_name
        short_language_name
      }
    }
  }
`;
