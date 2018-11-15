import data from "../data";

const getDataFromServerOrStorage = () => {
  if (localStorage.DATA) {
    return JSON.parse(localStorage.DATA);
  } else {
    localStorage.DATA = data;
    return JSON.parse(data);
  }
};

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case "LOAD_DATA":
      return getDataFromServerOrStorage();

    default:
      return state;
  }
};
