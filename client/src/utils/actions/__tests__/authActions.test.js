import { signinUser, signupUser, signoutUser } from "../authActions";
import { AUTH_USER, SIGNUP_USER, UNAUTH_USER } from "../types";
import { user } from "../../../testUtils/data/users";

describe("Auth Actions", () => {
  it("signinUser function", async () => {
    mockAxios.onPost("/auth/signin").reply(200, {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });

    const action = await signinUser({
      email: user.email,
      password: user.password,
    });

    expect(action.type).toEqual(AUTH_USER);
    expect(action.payload.data).toHaveProperty(
      "email",
      "firstName",
      "lastName",
    );
  });

  describe("SignupUser", async () => {
    mockAxios.onPost("/auth/signup").reply(200, { token: "my first token" });

    const action = await signupUser({ ...user });

    expect(action.type).to.equal(SIGNUP_USER);
    expect(action.payload.data).to.eql({ token: "my first token" });
  });

  describe("SignoutUser", async () => {
    const action = signoutUser();
    expect(action.type).to.equal(UNAUTH_USER);
  });
});
