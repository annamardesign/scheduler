import React from "react";
import "./sessioncell.css";

export default function SessionCell(props) {
  const thewidth = {
    top: props.top,
    width: props.width,
    backgroundColor: props.color,
  };

  return (
    <div className="session-cell" style={thewidth}>
      <h5 className="session-title">{props.sessionTitle}</h5>
      <h6>
        {props.start} - {props.end}
      </h6>
    </div>
  );
}
