import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../layouts/index';
import configureStore from '../store/configureStore';

const store = configureStore();

const IndexPage = (props) => {
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
};

export default IndexPage;
