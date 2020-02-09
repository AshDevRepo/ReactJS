/*
* Check whether an array is empty or not
*/
export const isArrayNotEmpty = (data) => {
  return (Array.isArray(data) && data.length);
};

/* 
*Check whether an object empty or not
*/
export const isEmptyObject = (data) => {
  return !data || !(Object.keys(data).length)
};
