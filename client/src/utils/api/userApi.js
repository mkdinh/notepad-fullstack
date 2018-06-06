import axios from "axios";
import getToken from "./getToken";

// handle client http requests
//--------------------------------------------------------

export const findCurrent = () =>
  axios.get("/users/current", { headers: { authorization: getToken() } });

export const findUserNote = () =>
  axios.get("/users/notes", { headers: { authorization: getToken() } });
