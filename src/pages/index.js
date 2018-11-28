import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Layout from '../layouts';
import PageBody from '../components/Common/PageBody';

const store = configureStore();

const IndexPage = (props) => {
  const { data } = props;

  if (!data) {
    return (
      <Provider store={store}>
        <Layout {...props}>
          <div
            className="empty_page"
            style={{ padding: '100px 0', textAlign: 'center', fontSize: '28px' }}
          >
            No Page Content Found
          </div>
        </Layout>
      </Provider>
    );
  }

  const body = get(data, 'page.data.body', []);

  return (
    <Provider store={store}>
      <Layout {...props}>
        <PageBody body={body} />
      </Layout>
    </Provider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery($slug: String!) {
    page: prismicPage(id: { eq: $slug }) {
      ...PrismicPage
    }
  }
`;
