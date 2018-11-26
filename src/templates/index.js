import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../layouts';

const IndexTemplate = (props) => {
  const { data } = props;

  if (!data) {
    return (
      <Layout {...props}>
        <div
          className="empty_page"
          style={{ padding: '100px 0', textAlign: 'center', fontSize: '28px' }}
        >
          No Page Content Found
        </div>
      </Layout>
    );
  }

  const body = get(data, 'page.data.body', []);

  console.log(body);

  return (
    <Layout {...props}>
      <div>
        {body.length <= 0
          ? ''
          : body.map((section) => {
            // eslint-disable-next-line
              switch (section.__typename) {
              case 'PrismicPageBodyHero':
                return <div key={section.id}>Banner Template</div>;
              default:
                return <div key="null" />;
            }
          })}
      </div>
    </Layout>
  );
};

IndexTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexTemplate;

export const query = graphql`
  query IndexQuery($slug: String!) {
    page: prismicPage(id: { eq: $slug }) {
      ...PrismicPage
    }
    languages: prismicLanguages {
      ...Languages
    }
  }
`;
