import { CREATE_NOTE, DELETE_NOTE } from "./types";
import * as api from "../api/noteApi";

export const createNote = note => {
  return dispatch =>
    api
      .createNote(note)
      .then(res => {
        dispatch({
          type: CREATE_NOTE,
          payload: res.data,
        });
      })
      .catch(err => console.log(err));
};

export const deleteNote = id => {
  return dispatch =>
    api
      .deleteNote(id)
      .then(res => {
        dispatch({
          type: DELETE_NOTE,
          payload: { id },
        });
      })
      .catch(err => console.log(err));
};
