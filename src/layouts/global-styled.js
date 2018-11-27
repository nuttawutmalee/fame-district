import styled, { css } from 'styled-components';
import { isMobileOnly, isIOS } from 'react-device-detect';
import { mediaBreakpointUp } from '../mixins/breakpoint';

const section = styled.div`
  position: relative;
`;

const sectionInner = styled.div`
  position: relative;
  width: 100%;
`;

const PageContainer = styled.div`
  transition: filter 1s ease;
  overflow: hidden;
  opacity: 0;

  ${props => props.loaded
    && css`
      opacity: 1;
    `};

  ${props => props.blur
    && css`
      filter: blur(5px);
    `};
`;

const MainContainer = styled.main`
  position: relative;
  width: 100%;
  background-color: #fafafa;
  z-index: 3;

  &:before {
    display: none;
    content: 'mobile';

    ${mediaBreakpointUp('lg')`
      content: 'desktop';
    `};
  }

  ${mediaBreakpointUp('lg')`
    position: relative;
    transform-origin: center top;
    transform: scale(1) translate3d(0,200px,0);

    ${props => props.loaded
      && css`
        transform: scale(1) translate3d(0, 0, 0);
        transition-property: transform;
        transition-duration: 1s;
        transition-timing-function: var(--easeOutCirc);
        transition-delay: 0.4s;
      `};
  `};

  ${isMobileOnly
    && isIOS
    && css`
      display: initial;
    `};
`;

export { section, sectionInner, PageContainer, MainContainer };
