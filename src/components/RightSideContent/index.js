import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import {
  RightSideContentSection,
  RightSideContentSectionInner,
  RightSideContentSectionContainer,
  ContentWrapper,
  ContentBlock,
  ContentTitleBlock,
  ContentSubtitleBlock,
  ContentColumnBlock,
  ContentFigure,
  ContentFigureImage,
} from './rightsidecontent-styled';

const RightSideContent = ({ id, title, subtitle, description, sideImage }) => {
  return (
    <RightSideContentSection id={id}>
      <RightSideContentSectionInner>
        <RightSideContentSectionContainer>
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
            <ContentColumnBlock top level={2}>
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
          </ContentWrapper>
        </RightSideContentSectionContainer>
      </RightSideContentSectionInner>
    </RightSideContentSection>
  );
};

RightSideContent.defaultProps = {
  id: 'right-side-content',
  title: null,
  subtitle: null,
  description: null,
  sideImage: null,
};

RightSideContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  description: PropTypes.object,
  sideImage: PropTypes.object,
};

export default RightSideContent;
