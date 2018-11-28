const setLoaded = loaded => ({
  type: 'SET_LOADED',
  loaded,
});

const addMenu = (id, title) => ({
  type: 'ADD_MENU',
  id,
  title,
});

const removeMenu = id => ({
  type: 'REMOVE_MENU',
  id,
});

export { setLoaded, addMenu, removeMenu };
