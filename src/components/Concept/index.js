/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ConceptSection,
  ConceptInnerBlock,
  ConceptSectionContainer,
  ContentWrapper,
  ContentBlock,
  ContentTitleBlock,
  ContentSubtitleBlock,
} from './concept-styled';
import Play from '../../assets/images/play.svg';

const Concept = ({ id, title, subtitle, description, sideImage, video }) => {
  return (
    <ConceptSection id={id}>
      <ConceptInnerBlock>
        <ConceptSectionContainer>
          <ContentWrapper>
            <ContentBlock level={1}>
              {title && title.html && (
                <ContentTitleBlock dangerouslySetInnerHTML={{ __html: title.html }} />
              )}
              {subtitle && subtitle.html && (
                <ContentSubtitleBlock dangerouslySetInnerHTML={{ __html: subtitle.html }} />
              )}
              {description && description.html && (
                <div dangerouslySetInnerHTML={{ __html: description.html }} />
              )}
            </ContentBlock>
            {/* <div className="c-block ratio-concept-1 c-block-top scroll-momentum" data-level="3">
              <figure>
                <img
                  data-src="assets/img/concept/img01.jpg"
                  alt=""
                  className="imagecontainer-img lazyload"
                />
              </figure>
            </div>
            <div
              className="c-block ratio-concept-2 c-block-shadow c-block-top cell cell-video scroll-momentum"
              data-level="2"
              data-id="2"
            >
              <figure>
                <img
                  data-src="assets/img/concept/img02.jpg"
                  alt=""
                  className="imagecontainer-img lazyload"
                />
              </figure>
              <div className="c-block-content">
                <div className="cover" data-cover-image="assets/img/concept/img02.jpg" />
                <a href="#" className="button-play">
                  Play
                  <span>
                    <Play />
                  </span>
                </a>
                <div
                  className="video-placeholder"
                  data-mp4="assets/videos/indochina-vanguard-hotels.mp4"
                  data-cover="assets/img/concept/img02.jpg"
                />
              </div>
            </div> */}
          </ContentWrapper>
        </ConceptSectionContainer>
      </ConceptInnerBlock>
    </ConceptSection>
  );
};

Concept.defaultProps = {
  id: 'concept',
  title: null,
  subtitle: null,
  description: null,
  sideImage: null,
  video: null,
};

Concept.propTypes = {
  id: PropTypes.string,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  description: PropTypes.object,
  sideImage: PropTypes.object,
  video: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }),
};

export default Concept;
/* eslint-enable global-require */
