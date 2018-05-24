import { Signin } from "../Signin";

describe("Signin", () => {
  let wrapper, minProps, sandbox, handleChangeSpy;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    minProps = {
      visible: true,
      signinUser: sandbox.stub().returns(Promise.resolve()),
      history: {
        push: sinon.spy(),
        location: { pathname: "/ " }
      }
    };

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
    it("set error to an empty string", () => {
      expect(wrapper.state().error).toEqual("");
    });

    it("set visible to true", done => {
      wrapper.instance().componentDidMount();
      setTimeout(() => {
        expect(wrapper.state().visible).toBe(true);
        done();
      }, 0);
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

    it("has a submit button", () => {
      expect(wrapper.find("Button[type='submit']").exists()).toBe(true);
    });

    describe("When user type into email input field", () => {
      const emailText = "developer@developing.com";
      let emailFormControl;
      beforeEach(() => {
        emailFormControl = wrapper.find("FormControl[name='email']");
        emailFormControl.simulate("change", {
          target: {
            name: emailFormControl.props().name,
            value: emailText
          }
        });
      });

      it("updates email state to input values", () => {
        expect(wrapper.state().email).toEqual(emailText);
      });
    });

    describe("When user type into email input field", () => {
      const passwordText = "password";
      let passwordFormControl;
      beforeEach(() => {
        passwordFormControl = wrapper.find("FormControl[name='password']");
        passwordFormControl.simulate("change", {
          target: {
            name: passwordFormControl.props().name,
            value: passwordText
          }
        });
      });

      it("updates email state to input values", () => {
        expect(wrapper.state().password).toEqual(passwordText);
      });
    });

    describe("when user click submit Button", () => {
      it("calls signinUser with email and password", () => {
        let loginInfo = {
          email: "developer@developing.com",
          password: "password"
        };

        wrapper.setState(loginInfo);

        wrapper.find("Button[type='submit']").simulate("submit", {
          preventDefault: sandbox.stub()
        });

        expect(minProps.signinUser.calledWith(...loginInfo)).toBe(true);
      });

      it("display error message if username is empty", () => {
        let loginInfo = {
          email: "",
          password: "password"
        };

        wrapper.setState(loginInfo);

        wrapper.find("Button[type='submit']").simulate("submit", {
          preventDefault: sandbox.stub()
        });

        expect(wrapper.state().error).toEqual(
          "Missing email or password field"
        );

        expect(wrapper.find("div.input-error").exists()).toBe(true);
      });

      it("display error message if password is empty", () => {
        let loginInfo = {
          email: "developer@developing.com",
          password: ""
        };

        wrapper.setState(loginInfo);

        wrapper.find("Button[type='submit']").simulate("submit", {
          preventDefault: sandbox.stub()
        });

        expect(wrapper.state().error).toEqual(
          "Missing email or password field"
        );

        expect(wrapper.find("div.input-error").exists()).toBe(true);
      });
    });
  });
});
