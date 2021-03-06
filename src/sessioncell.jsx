import React from "react";
import "./sessioncell.css";

export default function SessionCell(props) {
  const thewidth = {
    left: props.left,
    width: props.width,
  };

  return (
    <div className="session-cell" style={thewidth}>
      <h5 className="session-title">{props.session.title}</h5>
      <h6>
        {props.session.start} - {props.session.end}
      </h6>
    </div>
  );
}
