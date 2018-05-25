import { NoteForm } from "../Note";

describe("Note Form", () => {
  let wrapper, minProps, sandbox;

  beforeEach(() => {
    minProps = {};
    wrapper = shallow(<NoteForm {...minProps} />);
  });

  it("renders without exploding", () => {
    expect(wrapper);
  });

  // it("has a SplitButton", () => {
  //   expect(wrapper.find("SplitButton").exists()).toBe(true);
  // });

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

  it("has a ");
});
