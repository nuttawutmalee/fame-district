import React from 'react';

const withFullHeight = () => WrappedComponent => class FullHeightComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateViewport = this.updateViewport.bind(this);
    this.state = {
      height: 0,
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
    this.setState({ height: window.innerHeight });
  }

  render() {
    const { children } = this.props;
    const { height } = this.state;

    return (
      <WrappedComponent {...this.props} style={{ height }}>
        {children}
      </WrappedComponent>
    );
  }
};

export default withFullHeight;
