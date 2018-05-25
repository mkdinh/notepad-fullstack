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

export class NoteForm extends Component {
  state = {};

  render() {
    return (
      <form className="NoteForm">
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

        <FormGroup>{colors.map}</FormGroup>

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
