import React from "react";

export default function Slot(props) {
  const timeBlock = (time, key) => (
    <div key={key} className="timeBlock" style={{ width: props.width }}>
      {time}
    </div>
  );

  return <div className="Row Row-time">{props.quarters.map(timeBlock)}</div>;
}
