import { AUTH_USER, SIGNUP_USER, UNAUTH_USER } from "./types";
import * as api from "../api/authApi";

export function authUser() {
  return {
    type: AUTH_USER,
  };
}

// sign in with email and password and return user info
export async function signinUser({ email, password }) {
  try {
    // wait for user to sign in and return response
    const res = await api.signin({ email, password });
    return {
      type: AUTH_USER,
      payload: res,
    };
  } catch (err) {
    throw err;
  }
}

export async function signupUser({ email, password, firstName, lastName }) {
  try {
    const res = await api.signup({ email, password, firstName, lastName });

    return {
      type: SIGNUP_USER,
      payload: request,
    };
  } catch (err) {
    throw err;
  }
}

export async function signoutUser() {
  return {
    type: UNAUTH_USER,
  };
}

function saveToken(token) {
  localStorage.setItem("authToken", token);
}
