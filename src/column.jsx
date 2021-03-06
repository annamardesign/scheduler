import React from "react";
import SessionCell from "./sessioncell.jsx";
import "/.column.css";

export default function Column(props) {
  const thewidth = {
    width: props.width,
  };

  const renderSessionCell = (session, key) => (
    <SessionCell
      key={key}
      left={session.startMinutes - props.offsetWidth}
      width={session.length}
      start={session.start}
      end={session.end}
      sessionTitle={session.title}
    />
  );

  return (
    <div className="column" style={thewidth}>
      {props.sessions.map(renderSessionCell)}
    </div>
  );
}
