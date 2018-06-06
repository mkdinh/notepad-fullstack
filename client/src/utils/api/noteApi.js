import axios from "axios";
import getToken from "./getToken";

export const getNotes = () => axios.get("/api/notes");

export const createNote = note =>
  axios.post("api/notes", note, { headers: { authorization: getToken() } });

export const deleteNote = id =>
  axios.delete("api/notes/" + id, { headers: { authorization: getToken() } });
