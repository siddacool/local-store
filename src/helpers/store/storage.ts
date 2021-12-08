export const getStorage = (name = "", type = "") => {
  const storageType = type === "session" ? sessionStorage : localStorage;
  let storage = storageType.getItem(name);

  return storage ? JSON.parse(storage) : {};
};

export const setStorage = (name = "", value: any = null, type = "") => {
  const storageType = type === "session" ? sessionStorage : localStorage;

  storageType.setItem(name, JSON.stringify(value));
};

export const getCookieStore = (cookieName = "", name = "", type = "") => {
  const storeFull = getStorage(name, type) || {};

  return storeFull[cookieName];
};

export const setCookieStore = (
  value = {},
  cookieName = "",
  name = "",
  type = ""
) => {
  const storeFull = getStorage(name, type) || {};

  storeFull[cookieName] = value;

  setStorage(name, storeFull, type);
};
