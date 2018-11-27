const initiateState = {
  loaded: false,
  blurred: false,
};

const status = (state = initiateState, action) => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        loaded: action.loaded,
      };
    case 'SET_BLURRED':
      return {
        ...state,
        blurred: action.blurred,
      };
    default:
      return state;
  }
};

export default status;
