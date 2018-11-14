import data from '../data'
const dataFromServer = JSON.parse(data)
export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case "LOAD_DATA": 
    return dataFromServer;
    
    default:
      return state;
  }
};
