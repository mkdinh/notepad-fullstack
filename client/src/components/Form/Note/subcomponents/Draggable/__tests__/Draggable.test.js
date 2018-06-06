import Draggable from "../Draggable";
import { TestComponent } from "../../../../../../testUtils/data/components";

describe("Draggable Note", () => {
  let wrapper, minProps, sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    minProps = {};
    wrapper = mount(<Draggable {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  it("set the correct default state", () => {
    const defaultState = {
      _x: 0,
      _y: 0,
      open: true,
      isOver: false,
      isDragging: false,
    };

    expect(wrapper.state()).toMatchObject(defaultState);
  });

  it("set toggle open when calls handleToggle", () => {
    console.log(wrapper.debug());
    const wrapperInst = wrapper.instance();
    wrapperInst.handleToggle();
    expect(wrapper.state().open).toBe(true);
    wrapperInst.handleToggle();
    expect(wrapper.state().open).toBe(false);
  });
});
