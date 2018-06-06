import React, { Component } from "react";
import { FormGroup } from "react-bootstrap";
import "./ColorPicker.scss";

export class ColorPicker extends Component {
  handleColorClick = ev => {
    ev.stopPropagation();
    const color = ev.target.getAttribute("colorid");
    this.props.onItemClick(color);
  };

  renderColors = colors => {
    return colors.map(color => (
      <span
        colorid={color}
        key={color}
        onClick={this.handleColorClick}
        className="color-item"
        style={{ background: color }}
      />
    ));
  };

  render() {
    let { colors } = this.props;

    return (
      <FormGroup className="ColorPicker">{this.renderColors(colors)}</FormGroup>
    );
  }
}

export default ColorPicker;
