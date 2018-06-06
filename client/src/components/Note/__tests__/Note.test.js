import Note from "../Note";

describe("Note Component", () => {
  let wrapper, minProps, sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    minProps = {
      _id: 1,
      title: "Hello World",
      body: "It's a wonderful day!",
      handleDelete: sinon.stub()
    };
    wrapper = shallow(<Note {...minProps} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });
  it("renders correct title", () => {
    expect(wrapper.find("h4").text()).toEqual(minProps.title);
  });
  it("renders correct body", () => {
    expect(wrapper.find("p").text()).toEqual(minProps.body);
  });

  describe("When click on delete", () => {
    beforeEach(() => {
      wrapper.find("i").simulate("click", {});
    });

    it("calls handleDelete with correct id", () => {
      expect(minProps.handleDelete.calledWith(minProps._id)).toBe(true);
    });
  });
});
