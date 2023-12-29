export const getValueFromLocalStorage = (key, defaultValue) => {
  try {
    const data =
      localStorage &&
      localStorage.hasOwnProperty(key) &&
      localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const saveToLocalStorage = (data, key) => {
  try {
    localStorage && localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn("Can’t write to local storage:", error.message);
  }
};
