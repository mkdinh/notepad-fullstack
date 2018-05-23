import { AUTH_USER, UNAUTH_USER } from "../actions/types";

export const initState = {
  authenticated: false,
  user: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: {} };
    default:
      return { ...state };
  }
};
