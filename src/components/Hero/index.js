/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  HeroSection,
  HeroInnerBlock,
  HeroContentContainer,
  HeroContentInnerBlock,
  HeroFullBlock,
  FrameContainer,
  Frame,
  FrameInnerBlock,
  FrameImage,
} from './hero-styled';
import Video from './Video';
import withViewport from '../../helpers/withViewport';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoEnded = this.onVideoEnded.bind(this);
    this.shuffleIndex = this.shuffleIndex.bind(this);
    this.state = {
      currentIndex: 2,
    };
  }

  onVideoEnded() {
    const index = this.shuffleIndex();
    this.setState({ currentIndex: index });
  }

  shuffleIndex() {
    const { vw, vh } = this.props;

    if (vh >= vw) {
      return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }

    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  }

  render() {
    const { title, firstVideo, secondVideo, thirdVideo, fourthVideo, fifthVideo } = this.props;
    const { currentIndex } = this.state;

    return (
      <HeroSection>
        <HeroInnerBlock>
          <HeroFullBlock>
            <FrameContainer>
              <Frame first>
                <FrameInnerBlock>
                  <FrameImage
                    src={require('../../assets/images/frames/01.png')}
                    alt="First Frame"
                  />
                  <Video
                    poster={firstVideo.poster}
                    url={firstVideo.url}
                    index={0}
                    currentIndex={currentIndex}
                    onEnded={this.onVideoEnded}
                  />
                </FrameInnerBlock>
              </Frame>

              <Frame>
                <FrameInnerBlock>
                  <FrameImage
                    src={require('../../assets/images/frames/02.png')}
                    alt="Second Frame"
                  />
                  <Video
                    poster={secondVideo.poster}
                    url={secondVideo.url}
                    index={1}
                    currentIndex={currentIndex}
                    onEnded={this.onVideoEnded}
                  />
                </FrameInnerBlock>
              </Frame>

              <Frame>
                <FrameInnerBlock>
                  <FrameImage
                    src={require('../../assets/images/frames/03.png')}
                    alt="Third Frame"
                  />
                  <Video
                    poster={thirdVideo.poster}
                    url={thirdVideo.url}
                    index={2}
                    currentIndex={currentIndex}
                    onEnded={this.onVideoEnded}
                  />
                </FrameInnerBlock>
              </Frame>

              <Frame>
                <FrameInnerBlock>
                  <FrameImage
                    src={require('../../assets/images/frames/04.png')}
                    alt="Fourth Frame"
                  />
                  <Video
                    poster={fourthVideo.poster}
                    url={fourthVideo.url}
                    index={3}
                    currentIndex={currentIndex}
                    onEnded={this.onVideoEnded}
                  />
                </FrameInnerBlock>
              </Frame>

              <Frame last>
                <FrameInnerBlock>
                  <FrameImage
                    src={require('../../assets/images/frames/05.png')}
                    alt="Fifth Frame"
                  />
                  <Video
                    poster={fifthVideo.poster}
                    url={fifthVideo.url}
                    index={4}
                    currentIndex={currentIndex}
                    onEnded={this.onVideoEnded}
                  />
                </FrameInnerBlock>
              </Frame>
            </FrameContainer>
          </HeroFullBlock>
          <HeroContentContainer>
            {title && title.html && (
              <HeroContentInnerBlock dangerouslySetInnerHTML={{ __html: title.html }} />
            )}
          </HeroContentContainer>
        </HeroInnerBlock>
      </HeroSection>
    );
  }
}

Hero.defaultProps = {
  title: null,
};

Hero.propTypes = {
  title: PropTypes.object,
  firstVideo: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }).isRequired,
  secondVideo: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }).isRequired,
  thirdVideo: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }).isRequired,
  fourthVideo: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }).isRequired,
  fifthVideo: PropTypes.shape({
    poster: PropTypes.object,
    url: PropTypes.string.isRequired,
  }).isRequired,
  vh: PropTypes.number.isRequired,
  vw: PropTypes.number.isRequired,
};

export default withViewport()(Hero);
/* eslint-enable global-require */
