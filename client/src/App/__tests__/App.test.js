import { App } from "../App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has a Navbar Component", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("Connect(withRouter(Navigation))").exists()).toBe(true);
  });

  it("has Home Route component", () => {
    expect(wrapper.find("Route[path='/']").props().component.name).toEqual(
      "Home"
    );
  });

  it("has Signup Route component", () => {
    expect(
      wrapper.find("Route[path='/signup']").props().component.name
    ).toEqual("Signup");
  });

  it("has Signin Route component", () => {
    expect(
      wrapper.find("Route[path='/signin']").props().component.WrappedComponent
        .name
    ).toEqual("Signin");
  });

  it("has Signout Route component", () => {
    expect(
      wrapper.find("Route[path='/signout']").props().component.WrappedComponent
        .name
    ).toEqual("Signout");
  });

  it("has Dashboard Route component", () => {
    expect(
      wrapper.find("Route[path='/dashboard']").props().component.name
    ).toEqual("Dashboard");
  });
});
