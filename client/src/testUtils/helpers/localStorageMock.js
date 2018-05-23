// browser mock
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: key => {
      return store[key] || null;
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

export default Object.defineProperty(global, "localStorage", {
  value: localStorageMock
});
