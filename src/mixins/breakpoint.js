import get from 'lodash/get';
import { css } from 'styled-components';
import { gridBreakpoints } from '../constants/styles';

// Breakpoint viewport sizes and media queries.
//
// Breakpoints are defined as a map of (name: minimum width), order from small to large:
//
//    (xs: 0, sm: 576px, md: 768px)
//
// The map defined in the `$grid-breakpoints` global variable
// is used as the `$breakpoints` argument by default.
//
// Name of the next breakpoint, or null for the last breakpoint.
//
//    >> breakpoint-next(sm)
//    md
//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px))
//    md
//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))
//    md
const breakpointNext = (name, breakpoints = gridBreakpoints) => {
  const breakpointNames = Object.keys(breakpoints);
  const n = breakpointNames.indexOf(name);
  return n < breakpointNames.length ? breakpointNames[n + 1] : null;
};

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px))
//    576px
const breakpointMin = (name, breakpoints = gridBreakpoints) => get(breakpoints, name);

// Maximum breakpoint width. Null for the largest (last) breakpoint.
// The maximum value is calculated as the minimum of the next one less 0.1.
//
//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px))
//    767px
const breakpointMax = (name, breakpoints = gridBreakpoints) => {
  const next = breakpointNext(name, breakpoints);
  return next ? breakpointMin(next, breakpoints) : null;
};

// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px))
//    "-sm"
const breakpointInflux = (name, breakpoints = gridBreakpoints) => {
  const min = breakpointMin(name, breakpoints);
  return min ? `-${name}` : '';
};

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and wider.
const mediaBreakpointUp = (name, breakpoints = gridBreakpoints) => (...args) => {
  const min = breakpointMin(name, breakpoints);

  if (min) {
    return css`
      @media (min-width: ${min}) {
        ${css(...args)};
      }
    `;
  }

  return css`
    ${css(...args)};
  `;
};

// Media of at most the maximum breakpoint width. No query for the largest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
const mediaBreakpointDown = (name, breakpoints = gridBreakpoints) => (...args) => {
  const max = breakpointMax(name, breakpoints);

  if (max) {
    return css`
      @media (max-width: ${max}) {
        ${css(...args)};
      }
    `;
  }

  return css`
    ${css(...args)};
  `;
};

// Media that spans multiple breakpoint widths.
// Makes the @content apply between the min and max breakpoints
const mediaBreakpointBetween = (lower, upper, breakpoints = gridBreakpoints) => (...args) => css`
  ${mediaBreakpointUp(lower, breakpoints)`
    ${mediaBreakpointDown(upper, breakpoints)`
      ${css(...args)};
    `}
  `}
`;

// Media between the breakpoint's minimum and maximum widths.
// No minimum for the smallest breakpoint, and no maximum for the largest one.
// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
const mediaBreakpointOnly = (name, breakpoints = gridBreakpoints) => (...args) => css`
  ${mediaBreakpointBetween(name, name, breakpoints)`
    ${css(...args)};
  `}
`;

export {
  breakpointNext,
  breakpointMin,
  breakpointMax,
  breakpointInflux,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointOnly,
  mediaBreakpointBetween,
};
