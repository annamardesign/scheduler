import React, { Component } from "react";
import getHours from "./utils/time.js";

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  renderTableHeader() {
    const hours = getHours();
    return hours.map((hour) => {
      return <th key={hour}>{hour.toUpperCase()}</th>;
    });
  }

  // renderTableData() {
  //   return (
  //     <tr key={hour}>
  //       <td></td>
  //     </tr>
  //   );
  // }

  // getSessions (sessions, areas) {
  //   return areas.map(area => {
  //     return sessions.filter(s => {
  //       return s.area === area.Id})

  //     }).map(a => {
  //       return fixTime(a, this.multiplier)
  //     })
  //   })
  // }
  render() {
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {/* {this.renderTableData()} */}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Timeline;
