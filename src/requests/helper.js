/*
* Find the response type whether it fall in particular http response type
*/
export const getResponseStatus = (response, type) => {
  type = parseInt(type/100);
  let regex = new RegExp(`^${type}\\d{2}$`);
  return !!regex.exec(response);
};


/*
* Convert test to slug
*/
export const getSlug = (text="") => {
  try{
    text = text.toLowerCase();
    text = text.replace(/\s/g, "-");
  }catch (e) {
    // handle error
  }
  return text;
};
