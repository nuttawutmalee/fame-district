import styled, { css } from 'styled-components';
import { mediaBreakpointUp } from '../../mixins/breakpoint';

const HeaderContainer = styled.header`
  ${props => props.blur
    && css`
      z-index: 29;
    `};

  ${mediaBreakpointUp('lg')`
    transform-origin: center bottom;
    transform: translate3d(0,-100px,0);

    ${props => props.loaded
      && css`
        transform: scale(1) translate3d(0, 0, 0);
        transition-property: transform;
        transition-duration: 1s;
        transition-timing-function: var(--easeOutCirc);
        transition-delay: 0.7s;
      `};
  `};
`;

// eslint-disable-next-line
export { HeaderContainer };
