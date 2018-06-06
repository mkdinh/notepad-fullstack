import { GET_CURRENT_USER } from "./types";
import * as api from "../api/userApi";

export const getCurrentUser = () => {
  return dispatch =>
    api
      .findCurrent()
      .then(res => {
        dispatch({
          type: GET_CURRENT_USER,
          payload: res.data,
        });
      })
      .catch(err => console.log(err));
};
