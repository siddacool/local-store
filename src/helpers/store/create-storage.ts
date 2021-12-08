export const createLocalStorage = (name = "") => {
  return {
    name,
    type: "local",
  };
};

export const createSessionStorage = (name = "") => {
  return {
    name,
    type: "session",
  };
};
