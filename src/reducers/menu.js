const menu = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return [...state, { id: action.id, title: action.title }];
    case 'REMOVE_MENU':
      return state.filter(v => v.id === action.id);
    default:
      return state;
  }
};

export default menu;
