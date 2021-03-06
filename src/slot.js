import React from "react";

export default function Slot(props) {
  const timeBlock = (time, key) => (
    <div key={key} className="time-block" style={{ width: props.width }}>
      {time}
    </div>
  );

  return <div className="column-time">{props.quarters.map(timeBlock)}</div>;
}
