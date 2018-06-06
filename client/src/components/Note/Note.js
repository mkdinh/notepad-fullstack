import React from "react";
import "./Note.scss";

export default ({ _id, title, body, style, handleDelete }) => {
  return (
    <div className="Note" style={style}>
      <i
        onClick={handleDelete ? handleDelete.bind(this, _id) : null}
        className="delete-icon glyphicon glyphicon-remove"
      />
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
