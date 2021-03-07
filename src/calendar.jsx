import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const Calendar = (props) => {
  const groups = [{ id: 1, title: "Sessions" }];
  const steps = {
    second: 0,
    minute: 30,
    hour: 1,
    day: 1,
    month: 0,
    year: 0,
  };
  const items1 = [
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: 1615125600000,
      end_time: 1615127400000,
    },
    {
      id: 2,
      group: 1,
      title: "item 2",
      start_time: 1615127400000,
      end_time: 1615131000000,
    },
    {
      id: 3,
      group: 1,
      title: "item 3",
      start_time: 1615127400000,
      end_time: 1615129200000,
    },
  ];

  const items = [];
  props.sessions.forEach((s) => {
    s.start_time = Date.parse(s.start);
    s.end_time = Date.parse(s.end);
    s.group = 1;
    items.push(s);
  });
  const timelineStart = Date.parse(props.sessions[0].start);
  const timelineEnd = Date.parse(props.sessions[props.sessions.length - 1].end);

  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={timelineStart}
        defaultTimeEnd={timelineEnd}
        timeSteps={steps}
        stackItems={true}
        maxZoom={3600000}
        traditionalZoom={true}
      />
    </div>
  );
};

export default Calendar;
