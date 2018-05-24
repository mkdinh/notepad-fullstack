import { AUTH_USER, UNAUTH_USER } from "./types";
import * as api from "../api/authApi";

export const authToken = token => {
  return dispatch =>
    api
      .authToken(token)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
      })
      .catch(err => {
        throw err;
      });
};

// sign in with email and password and return user info
export const signinUser = ({ email, password }) => {
  // wait for user to sign in and return response token
  return dispatch =>
    api
      .signin({ email, password })
      .then(res => {
        // save token to user storage for persistence login
        saveToken(res.data.token);
        // dispatch to the top of the middleware stacks
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
      })
      .catch(err => {
        throw err;
      });
};

export const signupUser = ({ email, password, firstName, lastName }) => {
  // wait for user to sign in and return response token
  return dispatch =>
    api.signup({ email, password, firstName, lastName }).then(res => {
      // save token to user storage for persistence login
      saveToken(res.data.token);
      // dispatch to the top of the middleware stacks
      dispatch({
        type: AUTH_USER,
        payload: res.data
      });
    });
};

export function signoutUser() {
  clearToken();
  return {
    type: UNAUTH_USER
  };
}

function saveToken(token) {
  localStorage.setItem("authToken", token);
}

function clearToken() {
  localStorage.removeItem("authToken");
}
