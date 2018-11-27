import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { connect } from 'react-redux';
// import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
// import 'intl';

import './normalize.css';
import GlobalStyles from './globalStyles';
import { PageContainer, MainContainer } from './global-styled';

import Loading from '../components/Common/Loading';
import Header from '../components/Common/Header';
import Bokeh from '../components/Common/Bokeh';

const Layout = ({ children, data, loaded }) => {
  const windowGlobal = typeof window !== 'undefined' && window;

  return (
    <div>
      <GlobalStyles />
      <Helmet
        title={get(data, 'page.data.meta_title', 'Wink Hotels')}
        meta={[
          {
            name: 'description',
            content: get(data, 'page.data.meta_description', 'Wink Hotels'),
          },
          { name: 'keywords', content: get(data, 'page.data.meta_keywords', 'Wink Hotels') },
        ]}
        bodyAttributes={{ style: loaded ? '' : 'position: fixed;' }}
      />
      <Helmet>
        {/* FAVICONS */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {windowGlobal ? <meta property="og:url" content={windowGlobal.location.href} /> : ''}
      </Helmet>
      <Loading />
      <PageContainer loaded={loaded}>
        <MainContainer loaded={loaded}>{children}</MainContainer>
        <Bokeh />
      </PageContainer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ status }) => ({
  loaded: status.loaded,
});

export default connect(mapStateToProps)(Layout);
