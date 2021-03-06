import React, { Component } from "react";
import Timeline from "./timeline.jsx";
import axios from "axios";
import jp from "jsonpath";

const baseApiUrl = "https://api.hacksoft.io/v1";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
    };
  }

  async componentDidMount() {
    let sessionPaths = await this.getSessionsPaths();
    let ab;
  }

  async getSessionsPaths() {
    const response = await axios.get(
      "https://api.hacksoft.io/v1/categories/list/",
      {
        responseType: "json",
      }
    );
    let categoriesObj = response.data.results;
    let categoriesList = jp.nodes(categoriesObj, "$..category");
    for (let i = 0; i < categoriesList.length; i++) {
      if (!categoriesList[i].value.sessions_count > 0) {
        categoriesList.splice(i, 1);
      }
    }
    return categoriesList.map((item) => {
      if (item.value.sessions_count > 0) {
        return {
          path: "/categories/" + item.value.slug + "/retrieve",
        };
      }
    });

    function prepareSessionsReq() {
      sessionPaths.forEach(cat => {
        getSessionReq.push
      })

      })
    }
  }



  //   function toArray(obj) {
  //     const result = [];
  //     for (const prop in obj) {
  //         const value = obj[prop];
  //         if (typeof value === 'object') {
  //             result.push(toArray(value));
  //         }
  //         else {
  //             result.push(value);
  //         }
  //     }
  //     return result;
  // }

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
        <div className="container"></div>
      </React.Fragment>
    );
  }
}

export default Categories;
