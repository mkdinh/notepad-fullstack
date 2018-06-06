import React, { Component } from "react";
import { FormGroup, FormLabel, SplitButton } from "react-bootstrap";

export class StackPicker extends Component {
  render() {
    return;
    <FormGroup className="dropdown-container">
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
    </FormGroup>;
  }
}

export default StackPicker;
