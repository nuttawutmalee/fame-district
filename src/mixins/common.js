import { css } from 'styled-components';

const boxShadow = shadow => css`
  @if (var(--enable-shadows)) {
    box-shadow: ${shadow};
  }
`;

const transition = values => css`
  @if (var(--enable-transitions)) {
    ${values.length === 0
      && css`
        transition: var(--transition-base);
      `}
    ${values.length > 0
      && css`
        transition: ${values};
      `}
  }
`;

const fontSmoothing = () => css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const fp = (
  property,
  min,
  max,
  start = 375,
  end = 640,
  clip = true,
  sourceUnit = 'vw',
  clipAtStart = true,
  clipAtEnd = true,
) => {
  const multiplier = ((max - min) / (end - start)) * 100;
  const adder = (min * end - max * start) / (end - start);

  return css`
    ${clip
      && clipAtStart
      && css`
        @media (max-width: ${start}px) {
          ${property}: ${min}px;
        }
      `}
    ${clip
      && clipAtEnd
      && css`
        @media (min-width: ${end}px) {
          ${property}: ${max}px;
        }
      `}

    ${property}: calc(${multiplier + sourceUnit} + ${adder}px);
  `;
};

const fph = (
  property,
  min,
  max,
  start = 500,
  end = 900,
  clip = true,
  sourceUnit = 'vh',
  clipAtStart = true,
  clipAtEnd = true,
) => {
  const multiplier = ((max - min) / (end - start)) * 100;
  const adder = (min * end - max * start) / (end - start);

  return css`
    ${clip
      && clipAtStart
      && css`
        @media (max-width: ${start}px) {
          ${property}: ${min}px;
        }
      `}
    ${clip
      && clipAtEnd
      && css`
        @media (min-width: ${end}px) {
          ${property}: ${max}px;
        }
      `}

    ${property}: calc(${multiplier + sourceUnit} + ${adder}px);
  `;
};

const center = (xy = 'xy') => {
  if (xy === 'xy' || xy === 'yx') {
    return css`
      left: 50%;
      top: 50%;
      bottom: auto;
      right: auto;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    `;
  }

  if (xy === 'x') {
    return css`
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    `;
  }

  if (xy === 'y') {
    return css`
      top: 50%;
      bottom: auto;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    `;
  }

  return null;
};

const landscape = (...args) => css`
  @media only screen and (orientation: landscape) {
    ${css(...args)};
  }
`;

const portrait = (...args) => css`
  @media only screen and (orientation: portrait) {
    ${css(...args)};
  }
`;

export { boxShadow, transition, fontSmoothing, fp, fph, center, landscape, portrait };
