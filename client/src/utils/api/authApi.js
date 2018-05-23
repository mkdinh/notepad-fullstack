const axios = require("axios");

export function signin({ email, password }) {
  return axios.post("/auth/signin", { email, password });
}

export function signup({ email, password, firstName, lastName }) {
  return axios.post("/auth/signup", { email, password, firstName, lastName });
}
