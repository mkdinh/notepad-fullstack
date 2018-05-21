import { Home } from "../Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
