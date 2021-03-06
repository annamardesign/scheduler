import React from "react";

class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.multiplier = 2;
    this.time = fixTime(this.props.day.time, this.multiplier);
    this.halfsArray = timeToHalf(this.time, this.multiplier);
    this.artistsPerArea = this.getActs(
      this.props.day.events,
      this.props.day.areas
    );
    this.richArtistsPerArea = this.getActsWithPictures(this.artistsPerArea);
  }

  getActsWithPictures(stages) {
    return stages.map((events) =>
      events
        .map((x) => this.addImages(x, this.props.artists))
        .map(this.addColor)
        .map((x) => this.addCalendarUrl(x, this.time.date))
    );
  }

  addCalendarUrl(event, date) {
    return {
      ...event,
      url: calendar(event, date),
    };
  }

  addColor(event) {
    const { color, colorDark } = randomColorCode();
    return {
      ...event,
      color: color,
      colorDark: colorDark,
    };
  }

  addImages(event, artists) {
    const images = artists.find((artist) => {
      return artist.name === event.title;
    });
    return {
      ...event,
      ...images,
    };
  }

  getActs(events, areas) {
    return areas.map((area) => {
      return events
        .filter((e) => {
          return e.area === area.ID;
        })
        .map((x) => {
          return fixTime(x, this.multiplier);
        });
    });
  }

  renderRow = (sessions, key) => (
    <Row
      key={key}
      sessions={sessions}
      offsetWidth={this.time.startMinutes}
      width={this.time.length}
    />
  );

  render() {
    return (
      <div className="TimeTable">
        <TimeColumn halfs={this.halfsArray} width={30 * this.multiplier} />
        {this.richArtistsPerArea.map(this.renderColumn)}
      </div>
    );
  }
}

export default Scheduler;
