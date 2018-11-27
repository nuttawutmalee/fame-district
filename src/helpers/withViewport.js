import React from 'react';

const withViewport = () => WrappedComponent => class ViewportComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateViewport = this.updateViewport.bind(this);
    this.state = {
      vw: 0,
      vh: 0,
    };
  }

  componentDidMount() {
    this.updateViewport();
    window.addEventListener('resize', this.updateViewport.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewport.bind(this));
  }

  updateViewport() {
    this.setState({ vw: window.innerWidth, vh: window.innerHeight });
  }

  render() {
    const { vw, vh } = this.state;
    const { children } = this.props;

    return (
      <WrappedComponent {...this.props} vw={vw} vh={vh}>
        {children}
      </WrappedComponent>
    );
  }
};

export default withViewport;
