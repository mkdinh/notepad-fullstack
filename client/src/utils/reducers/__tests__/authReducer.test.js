import authReducer, { initState } from "../authReducer";
import { signinUser, signoutUser, signupUser } from "../../actions/authActions";
import { AUTH_USER, UNAUTH_USER } from "../../actions/types";
import { user } from "../../../testUtils/data/users";

describe("authReducer", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ auth: initState });
  });

  it("default", () => {
    const state = authReducer(initState, {});
    expect(state).toMatchObject(initState);
  });

  it("AUTH_USER", async () => {
    mockAxios.onPost("/auth/signin-local").reply(200, {
      token: "signin token",
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });

    await store.dispatch(
      signinUser({
        email: user.email,
        password: user.password
      })
    );

    const action = store.getActions()[0];
    const state = authReducer({}, action);

    expect(state).toEqual({
      authenticated: true
    });
  });

  it("UNAUTH_USER", () => {
    const action = signoutUser();
    const state = authReducer({}, action);

    expect(state).toMatchObject({ authenticated: false });
  });
});
