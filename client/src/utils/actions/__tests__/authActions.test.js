import { signinUser, signupUser, signoutUser, authToken } from "../authActions";
import { AUTH_USER, SIGNUP_USER, UNAUTH_USER } from "../types";
import { user } from "../../../testUtils/data/users";

describe("Auth Actions", () => {
  let store, userInfo;
  const token = "asdjaisdjasidaisodjasidiasjd";

  beforeEach(() => {
    userInfo = { ...user };
    delete userInfo.password;
    // create mock store, init state is abitrary
    store = mockStore({ auth: {} });
  });

  it("authToken function", async () => {
    // mock axios check if token stored in user is valid
    mockAxios.onGet("auth/token").reply(203, userInfo);
    await store.dispatch(authToken(token));

    const action = store.getActions()[0];

    expect(action.type).toEqual(AUTH_USER);
    expect(action.payload).toMatchObject(userInfo);
  });

  it("signinUser function", async () => {
    // mock axios post to auth/signin
    // do not return sensitive info (password)
    userInfo.token = token;
    mockAxios.onPost("/auth/signin-local").reply(200, userInfo);

    // wait for async dispatch with thunk
    // and grab action generated from async action creator
    await store.dispatch(
      signinUser({
        email: user.email,
        password: user.password
      })
    );
    // this should be an object that can be used by reducer
    const action = store.getActions()[0];

    expect(action.type).toEqual(AUTH_USER);
    expect(action.payload).toHaveProperty("email", "firstName", "lastName");
  });

  it("SignupUser", async () => {
    // mock post to signup, should return a login token
    userInfo.token = token;
    mockAxios.onPost("/auth/signup").reply(200, userInfo);
    // wait async action creator to generate an object
    // that can be use by reducers
    await store.dispatch(signupUser({ ...user }));
    const action = store.getActions()[0];

    expect(action.type).toEqual(SIGNUP_USER);
    expect(action.payload.data).toMatchObject(userInfo);
  });

  describe("SignoutUser", () => {
    // no need for async action creator here
    // should just clear out localStorage
    const action = signoutUser();
    expect(action.type).toEqual(UNAUTH_USER);
  });
});
