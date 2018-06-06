import { AUTH_USER, GET_CURRENT_USER } from "../actions/types";

const initState = {
  email: "",
  firstName: "",
  lastName: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_USER:
      const { firstName, lastName, email } = action.payload;
      return { ...state, firstName: firstName, lastName, email };
    default:
      return { ...state };
  }
};
