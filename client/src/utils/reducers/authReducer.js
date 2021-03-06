import { AUTH_USER, UNAUTH_USER } from "../actions/types";

export const initState = {
  authenticated: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return { ...state };
  }
};
