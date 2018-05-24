import { Signup } from "../Signup";

describe("Signup", () => {
  let wrapper, minProps, sandbox, handleChangeSpy;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    minProps = {
      visible: true,
      signupUser: sandbox.stub().returns(Promise.resolve()),
      history: {
        push: sinon.spy(),
        location: { pathname: "/ " }
      }
    };

    wrapper = shallow(<Signup {...minProps} />);
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
    it("set confirmPassword to an empty string", () => {
      expect(wrapper.state().confirmPassword).toEqual("");
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
  describe("Signup Form", () => {
    it("has a email input", () => {
      expect(wrapper.find("FormControl[name='email']").exists()).toBe(true);
    });

    it("has a password input", () => {
      expect(
        wrapper.find("FormControl[name='password'][type='password']").exists()
      ).toBe(true);
    });

    it("has a confirmPassword input", () => {
      expect(
        wrapper
          .find("FormControl[name='confirmPassword'][type='password']")
          .exists()
      ).toBe(true);
    });

    it("has a firstName input", () => {
      expect(wrapper.find("FormControl[name='lastName']").exists()).toBe(true);
    });

    it("has a lastName input", () => {
      expect(wrapper.find("FormControl[name='firstName']").exists()).toBe(true);
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

    describe("When user type into password input field", () => {
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

    describe("When user type into confirmPassword input field", () => {
      const passwordText = "password";
      let passwordFormControl;
      beforeEach(() => {
        passwordFormControl = wrapper.find(
          "FormControl[name='confirmPassword']"
        );
        passwordFormControl.simulate("change", {
          target: {
            name: passwordFormControl.props().name,
            value: passwordText
          }
        });
      });

      it("updates email state to input values", () => {
        expect(wrapper.state().confirmPassword).toEqual(passwordText);
      });
    });

    describe("When user type into firstName input field", () => {
      const firstName = "Michael";
      let firstNameFormControl;
      beforeEach(() => {
        firstNameFormControl = wrapper.find("FormControl[name='firstName']");
        firstNameFormControl.simulate("change", {
          target: {
            name: firstNameFormControl.props().name,
            value: firstName
          }
        });
      });

      it("updates email state to input values", () => {
        expect(wrapper.state().firstName).toEqual(firstName);
      });
    });

    describe("When user type into lastName input field", () => {
      const lastName = "Dinh";
      let lastNameFormControl;
      beforeEach(() => {
        lastNameFormControl = wrapper.find("FormControl[name='lastName']");
        lastNameFormControl.simulate("change", {
          target: {
            name: lastNameFormControl.props().name,
            value: lastName
          }
        });
      });

      it("updates email state to input values", () => {
        expect(wrapper.state().lastName).toEqual(lastName);
      });
    });

    describe("when user click submit Button", () => {
      it("calls signupUser with valid inputs", () => {
        let loginInfo = {
          email: "developer@developing.com",
          password: "password",
          confirmPassword: "password",
          firstName: "Michael",
          lastName: "Dinh"
        };

        wrapper.setState(loginInfo);

        wrapper.find("Button[type='submit']").simulate("submit", {
          preventDefault: sandbox.stub()
        });

        expect(minProps.signupUser.calledWith(...loginInfo)).toBe(true);
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

        expect(wrapper.state().error).toEqual("Missing email field");

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

        expect(wrapper.state().error).toEqual("Missing password field");

        expect(wrapper.find("div.input-error").exists()).toBe(true);
      });
    });
  });
});
