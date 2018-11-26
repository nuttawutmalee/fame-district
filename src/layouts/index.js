import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { ThemeProvider } from 'styled-components';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import 'intl';

import theme from './theme-styled';

const Layout = ({ children, data, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title="Fame District"
          meta={[
            { name: 'description', content: 'Fame Distrcit' },
            { name: 'keywords', content: 'Fame District' },
          ]}
        />
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
