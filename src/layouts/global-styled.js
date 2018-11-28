import styled, { css, keyframes } from 'styled-components';
import { isMobileOnly, isIOS } from 'react-device-detect';
import { mediaBreakpointUp, mediaBreakpointDown } from '../mixins/breakpoint';
import { fp } from '../mixins/common';

/** KEYFRAMES */

const HoverFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(125%)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

/** COMMON */

const image = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover';
  transition: opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1);
`;

/** SECTION */

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

/** COLUMN BLOCK */

const columnBlockTitle = css`
  color: var(--gray-dark);
  margin-bottom: 0;

  ${props => props.hide
    && css`
      opacity: 0;
      transform: translateY(125%);
    `};

  ${props => props.show
    && css`
      color: $white;
    `};
`;

const columnBlockCategory = css`
  display: block;
  color: var(--brand);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;

  ${props => props.hide
    && css`
      opacity: 0;
      transform: translateY(125%);
    `};
`;

const columnFigure = css`
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--white);

  ${props => props.ratio
    && css`
      &:before {
        display: block;
        content: '';
        width: 100%;
      }
    `};

  ${props => props.show
    && css`
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: -webkit-gradient(
          linear,
          0% 0%,
          0% 100%,
          from(#232323),
          to(rgba(35, 35, 35, 0))
        );
        background: -webkit-linear-gradient(top, #232323 0%, rgba(35, 35, 35, 0) 50%);
        background: -moz-linear-gradient(top, #232323 0%, rgba(35, 35, 35, 0) 50%);
        background: -ms-linear-gradient(top, #232323 0%, rgba(35, 35, 35, 0) 50%);
        background: -o-linear-gradient(top, #232323 0%, rgba(35, 35, 35, 0) 50%);
        transition: 0.9s cubic-bezier(0.18, 1, 0.21, 1);
      }
    `};
`;

const columnFigureImage = css`
  ${image};

  transition: 0.9s cubic-bezier(0.18, 1, 0.21, 1);

  ${props => props.ratio
    && css`
      position: absolute !important;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    `};

  ${props => props.show
    && css`
      transition: 9s cubic-bezier(0.18, 1, 0.21, 1);
    `};
`;

const columnVideoBlock = css`
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--black);

  ${props => props.ratio
    && css`
      &:before {
        display: block;
        content: '';
        width: 100%;
      }
    `};
`;

const columnVideo = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const columnBlockContentBlock = css`
  ${props => props.ratio
    && css`
      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 50px;
        z-index: 1;
        backface-visibility: hidden;
        transition: 0.9s cubic-bezier(0.18, 1, 0.21, 1);
      }
    `};

  ${props => props.hide
    && css`
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
    `};
`;

const columnBlockContentText = css`
  ${props => props.hide
    && css`
      text-align: center;
    `};
`;

const columnBlock = css`
  position: relative;
  display: block;

  ${mediaBreakpointDown('md')`
    margin-left: auto;
    margin-right: auto;

    ${fp('padding-left', 15, 30)};
    ${fp('padding-right', 15, 30)};
  `};

  ${mediaBreakpointDown('xs')`
    width: 100%;
    max-width: none !important;
  `};

  ${props => props.hide
    && css`
    &:hover {
      ${columnFigureImage} {
        opacity: 0.1;
        transform: scale(1.05);
      }

      ${columnBlockContentBlock} {
        opacity: 1;
        visibility: visible;

        ${columnBlockTitle}, ${columnBlockCategory} {
          animation: ${HoverFadeIn} 0.6s;
          animation-fill-mode: both;
        }

        ${columnBlockTitle} {
          animation-delay: 0.3s;
        }

        ${columnBlockCategory} {
          animation-delay: 0.1s;
        }
      }
  `};

  ${props => props.show
    && css`
      &:hover {
        ${columnFigure} {
          &:after {
            background-color: rgba(21, 21, 21, 0.45);
          }

          ${columnFigureImage} {
            transform: scale(1.05);
          }
        }
      }
    `};

  ${props => props.top
    && css`
      ${mediaBreakpointDown('md')`
      max-width: 420px !important;
      ${fp('margin-top', 30, 60)};
    `};
    `};
`;

/** COMPONENT */

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
  // COMMON
  image,
  // SECTION
  section,
  sectionInner,
  sectionContainer,
  sectionContentBlock,
  sectionContentTitle,
  sectionContentSubtitle,
  // COLUMN BLOCK
  columnBlock,
  columnBlockContentBlock,
  columnBlockTitle,
  columnBlockCategory,
  columnBlockContentText,
  columnFigure,
  columnFigureImage,
  columnVideoBlock,
  columnVideo,
  // COMPONENT
  PageContainer,
  MainContainer,
};
