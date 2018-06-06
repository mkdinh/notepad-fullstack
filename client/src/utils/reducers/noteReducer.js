import { DELETE_NOTE, CREATE_NOTE, AUTH_USER } from "../actions/types";

const initState = {
  list: [],
  error: "",
};

export default (state = initState, action) => {
  let newList;
  switch (action.type) {
    case AUTH_USER:
      return { ...state, list: action.payload.notes || [] };
    case CREATE_NOTE:
      newList = [...state.list, action.payload];
      return { ...state, list: newList };
    case DELETE_NOTE:
      console.log(action.payload.id);
      newList = state.list.filter(el => el._id !== action.payload.id);
      console.log(newList);
      return { ...state, list: newList };
    default:
      return { ...state };
  }
};
