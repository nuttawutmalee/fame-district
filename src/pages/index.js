import React from 'react';
import Layout from '../layouts/index';

const IndexPage = (props) => {
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
};

export default IndexPage;
