import { ColorPicker } from "../ColorPicker";

describe("ColorPicker", () => {
  let wrapper, minProps, sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    minProps = {
      colors: ["red", "white", "blue"],
      onItemClick: sandbox.spy(),
    };
    wrapper = shallow(<ColorPicker {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  it("renders correct number of colors", () => {
    expect(wrapper.find("span").length).toEqual(minProps.colors.length);
  });

  describe("When click on a color run onItemClick", () => {
    beforeEach(() => {
      const colorDOM = wrapper.find("span").at(0);
      colorDOM.simulate(
        "click",
        createTarget(
          {
            getAttribute: sandbox.stub().returns("white"),
          },
          {
            stopPropagation: sandbox.stub(),
          },
        ),
      );
    });

    it("calls onItemClick function with correct color", () => {
      expect(minProps.onItemClick.calledWith("white")).toBe(true);
    });
  });
});
