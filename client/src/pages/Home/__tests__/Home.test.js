import { Home } from "../Home";

describe("Home", () => {
  let wrapper, minProps;

  beforeEach(() => {
    minProps = {
      history: {
        location: {
          pathname: "/"
        },
        push: sinon.spy()
      }
    };

    wrapper = shallow(<Home {...minProps} />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has the BannerCarousel", () => {
    expect(wrapper.find("BannerCarousel").exists()).toBe(true);
  });

  it("has a Popup", () => {
    expect(wrapper.find("Popup").exists()).toBe(true);
  });

  describe("shouldRenderPopup", () => {
    it("sets 'about' state to true if at root", () => {
      let minProps = {
        history: {
          location: { pathname: "/" }
        }
      };
      wrapper = shallow(<Home {...minProps} />);

      expect(wrapper.state().about).toBe(true);
    });
    it("sets 'about' state to false if not at root", () => {
      let minProps = {
        history: {
          location: { pathname: "/signin" }
        }
      };
      wrapper = shallow(<Home {...minProps} />);

      expect(wrapper.state().about).toBe(false);
    });
  });

  describe("togglePopup", () => {
    it("calls history.push with '/signin if about state is true'", () => {
      wrapper.setState({ about: true });
      wrapper.instance().togglePopup();
      expect(minProps.history.push.calledWith("/signin")).toBe(true);
    });
    it("calls history.push with '/ if about state is false'", () => {
      wrapper.setState({ about: false });
      wrapper.instance().togglePopup();
      expect(minProps.history.push.calledWith("/")).toBe(true);
    });
  });
});
