import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  SplitButton,
  MenuItem
} from "react-bootstrap";
import "./Note.scss";

const stacks = [
  { name: "Stack One" },
  { name: "Stack Two" },
  { name: "Stack Three" },
  { name: "Stack Four" },
  { name: "Stack Five" }
];

const colors = ["black", "green", "red", "blue", "yellow"];

export class NoteForm extends Component {
  state = {
    title: "",
    body: "",
    style: {
      "background-color": "white"
    }
  };

  handleColorPick = ev => {
    const color = ev.target.getAttribute("color-id");
    const style = { ...this.state.style };
    style["background-color"] = color;
    this.setState({ style: style });
  };

  render() {
    const { title, body, style } = this.state;
    console.log(style["background-color"]);
    return (
      <form style={style} className="NoteForm">
        {/* <FormGroup className="dropdown-container">
          <ControlLabel className="form-label">Select Stack</ControlLabel>
          <SplitButton
            className="stack-dropdown"
            bsStyle="default"
            title="Select stack"
            id="stack-dropdown"
          >
            {stacks.map((stack, index) => (
              <MenuItem key={index} eventKey={index}>
                {stack.name}
              </MenuItem>
            ))}
          </SplitButton>
        </FormGroup> */}

        <FormGroup className="color-picker">
          {colors.map(color => {
            return (
              <span
                color-id={color}
                key={color}
                onClick={this.handleColorPick}
                className="color-item"
                style={{ background: color }}
              />
            );
          })}
        </FormGroup>

        <FormGroup>
          <ControlLabel className="form-label">Title</ControlLabel>
          <FormControl name="title" className="form-title" />
        </FormGroup>

        <FormGroup>
          <ControlLabel className="form-label">Body</ControlLabel>
          <FormControl
            name="body"
            className="form-textarea"
            componentClass="textarea"
          />
        </FormGroup>
      </form>
    );
  }
}

export default NoteForm;
