/*
* Reducer action to select a particular
*/
export const SELECT_IMAGE = (data) => {
  return {
    type: "SELECTED",
    payload:{
      data
    }
  }
};

/*
*  Reducer action to clear selected image
*/
export const CLEAR_IMAGE = () => {
  return {
    type:"CLEAR",
    payload:{}
  }
};
