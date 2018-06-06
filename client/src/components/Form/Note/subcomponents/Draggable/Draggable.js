import React, { Component } from "react";
import { DragSource } from "react-dnd";
import "./Draggable.scss";

const DraggableHOC = ComposedComponent => {
  class Draggable extends Component {
    state = {
      _x: 0,
      _y: 0,
      open: true,
      isOver: false,
      isDragging: false,
    };

    componentDidMount() {
      this.dragDiv.onmousedown = this.handleMouseDown;
    }

    handleToggle = ev => {
      this.setState({ open: !this.state.open });
    };

    handleMouseDown = ev => {
      this.dragDiv.onmousemove = this.handleMouseMove;
      this.dragDiv.onmouseup = this.handleReset;
      this.dragDiv.onmouseleave = this.handleReset;
      this.setState({ _x: ev.clientX, _y: ev.clientY });
    };

    handleReset = ev => {
      this.dragDiv.onmousemove = null;
      this.dragDiv.onmouseup = null;
      this.dragDiv.onmouseleave = null;
      this.setState({ x: 0, y: 0, isDragging: false, isOver: false });
      this.dragDiv.style.left = 0;
      this.dragDiv.style.top = 0;
    };

    handleMouseMove = ev => {
      if (!this.state.isDragging) this.setState({ isDragging: true });
      let { clientX, clientY } = ev;
      let { isOver, _x, _y } = this.state;
      this.dragDiv.style.left = clientX - _x + "px";
      this.dragDiv.style.top = clientY - _y + "px";
      this.dragDiv.hidden = true;
      this.checkIsOver(clientX, clientY, isOver);
      this.dragDiv.hidden = false;
    };

    checkIsOver = (clientX, clientY, isOver) => {
      if (
        document.elementFromPoint(clientX, clientY).id ===
          "card-drop-container" &&
        !isOver
      ) {
        this.setState({ isOver: true });
      } else if (
        document.elementFromPoint(clientX, clientY).id !==
          "card-drop-container" &&
        isOver
      ) {
        this.setState({ isOver: false });
      }
    };

    handleDrop = ev => {};

    render() {
      const { open, isOver, isDragging, x, y } = this.state;
      const { children, style, handleDragStart } = this.props;
      const position = {
        position: "relative",
        opacity: isDragging ? 0.75 : 1,
      };

      return (
        <div
          style={{ ...style, ...position }}
          key="draggable-container"
          ref={node => (this.dragDiv = node)}
          onDragStart={handleDragStart}
          className={`Draggable ${isDragging ? "dragging" : ""} ${!open &&
            "close-draggable"}`}
        >
          <div className="draggable-content">
            {
              <ComposedComponent
                {...this.props}
                isDragging={isDragging}
                isOver={isOver}
              />
            }
            <div onClick={this.handleToggle} className={`toggle-button`}>
              <i className={`glyphicon glyphicon-chevron-right`} />
            </div>
          </div>
        </div>
      );
    }
  }

  return Draggable;
};

export default DraggableHOC;
