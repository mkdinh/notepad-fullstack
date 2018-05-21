import { Signin } from "../Signin";

describe("Signin", () => {
  let wrapper, minProps, sandbox, handleChangeSpy;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    minProps = {
      signinUser: sandbox.spy()
    };
    handleChangeSpy = sandbox.spy(Signin.prototype, "handleChange");
    wrapper = shallow(<Signin {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  describe("default states", () => {
    it("set email to an empty string", () => {
      expect(wrapper.state().email).toEqual("");
    });
    it("set password to an empty string", () => {
      expect(wrapper.state().email).toEqual("");
    });
  });

  describe("Signin Form", () => {
    it("has a email input", () => {
      expect(wrapper.find("FormControl[name='email']").exists()).toBe(true);
    });

    it("has a password input", () => {
      expect(
        wrapper.find("FormControl[name='password'][type='password']").exists()
      ).toBe(true);
    });
  });
});
