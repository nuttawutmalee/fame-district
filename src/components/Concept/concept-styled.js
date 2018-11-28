import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
// import Parallax from '../Common/Parallax';
import {
  section,
  sectionInner,
  sectionContainer,
  sectionContentBlock,
  sectionContentTitle,
  sectionContentSubtitle,
  columnBlock,
  columnFigure,
  columnFigureImage,
  columnBlockContentBlock,
} from '../../layouts/global-styled';
import { mediaBreakpointUp } from '../../mixins/breakpoint';

const ConceptSection = styled.div`
  ${section};
`;

const ConceptInnerBlock = styled.div`
  ${sectionInner};
`;

const ConceptSectionContainer = styled.div`
  ${sectionContainer};
`;

const ContentWrapper = styled.div`
  position: relative;

  ${mediaBreakpointUp('lg')`
    padding-top: 153px;
    padding-left: ${((675 - 1) / 1120) * 100}%;
    padding-bottom: 395px;
  `};
`;

const ContentBlock = styled.div`
  ${sectionContentBlock};

  ${mediaBreakpointUp('lg')`
    max-width: 338px;
  `};
`;

const ContentTitleBlock = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${sectionContentTitle};
  }
`;

const ContentSubtitleBlock = styled.div`
  p {
    ${sectionContentSubtitle};
  }
`;

const ContentFigure = styled.figure`
  ${columnFigure};
`;

const ContentFigureImage = styled(Img)`
  ${columnFigureImage};
`;

const Content = styled.div`
  ${columnBlockContentBlock};
`;

const ContentColumnBlock = styled.div`
  ${columnBlock};

  ${props => props.first
    && css`
      max-width: 411px;

      ${mediaBreakpointUp('lg')`
      position: absolute;
      left: ${(145 / 1120) * 100}%;
      top: 130px;
      width: ${(411 / 1120) * 100}%;
    `};

      ${ContentFigure} {
        &:before {
          padding-top: ${(519 / 411) * 100}%;
        }
      }
    `};

  ${props => props.second
    && css`
      max-width: 447px;
      z-index: 1;

      ${mediaBreakpointUp('lg')`
      position: absolute;
      left: ${(505 / 1120) * 100}%;
      top: 520px;
      width: ${(447 / 1120) * 100}%;
    `};

      ${ContentFigure} {
        &:before {
          padding-top: ${(290 / 447) * 100}%;
        }
      }

      ${Content} {
        padding: 0;
      }
    `};
`;

export {
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
};
