import styled from 'styled-components';
import Parallax from '../Common/Parallax';
import {
  section,
  sectionInner,
  sectionContainer,
  sectionContentBlock,
  sectionContentTitle,
  sectionContentSubtitle,
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

const ContentBlock = styled(Parallax)`
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

export {
  ConceptSection,
  ConceptInnerBlock,
  ConceptSectionContainer,
  ContentWrapper,
  ContentBlock,
  ContentTitleBlock,
  ContentSubtitleBlock,
};
