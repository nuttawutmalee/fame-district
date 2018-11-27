import styled, { css } from 'styled-components';
import { section } from '../../layouts/global-styled';
import withFullHeight from '../../helpers/withFullHeight';
import { fp, landscape, portrait } from '../../mixins/common';
import { mediaBreakpointUp, mediaBreakpointDown } from '../../mixins/breakpoint';

const HeroSection = styled(withFullHeight()(section))`
  position: relative;
  background-color: #ececec;
  height: 100vh;
  min-height: 480px;
`;

const HeroInnerBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContentContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroContentInnerBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  bottom: ${(79 / 768) * 100}%;

  @media (min-width: 992px) and (min-height: 769px) {
    bottom: 79px;
  }

  ${mediaBreakpointUp('md')`
    max-width: 511px;
  `};

  ${mediaBreakpointDown('md')`
    bottom: ${(49 / 544) * 100}%;
  `};

  ${mediaBreakpointDown('sm')`
    ${fp('padding-left', 45, 90)}
    ${fp('padding-right', 45, 90)}
  `}:

  @media (max-width: 991px) and (min-height: 769px) {
    bottom: 49px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-lato-bold);
    font-weight: normal;
    font-size: 4rem;
    line-height: 1.25em;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0;

    ${mediaBreakpointDown('md')`
      ${fp('font-size', 31, 40)};
    `};
  }
`;

const HeroFullBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FrameContainer = styled.div`
  position: absolute;
  top: ${(220 / 768) * 100}%;
  font-size: 0;

  ${landscape`
    left: -12.5%;
    right: -12.5%;
  `};

  ${portrait`
    left: -25%;
    right: -25%;
  `};
`;

const Frame = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: center;

  ${landscape`
    width: 20%;
  `};

  ${portrait`
    width: 33.3333%;

    ${props => props.first
      && css`
        display: none;
      `};

    ${props => props.last
      && css`
        display: none;
      `};
  `};
`;

const FrameInnerBlock = styled.div`
  position: relative;
  width: ${(333 / 407) * 100}%;
  display: inline-block;
  margin: auto;
`;

const FrameImage = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export {
  HeroSection,
  HeroInnerBlock,
  HeroContentContainer,
  HeroContentInnerBlock,
  HeroFullBlock,
  FrameContainer,
  Frame,
  FrameInnerBlock,
  FrameImage,
};
