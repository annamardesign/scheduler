import React, { Component } from "react";
import Timeline from "./timeline.jsx";
import axios from "axios";

const baseApiUrl = "https://api.hacksoft.io/v1/categories/list";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { result: data } = await axios.get(baseApiUrl);
    let categoriesList = data["result"];
    this.setState({
      data: [
        {
          title: categoriesList.title,
          startDate: new Date(categoriesList.startDate * 1000),
          endDate: new Date(categoriesList.endDate * 1000),
        },
      ],
    });
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          {data.map((category, index) => (
            <Timeline key={index} index={index} data={data} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
