const axios = require("axios");

export function authToken(token) {
  return axios.get("/auth/token", { headers: { authorization: token } });
}

export function signin({ email, password }) {
  return axios.post("/auth/signin-local", { email, password });
}

export function signup({ email, password, firstName, lastName }) {
  return axios.post("/auth/signup", {
    email,
    password,
    firstName,
    lastName
  });
}
