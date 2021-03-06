import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import {
  ConceptSection,
  ConceptInnerBlock,
  ConceptSectionContainer,
  ContentWrapper,
  ContentBlock,
  ContentTitleBlock,
  ContentSubtitleBlock,
  ContentColumnBlock,
  ContentFigure,
  ContentFigureImage,
  Content,
} from './concept-styled';

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
            <ContentColumnBlock top first level={3}>
              {sideImage && (
                <ContentFigure ratio>
                  <ContentFigureImage
                    ratio
                    fluid={get(sideImage, 'localFile.childImageSharp.fluid')}
                    alt={get(sideImage, 'alt')}
                  />
                </ContentFigure>
              )}
            </ContentColumnBlock>
            <ContentColumnBlock top second level={2}>
              {video && (
                <Content ratio>
                  <video
                    controls
                    poster={get(video, 'poster.localFile.childImageSharp.fluid.src')}
                    width="100%"
                  >
                    <track kind="captions" />
                    <source src={get(video, 'url')} />
                  </video>
                </Content>
              )}
            </ContentColumnBlock>
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
