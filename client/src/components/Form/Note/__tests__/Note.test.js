import { NoteForm } from "../Note";

describe("Note Form", () => {
  let wrapper, minProps, sandbox;

  beforeEach(() => {
    minProps = {
      style: {
        backgroundColor: "white"
      }
    };
    wrapper = mount(<NoteForm {...minProps} />);
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  it("has a ColorPicker component", () => {
    expect(wrapper.find("ColorPicker").exists()).toBe(true);
  });

  it("has a textarea FormControl for note title", () => {
    expect(wrapper.find("FormControl[name='title']").exists()).toBe(true);
  });

  it("has a textarea FormControl for note body", () => {
    expect(
      wrapper
        .find("FormControl[componentClass='textarea'][name='body']")
        .exists()
    ).toBe(true);
  });

  describe("when user type into input fields", () => {
    it("set value to 'title' state when enter into title input", () => {
      const sampleText = "My First Note";
      wrapper
        .find("FormControl[name='title']")
        .simulate("change", createTarget({ name: "title", value: sampleText }));

      expect(wrapper.state().title).toEqual(sampleText);
    });
    it("set value to 'body' state when enter into body input", () => {
      const sampleText = "Remind me to write more test";
      wrapper
        .find("FormControl[name='body']")
        .simulate("change", createTarget({ name: "body", value: sampleText }));

      expect(wrapper.state().body).toEqual(sampleText);
    });

    it("set arg to 'style' state when call handleColorPick", () => {
      wrapper.instance().handleColorPick("white");
      expect(wrapper.state().style).toHaveProperty("backgroundColor", "white");
    });
  });
});
