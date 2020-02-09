import axios from "./axios";
import {getResponseStatus, getSlug} from "./helper";


/*
* HTTP delete verb (Delete http request method)
*/
export const getRequest = (url, config={}) => {
  return new Promise((resolve, reject) => {
    if (!config.params) {
      config.params = {};
    }
    axios.get(url, config)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};

/*
* HTTP delete verb (Delete http request method)
*/
export const deleteRequest = (url, config) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, config)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch(() => {
      reject();
    });
  });
};

/*
* HTTP post request
*/
export const postRequest = (url, data={}, config={}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};

/*
* HTTP put request
*/
export const putRequest = (url, data, config) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data, config)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};

/*
* HTTP patch request
*/
export const patchRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};

