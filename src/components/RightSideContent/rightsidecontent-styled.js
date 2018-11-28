import styled from 'styled-components';
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
} from '../../layouts/global-styled';
import { mediaBreakpointUp } from '../../mixins/breakpoint';

const RightSideContentSection = styled.section`
  ${section};
`;

const RightSideContentSectionInner = styled.div`
  ${sectionInner};
`;

const RightSideContentSectionContainer = styled.div`
  ${sectionContainer};
`;

const ContentWrapper = styled.div`
  position: relative;

  ${mediaBreakpointUp('lg')`
    padding-top: 103px;
    padding-left: ${(615 / 1120) * 100}%;
    padding-bottom: 146px;
  `};
`;

const ContentBlock = styled.div`
  ${sectionContentBlock};

  ${mediaBreakpointUp('lg')`
    max-width: 414px;
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

const ContentColumnBlock = styled.div`
  ${columnBlock};

  max-width: 310px;

  ${mediaBreakpointUp('lg')`
    position: absolute;
    left: ${(100 / 1120) * 100}%;
    top: 0;
    width: ${(310 / 1120) * 100}%;
  `};

  ${ContentFigure} {
    &:before {
      padding-top: ${(423 / 310) * 100}%;
    }
  }
`;

export {
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
};
