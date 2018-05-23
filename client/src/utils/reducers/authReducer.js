import { AUTH_USER, UNAUTH } from "../actions/user/";

export const initState = {
  authenticated: false,
  user: {},
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: {} };
  }
};
