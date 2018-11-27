const refs = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REF':
      return {
        ...state,
        [action.name]: action.ref,
      };
    default:
      return state;
  }
};

export default refs;
