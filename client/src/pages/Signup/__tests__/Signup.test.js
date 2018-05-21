import { Signup } from "../Signup";

describe("Signup", () => {
  let wrapper, minProps, sandbox, handleChangeSpy;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    minProps = {
      signupUser: sinon.spy()
    };
    handleChangeSpy = sandbox.spy(Signup.prototype, "handleChange");
    wrapper = shallow(<Signup {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  describe("default states", () => {});

  describe("Signup Form", () => {
    it("has a email input", () => {});

    it("has a password input", () => {});

    it("has a connfirm password input", () => {});

    it("has a submit button");
  });
});
