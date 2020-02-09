import {  getRequest } from "../http-methods";
import ENV from "../../env";

/*
* Collect images from API
*/
export const getImages = () => {
  const URL = `${ENV.PHOTO_API}/list`;
  return getRequest(URL);
};
