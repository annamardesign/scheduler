import React from "react";
import "row.css";

export default function Row(props) {
  const thewidth = {
    width: props.width,
  };

  const renderSessionCell = (session, key) => (
    <SessionCell
      key={key}
      top={session.startMinutes - props.offsetWidth}
      width={session.length}
      color={session.color}
      start={session.start}
      end={session.end}
      sessionTitle={session.title}
    />
  );

  return (
    <div className="Row" style={thewidth}>
      {props.sessions.map(renderSessionCell)}
    </div>
  );
}
