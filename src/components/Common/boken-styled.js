import styled from 'styled-components';

const BokehContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  mix-blend-mode: multiply;

  canvas {
    pointer-events: none;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

// eslint-disable-next-line
export { BokehContainer };
