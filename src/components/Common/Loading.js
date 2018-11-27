import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoadingContainer, LoadingProgess, LoadingBlock, LoadingImage } from './loading-styled';
import { setLoaded } from '../../actions';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      percent: 0,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setLoaded(false));

    this.intervalId = setInterval(() => {
      this.setState(
        state => ({ percent: state.percent + 1 }),
        () => {
          const { loaded } = this.props;
          const { percent } = this.state;

          if (percent >= 100 && !loaded) {
            dispatch(setLoaded(true));
            clearInterval(this.intervalId);
          }
        },
      );
    }, 10);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { loaded } = this.props;
    const { percent } = this.state;

    return (
      <LoadingContainer loaded={loaded}>
        <LoadingProgess
          style={{ transform: `translate3d(${percent > 100 ? 100 : percent}%, 0, 0)` }}
        />
        <LoadingBlock>
          <span>
            <LoadingImage />
          </span>
        </LoadingBlock>
      </LoadingContainer>
    );
  }
}

Loading.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ status }) => ({
  loaded: status.loaded,
});

export default connect(mapStateToProps)(Loading);
