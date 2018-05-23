import { Home } from "../Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has the BannerCarousel", () => {
    expect(wrapper.find("BannerCarousel").exists()).toBe(true);
  });

  it("has a popup div", () => {
    expect(wrapper.find(".home-popup").exists()).toBe(true);
  });
});
