import { css } from 'styled-components';

const hover = (...args) => css`
  &:hover {
    ${css(...args)};
  }
`;

const hoverFocus = (...args) => css`
  @if (var(--enable-hover-media-query)) {
    &:focus {
      ${css(...args)};
    }
    ${hover(args)};
  } @else {
    &:focus,
    &:hover {
      ${css(...args)};
    }
  }
`;

const plainHoverFocus = (...args) => css`
  @if (var(--enable-hover-media-query)) {
    &,
    &:focus {
      ${css(...args)};
    }
    ${hover(args)};
  } @else {
    &,
    &:focus,
    &:hover {
      ${css(...args)};
    }
  }
`;

const hoverFocusActive = (...args) => css`
  @if (var(--enable-hover-media-query)) {
    &:focus,
    &:active {
      ${css(...args)};
    }
    ${hover(args)};
  } @else {
    &:focus,
    &:active,
    &:hover {
      ${css(...args)};
    }
  }
`;

export { hover, hoverFocus, plainHoverFocus, hoverFocusActive };
