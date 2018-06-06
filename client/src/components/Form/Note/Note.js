import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  SplitButton,
  MenuItem,
} from "react-bootstrap";
import { Draggable, ColorPicker } from "./subcomponents";
import { createNote } from "../../../utils/actions/noteActions";
import { connect } from "react-redux";

import "./Note.scss";
const stacks = [
  { name: "Stack One" },
  { name: "Stack Two" },
  { name: "Stack Three" },
  { name: "Stack Four" },
  { name: "Stack Five" },
];

const colors = [
  "#ffffff",
  "#5367a3",
  "#ff7eb9",
  "#7afcff",
  "#feff9c",
  "#fff740",
];

export class NoteForm extends Component {
  state = {
    title: "",
    body: "",
    style: {
      backgroundColor: "white",
    },
  };

  componentDidMount() {
    this.formDOM.onmouseup = this.handleDrop;
  }

  handleDrop = ev => {
    if (this.props.isOver) {
      this.props.createNote(this.state).then(res => {
        console.log(res);
        this.setState({ title: "", body: "" });
      });
    }
  };

  handleColorPick = color => {
    // handle color pick and update background color
    const style = { ...this.state.style };
    if (["#5367a3", "#ff7eb9"].includes(color)) {
      style.color = "#ffffff";
    } else {
      style.color = "#000000";
    }
    style.backgroundColor = color;
    this.setState({ style: style });
  };

  handleChange = ev => {
    // update state depend on the name of the input fields
    let { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, body, style } = this.state;

    return (
      <form
        style={style}
        className="NoteForm"
        ref={node => (this.formDOM = node)}
      >
        {/* Color picker for background color */}
        <ColorPicker colors={colors} onItemClick={this.handleColorPick} />
        {/* Handle title input */}
        <FormGroup>
          <ControlLabel className="form-label">Title</ControlLabel>
          <FormControl
            name="title"
            value={title}
            className="form-title"
            onChange={this.handleChange}
          />
        </FormGroup>
        {/* Handle Body Input */}
        <FormGroup>
          <ControlLabel className="form-label">Body</ControlLabel>
          <FormControl
            name="body"
            value={body}
            className="form-textarea"
            componentClass="textarea"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default connect(
  null,
  { createNote },
)(Draggable(NoteForm));
