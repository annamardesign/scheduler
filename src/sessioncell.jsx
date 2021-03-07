import React, { Component } from "react";
import "./sessioncell.css";

export default function SessionCell(props) {
  const thewidth = {
    width: props.width,
    key: props.key,
  };

  // let indents = [];

  //   for (let i = 0; i < 25; i++) {
  //     indents.push(
  //       <tr className={i}>
  //         <td>{i}</td>
  //         <td className="hour-cell" id={i}></td>
  //       </tr>
  //     );
  //   }
  //   for (let i = props.session.start; i < props.session.end; i++) {
  //     indents[i] = (
  //       <tr className={i}>
  //         <td>{i}</td>
  //         <td
  //           className="hour-cell"
  //           id={props.session.title}
  //           key={props.session.start}
  //         >
  //           {props.session.title}
  //         </td>
  //       </tr>
  //     );
  //   }
  // }

  return (
    <div className="session-cell" style={thewidth}>
      {/* <h5 className="session-title">{props.session.title}</h5>
      <h6>
        {props.session.start} - {props.session.end}
      </h6> */}

      <td></td>
      <td
        className="hour-cell"
        id={props.session.title}
        key={new Date(props.session.start).getTime()}
      >
        {props.session.title}
      </td>
    </div>
  );
}
