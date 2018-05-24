import { HomeSubRoutes } from "../App";

describe("HomeSubRoutes", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeSubRoutes />);
  });

  it("has Signup Route component", () => {
    expect(
      wrapper.find("Route[path='/signup']").props().component.WrappedComponent
        .name
    ).toEqual("Signup");
  });

  it("has Signin Route component", () => {
    expect(
      wrapper.find("Route[path='/signin']").props().component.WrappedComponent
        .name
    ).toEqual("Signin");
  });
});
