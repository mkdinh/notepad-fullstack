import { Navigation } from "../Navigation";

describe("Navigation", () => {
  let wrapper, minProps;

  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    minProps = {
      history: {
        push: sandbox.stub()
      },
      user: {
        firstName: "Michael"
      },
      authenticated: false
    };

    wrapper = shallow(<Navigation {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  describe("Navigation Title", () => {
    it("renders the correct title", () => {
      expect(
        wrapper
          .find("NavbarBrand")
          .children()
          .text()
      ).toEqual("Stickly");
    });

    describe("When user click on title", () => {
      let handleSelectSpy;

      beforeEach(() => {
        wrapper.find("NavbarBrand").simulate("click");
      });

      it("pushes '/' to Router's history", () => {
        expect(minProps.history.push.firstCall.args[0]).toBe("/");
      });
    });
  });

  describe("When user is not logged in", () => {
    it("renders a Sign Up NavItem", () => {
      expect(
        wrapper
          .find("NavItem[name='/signup']")
          .children()
          .text()
      ).toEqual("Sign Up");
    });

    it("renders a Sign In NavItem", () => {
      expect(
        wrapper
          .find("NavItem[name='/signin']")
          .children()
          .text()
      ).toEqual("Sign In");
    });

    describe("When user click on Navigation components", () => {
      describe("When user click on NavItem", () => {
        it("pushes the correct path to Router", () => {
          wrapper.find("NavItem").forEach((node, index) => {
            const path = node.props().name;
            wrapper
              .find("Nav")
              .simulate("select", index, { target: { name: path } });

            const callArg = minProps.history.push.lastCall.args[0];

            expect(callArg).toBe(path);
          });
        });
      });
    });
  });

  describe("When user is logged in", () => {
    beforeEach(() => {
      minProps = {
        ...minProps,
        authenticated: true
      };

      wrapper = shallow(<Navigation {...minProps} />);
    });

    it("renders a Dashboard NavItem", () => {
      expect(
        wrapper
          .find("NavItem[name='/dashboard']")
          .children()
          .text()
      ).toEqual("Dashboard");
    });

    it("renders a Sign Out NavItem", () => {
      expect(
        wrapper
          .find("NavItem[name='/signout']")
          .children()
          .text()
      ).toEqual("Sign Out");
    });

    describe("When user click on Navigation components", () => {
      describe("When user click on NavItem", () => {
        it("pushes the correct path to Router", () => {
          wrapper.find("NavItem").forEach((node, index) => {
            // simlate onSelect with name props of NavItme
            const path = node.props().name;
            wrapper
              .find("Nav")
              .simulate("select", index, { target: { name: path } });

            const callArg = minProps.history.push.lastCall.args[0];
            expect(callArg).toBe(path);
          });
        });
      });
    });
  });
});
