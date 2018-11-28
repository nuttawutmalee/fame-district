import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Layout from '../layouts';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import RightSideContent from '../components/RightSideContent';

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
        <div>
          {body.length <= 0
            ? ''
            : body.map((section, index) => {
              // eslint-disable-next-line
                switch (section.__typename) {
                case 'PrismicPageBodyHero':
                  return (
                    <Hero
                      key={get(section, 'id')}
                      title={get(section, 'primary.section_title')}
                      firstVideo={{
                        poster: get(section, 'primary.first_video_poster'),
                        url: get(section, 'primary.first_video.url'),
                      }}
                      secondVideo={{
                        poster: get(section, 'primary.second_video_poster'),
                        url: get(section, 'primary.second_video.url'),
                      }}
                      thirdVideo={{
                        poster: get(section, 'primary.third_video_poster'),
                        url: get(section, 'primary.third_video.url'),
                      }}
                      fourthVideo={{
                        poster: get(section, 'primary.fourth_video_poster'),
                        url: get(section, 'primary.fourth_video.url'),
                      }}
                      fifthVideo={{
                        poster: get(section, 'primary.fifth_video_poster'),
                        url: get(section, 'primary.fifth_video.url'),
                      }}
                    />
                  );
                case 'PrismicPageBodyConcept':
                  return (
                    <Concept
                      key={get(section, 'id')}
                      title={get(section, 'primary.section_title')}
                      subtitle={get(section, 'primary.section_subtitle')}
                      description={get(section, 'primary.section_description')}
                      sideImage={get(section, 'primary.side_image')}
                      video={{
                        poster: get(section, 'primary.video_poster'),
                        url: get(section, 'primary.video.url'),
                      }}
                    />
                  );
                case 'PrismicPageBodyRightSideContent':
                  return (
                    <RightSideContent
                      key={get(section, 'id')}
                      title={get(section, 'primary.section_title')}
                      subtitle={get(section, 'primary.section_subtitle')}
                      description={get(section, 'primary.section_description')}
                      sideImage={get(section, 'primary.side_image')}
                    />
                  );
                default:
                  // eslint-disable-next-line
                    return <div key={`unknow-body-${index}`} />;
              }
            })}
        </div>
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
