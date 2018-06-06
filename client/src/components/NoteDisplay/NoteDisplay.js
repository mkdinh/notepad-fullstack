import React, { Component } from "react";
import { deleteNote } from "../../utils/actions/noteActions";
import { connect } from "react-redux";
import Note from "../Note";
import "./NoteDisplay.scss";

class NoteDisplay extends Component {
  renderNotes = () => {
    return this.props.notes.map(note => {
      return <Note handleDelete={this.handleDelete} key={note._id} {...note} />;
    });
  };

  handleDelete = id => {
    this.props.deleteNote(id).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="NoteDisplay">
        <div id="card-drop-container">{this.renderNotes()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.list,
  };
}

export default connect(
  mapStateToProps,
  { deleteNote },
)(NoteDisplay);
