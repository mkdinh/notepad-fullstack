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
    expect(wrapper.find("Connect(withRouter(Navigation))").exists()).toBe(true);
  });

  it("has '/(signin|signup)?' route rendering subroutes component", () => {
    expect(
      wrapper.find("Route[path='/(signin|signup)?']").props().component.name
    ).toEqual("HomeSubRoutes");
  });

  it("has Signout Route component to be protected", () => {
    expect(
      wrapper.find("Route[path='/signout']").props().component.displayName
    ).toEqual("Connect(RequireAuth)");
  });

  it("has Dashboard Route component to be protected", () => {
    expect(
      wrapper.find("Route[path='/signout']").props().component.displayName
    ).toEqual("Connect(RequireAuth)");
  });
});
