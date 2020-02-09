import {  combineReducers } from "redux";


/*
* Reducer for image gallery
*/
const gallery_images = (state=[], action) => {
  let stateData;
  const { type, payload} = action;
  switch (type) {
    case "FETCH_DATA":
      stateData = [...state, ...(payload.data)]
      break;
    case "EMPTY_DATA":
      stateData = [];
      break;
    case "ADD_DATA":
      stateData = [payload.data, ...state]
      break;
    default:
      stateData = state;
  }
  return stateData;
};

/*
* Reducer for selected image
*/
const selected_image = (state={}, {type, payload={}}) => {
  let stateData = {};
  const { data } = payload;
  switch (type) {
    case "SELECTED":
      stateData = data;
      break;
    case "CLEAR":
      stateData = {};
      break;
    default:
      stateData = state;
      break;
  }
  return stateData;
}


export default combineReducers({
  gallery_images,
  selected_image
});
