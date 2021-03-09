import React from "react";
import Timeline from "react-calendar-timeline";
import containerResizeDetector from "react-calendar-timeline/lib/resize-detector/container";
import "react-calendar-timeline/lib/Timeline.css";

const Calendar = (props) => {
  const groups = [{ id: 1, title: "Sessions" }];
  const minZoom = 14400000;
  const maxZoom = 28800000;
  const steps = {
    second: 0,
    minute: 30,
    hour: 1,
    day: 1,
    month: 0,
    year: 0,
  };

  const items = [];
  props.sessions.forEach((s) => {
    s.start_time = Date.parse(s.start);
    s.end_time = Date.parse(s.end);
    s.group = 1;
    items.push(s);
  });

  const timelineStart = new Date(props.sessions[0].start);
  const timelineEnd = new Date(props.sessions[props.sessions.length - 1].end);
  const canvasStart = Date.parse(props.sessions[0].start);
  const canvasEnd = Date.parse(props.sessions[props.sessions.length - 1].end);

  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={timelineStart}
        defaultTimeEnd={timelineEnd}
        canvasTimeStart={canvasStart}
        canvasTimeEnd={canvasEnd}
        timeSteps={steps}
        stackItems={true}
        minZoom={minZoom}
        maxZoom={maxZoom}
        traditionalZoom={true}
        resizeDetector={containerResizeDetector}
      />
    </div>
  );
};

export default Calendar;
