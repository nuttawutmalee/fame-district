import styled, { css } from 'styled-components';
import { isMobileOnly, isIOS } from 'react-device-detect';
import { mediaBreakpointUp, mediaBreakpointDown } from '../mixins/breakpoint';
import { fp } from '../mixins/common';

const section = css`
  position: relative;
`;

const sectionInner = css`
  position: relative;
  width: 100%;
`;

const sectionContainer = css`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1150px;

  @media (min-width: 992px) and (max-width: 1149px) {
    padding-left: ${(30 / 1380) * 100}%;
    padding-right: ${(30 / 1380) * 100}%;
  }

  ${mediaBreakpointDown('md')`
    ${fp('padding-left', 30, 60)};
    ${fp('padding-right', 30, 60)};
  `};
`;

const sectionContentBlock = css`
  text-align: left;
  max-width: 420px;

  ${mediaBreakpointDown('md')`
    margin-left: auto;
    margin-right: auto;

    ${fp('padding-top', 55, 133)};
  `};

  ${mediaBreakpointDown('xs')`
    width: 100%;
    max-width: none;
  `};
`;

const sectionContentTitle = css`
  font-family: var(--font-lato-bold-italic);
  font-weight: normal;
  line-height: 1.04em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 0;

  ${fp('font-size', 41, 50)};
  ${fp('margin-bottom', 29, 37)};
`;

const sectionContentSubtitle = css`
  display: block;
  color: var(--black);
  font-family: var(--font-lato-bold);
  font-weight: normal;
  line-height: 1.313em;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  ${fp('font-size', 13, 16)};
  ${fp('margin-bottom', 12, 20)};
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

export {
  section,
  sectionInner,
  sectionContainer,
  sectionContentBlock,
  sectionContentTitle,
  sectionContentSubtitle,
  PageContainer,
  MainContainer,
};
