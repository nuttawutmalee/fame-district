import styled, { css } from 'styled-components';
import { center } from '../../mixins/common';
import { mediaBreakpointUp, mediaBreakpointDown } from '../../mixins/breakpoint';
import Logo from '../../assets/images/logo/wink-logo.svg';

const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: #fff;

  ${props => props.loaded
    && css`
      background-color: var(--white);
      transform: translate3d(0, -100%, 0);
      transition-property: background-color, transform;
      transition-duration: 1s;
      transition-timing-function: var(--easeInOutQuart);
    `};
`;

const LoadingProgess = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  right: 100%;
  top: 0;
  background-color: var(--brand);
  font-size: 0;
  transition-origin: left center;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: var(--easeOutQuart);
`;

const LoadingBlock = styled.div`
  position: absolute;
  ${center('xy')};
  z-index: 2;
`;

const LoadingImage = styled(Logo)`
  ${mediaBreakpointUp('lg')`
    width: 160px;
  `};

  ${mediaBreakpointDown('md')`
    width: 97px;
  `};
`;

export { LoadingContainer, LoadingProgess, LoadingBlock, LoadingImage };
