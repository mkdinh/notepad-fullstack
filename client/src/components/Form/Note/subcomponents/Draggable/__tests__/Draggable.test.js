import Draggable from "../Draggable";
import { TestComponent } from "../../../../../../testUtils/data/component";

describe("Draggable Note", () => {
  let wrapper, minProps, sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    minProps = {};
    const ComposedComponent = Draggable(TestComponent);
    wrapper = mount(<ComposedComponent />);
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
      isDragging: false
    };

    expect(wrapper.state()).toMatchObject(defaultState);
  });

  it("set toggle open when calls handleToggle", () => {
    const wrapperInst = wrapper.instance();
    wrapperInst.handleToggle();
    expect(wrapper.state().open).toBe(false);
    wrapperInst.handleToggle();
    expect(wrapper.state().open).toBe(true);
  });
});
