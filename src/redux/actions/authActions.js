import { LOGIN_USER } from "./actiontypes";

// Mock the API call
const callToApi = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Api called");
  }, 2000)
);
const loginSucces = (email, password) => {
  return {
    type: LOGIN_USER,
    payload: { email: email, password: password },
  };
};

export const loginUser = (email, password) => async (dispatch) => {
  callToApi
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      loginSucces(email, password);
    });
};
