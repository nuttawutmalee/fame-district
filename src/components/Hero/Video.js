import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import {
  VideoContainer,
  VideoBlock,
  VideoPosterContainer,
  Video as VideoStyle,
} from './video-styled';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.playerRef = null;
    this.onPlayerEnded = this.onPlayerEnded.bind(this);
  }

  async componentDidMount() {
    const { index, currentIndex } = this.props;

    if (index === currentIndex && (this.playerRef.ended || this.playerRef.paused)) {
      await this.playerRef.play();
    }
  }

  async componentDidUpdate() {
    const { index, currentIndex } = this.props;

    if (index === currentIndex && (this.playerRef.ended || this.playerRef.paused)) {
      await this.playerRef.play();
    }
  }

  componentWillUnmount() {
    if (this.playerRef && this.playerRef.played) {
      this.playerRef.pause();
    }
  }

  onPlayerEnded() {
    const { onEnded } = this.props;
    if (typeof onEnded === 'function') {
      onEnded();
    }
  }

  render() {
    const { poster, url } = this.props;

    return (
      <VideoContainer>
        {poster && (
          <VideoPosterContainer>
            <Img fluid={get(poster, 'localFile.childImageSharp.fluid')} alt={get(poster, 'alt')} />
          </VideoPosterContainer>
        )}
        <VideoBlock>
          <VideoStyle
            poster={poster && get(poster, 'localFile.childImageSharp.fluid.src')}
            muted
            playsInline
            ref={(el) => {
              this.playerRef = el;
            }}
            onEnded={this.onPlayerEnded}
          >
            <source src={url} />
          </VideoStyle>
        </VideoBlock>
      </VideoContainer>
    );
  }
}

Video.defaultProps = {
  poster: null,
  onEnded: () => {},
};

Video.propTypes = {
  poster: PropTypes.object,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onEnded: PropTypes.func,
};

export default Video;
