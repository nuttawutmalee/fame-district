import React from 'react';
import PropTypes from 'prop-types';
import withViewport from '../../helpers/withViewport';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.willUnmount = false;
    this.ref = null;
    this.getTransform = this.getTransform.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.updateOffsets = this.updateOffsets.bind(this);
    this.state = {
      level: NaN,
      scrollY: 0,
      top: 0,
      bottom: 0,
      start: 0,
      stop: 0,
    };
  }

  componentDidMount() {
    let { level = NaN } = this.props;

    if (Number.isNaN(level)) {
      const zIndex = window.getComputedStyle(this.ref).getPropertyValue('z-index');
      if (zIndex === 'auto') level = 1;
      if (zIndex > 5) level = 5;
    }

    this.setState({ level });

    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this));

    this.updateOffsets();
    window.addEventListener('resize', this.updateOffsets.bind(this));
  }

  componentWillUnmount() {
    this.willUnmount = true;
    window.removeEventListener('scroll', this.onScroll.bind(this));
    window.removeEventListener('resize', this.updateOffsets.bind(this));
  }

  onScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  getTransform(vw, vh, level, scrollY, top, bottom, start, stop) {
    if (vw < 992 || this.willUnmount) return null;

    const movement = -vh / (5 / level);

    if (top > scrollY + vh) {
      return `translate3d(0, ${-movement * 0.5}px, 0)`;
    }

    if (bottom < scrollY) {
      return `translate3d(0, ${movement * 0.5}px, 0)`;
    }

    const percent = (scrollY - start) / (stop - start) - 0.5;
    const destY = movement * percent;
    const transform = window.getComputedStyle(this.ref).getPropertyValue('transform');
    const currentY = transform !== 'none' ? parseFloat(transform.split(',')[5]) : 0;
    const newY = currentY + (destY - currentY) * 0.1;
    return `translate3d(0, ${newY}px, 0)`;
  }

  updateOffsets() {
    const { vh } = this.props;
    const temp = this.ref.style.transform;

    this.ref.style.transform = '';

    const { offsetTop, offsetHeight } = this.ref;
    const top = offsetTop + 100;
    const bottom = top + offsetHeight;
    const start = top - vh;
    const stop = top + offsetHeight;

    this.ref.style.transform = temp;

    this.setState({
      top,
      bottom,
      start,
      stop,
    });
  }

  render() {
    const { children, vw, vh } = this.props;
    const { scrollY, level, top, bottom, start, stop } = this.state;

    const transform = this.getTransform(vw, vh, level, scrollY, top, bottom, start, stop);

    return (
      <div
        {...this.props}
        style={vw < 992 ? {} : { transform }}
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
};

Parallax.propTypes = {
  level: PropTypes.number,
  vh: PropTypes.number.isRequired,
  vw: PropTypes.number.isRequired,
};

export default withViewport()(Parallax);
