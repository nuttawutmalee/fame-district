import styled from 'styled-components';
import { center } from '../../mixins/common';

const VideoContainer = styled.div`
  position: absolute;
  ${center('xy')};
  display: block;
  width: ${(194 / 333) * 100}%;
  margin: 0;
  padding: 0;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`;

const VideoPosterContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const VideoBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  height: auto;
  max-height: 100%;
  transform: translate(-50%, -50%);
`;

export { VideoContainer, VideoBlock, VideoPosterContainer, Video };
