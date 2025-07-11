export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export const loadFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
  }
};

export default {
  saveToLocalStorage,
  loadFromLocalStorage,
};
