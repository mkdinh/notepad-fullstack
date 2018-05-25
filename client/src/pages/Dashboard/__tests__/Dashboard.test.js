import { Dashboard } from "../Dashboard";

describe("Dashboard", () => {
  let wrapper, minProps, sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    minProps = {};

    wrapper = shallow(<Dashboard {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  describe("Form Col", () => {
    it("has a Col with class 'form-col'", () => {
      expect(wrapper.find("Col.form-col").exists()).toBe(true);
    });
  });

  describe("Form Col", () => {
    it("has a Col with class 'display-col'", () => {
      expect(wrapper.find("Col.display-col").exists()).toBe(true);
    });
  });
});
