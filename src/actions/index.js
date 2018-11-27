const setLoaded = loaded => ({
  type: 'SET_LOADED',
  loaded,
});

const setRefs = (name, ref) => ({
  type: 'SET_REF',
  name,
  ref,
});

export { setLoaded, setRefs };
