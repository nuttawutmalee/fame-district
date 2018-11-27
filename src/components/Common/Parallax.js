import React from 'react';
import PropTypes from 'prop-types';
import withViewport from '../../helpers/withViewport';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.ref = null;
    this.onLoadAndResize = this.onLoadAndResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.scrollMomentumResize = this.scrollMomentumResize.bind(this);
    this.scrollMomentumMove = this.scrollMomentumMove.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.state = {
      level: NaN,
      scrollTop: 0,
      top: 0,
      bottom: 0,
      start: 0,
      stop: 0,
    };
  }

  componentDidMount() {
    let { level } = this.props;

    if (Number.isNaN(level)) {
      level = window.getComputedStyle(this.ref).getPropertyValue('z-index');
      if (level === 'auto') level = 1;
      if (level > 5) level = 5;
    }

    this.setState({ level }, () => {
      this.onLoadAndResize();
    });

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.setState({ scrollTop: window.document.scrollTop }, () => {
      this.scrollMomentumMove();
    });
  }

  onLoadAndResize() {
    this.scrollMomentumResize();
    this.scrollMomentumMove();
    this.checkResize();
  }

  scrollMomentumResize() {
    const { vw } = this.props;

    if (vw >= 992) {
      const { vh } = this.props;

      this.setState({
        top: this.ref.offsetTop,
        bottom: this.ref.offsetTop + this.ref.offsetHeight,
        start: this.ref.offsetTop - vh,
        stop: this.ref.offsetTop + this.ref.offsetHeight,
      });
    }
  }

  scrollMomentumMove() {
    const { vw } = this.props;

    if (vw >= 992) {
      const { slowscroll, vh } = this.props;
      const { top, bottom, level, scrollTop } = this.state;

      const amplitude = -vh;
      const movement = slowscroll ? -amplitude / 5 : amplitude / (5 / level);

      if (top > scrollTop + vh) {
        this.ref.style.transform = `translate3d(0, ${-movement * 0.5}px, 0)`;
      } else if (bottom < scrollTop) {
        this.ref.style.transform = `translate3d(0, ${movement * 0.5}px, 0)`;
      } else {
        const { start, stop } = this.state;
        const percent = (scrollTop - start) / (stop - start) - 0.5;
        const destY = movement * percent;
        const transform = window.getComputedStyle(this.ref).getPropertyValue('transform');
        const currentY = transform === 'none' ? 0 : parseFloat(transform.split(',')[5]);
        const newY = currentY + (destY - currentY) * 0.1;
        this.ref.style.transform = `translate3d(0, ${newY}px, 0)`;
      }
    }
  }

  checkResize() {
    const { vw } = this.props;
    if (vw < 992) {
      this.ref.setAttribute('style', '');
    }
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <div
        {...props}
        ref={(el) => {
          this.ref = el;
        }}
      >
        {children}
      </div>
    );
  }
}

Parallax.defaultProps = {
  level: NaN,
  slowscroll: false,
};

Parallax.propTypes = {
  level: PropTypes.number,
  slowscroll: PropTypes.bool,
  vh: PropTypes.number.isRequired,
  vw: PropTypes.number.isRequired,
};

export default withViewport()(Parallax);
