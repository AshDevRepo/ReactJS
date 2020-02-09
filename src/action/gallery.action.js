import {getImages} from "../requests/api/picsum.api"
import ENV from "../env";
import {getResponseStatus} from "../requests/helper";

/*
* Redux action, which trigger reducer and add images to reducer
*/
export const ADD_IMAGES_GALLERY = (data=[]) => {
  return {
    type: "FETCH_DATA",
    payload:{
      data
    }
  }
};

/*
* Redux action, Add uploaded image data to reducer
*/
export const ADD_IMAGE_GALLERY = (data={}) => {
  console.log("Add image gallery...")
  console.log(data)
  return {
    type: "ADD_DATA",
    payload:{
      data
    }
  }
};

/*
* Redux action, Empty reducer object
*/
export const EMPTY_GALLERY = () => {
  return {
    type: "EMPTY_DATA"
  }
};

/*
* Redux thunk action for asyn api requests
*/
export const FETCH_GALLERY_IMAGES = (item=[]) => {
  return (dispatch) => {
    getImages()
      .then((response) => {
        if(response){
          dispatch(ADD_IMAGES_GALLERY(response))
        }
      }).catch((error) => {
    })
  }
};
