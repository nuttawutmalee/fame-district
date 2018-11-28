import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { addMenu } from '../../actions';
import Hero from '../Hero';
import Concept from '../Concept';
import RightSideContent from '../RightSideContent';

class PageBody extends React.Component {
  constructor(props) {
    super(props);
    this.addMenu = this.addMenu.bind(this);
  }

  addMenu(id, title) {
    const { dispatch } = this.props;
    dispatch(addMenu(id, title));
  }

  render() {
    const { body = [], exceptions = [] } = this.props;

    return (
      <div>
        {body.length <= 0
          ? ''
          : body.map((section, index) => {
            const id = get(section, 'id');

            // eslint-disable-next-line
              if (!~exceptions.indexOf(id)) {
              this.addMenu(id, get(section, 'primary.menu_title'));
            }

            // eslint-disable-next-line
              switch (section.__typename) {
              case 'PrismicPageBodyHero':
                return (
                  <Hero
                    key={get(section, 'id')}
                    id={get(section, 'id')}
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
                    id={get(section, 'id')}
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
                    id={get(section, 'id')}
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
    );
  }
}

PageBody.defaultProps = {
  body: [],
  exceptions: [],
};

PageBody.propTypes = {
  body: PropTypes.array,
  exceptions: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PageBody);
