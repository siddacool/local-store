import {
  getStorage,
  setStorage,
  getCookieStore,
  setCookieStore,
} from "./storage";

interface CreateData {
  name: string;
  type: string;
}

export const useStorage = (
  createData: CreateData,
  cookieName = "",
  initialState = {}
) => {
  const { name, type } = createData || {};

  if (!name) {
    console.error("useStorage: createFunc name not defined");
  }

  const storeFullFirst = getStorage(name, type) || {};

  if (!storeFullFirst[cookieName]) {
    storeFullFirst[cookieName] = initialState;

    setStorage(name, storeFullFirst, type);
  }

  const set = (values = {}) => {
    const store = getCookieStore(cookieName, name, type);
    for (const [key, value] of Object.entries(values)) {
      if (!store[key]) {
        store[key] = "";
      }

      store[key] = value;
    }

    setCookieStore(store, cookieName, name, type);
  };

  const get = (value = "") => {
    const store = getCookieStore(cookieName, name, type);

    if (!value) {
      return store;
    } else {
      return store[value];
    }
  };

  const reset = () => {
    setCookieStore(initialState, cookieName, name, type);
  };

  const clear = () => {
    setCookieStore({}, cookieName, name, type);
  };

  return {
    set,
    get,
    reset,
    clear,
  };
};
