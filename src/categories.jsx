import React, { Component } from "react";
import SessionCell from "./sessioncell.jsx";
import http from "./services/httpService";
import jp from "jsonpath";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedSessions: [],
    };
  }

  async componentDidMount() {
    let sessionPaths = await this.getSessionsPaths();
    this.getAllSessions(sessionPaths);
  }

  getAllSessions(sessionPaths) {
    let sessionReqArr = [];
    sessionPaths.forEach((slug) => {
      if (slug != undefined) {
        sessionReqArr.push(http.get(slug.path));
      }
    });

    Promise.all(sessionReqArr).then((results) => {
      let sessionsArr = [];
      results.forEach((r) =>
        r.data.length > 0 ? sessionsArr.push(r.data) : null
      );
      sessionsArr = sessionsArr.flat().sort(function (a, b) {
        return new Date(a.start) - new Date(b.start);
      });
      this.setState({ sortedSessions: sessionsArr });
    });
  }

  async getSessionsPaths() {
    const response = await http.get("/categories/list/", {
      responseType: "json",
    });
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
  }

  render() {
    const { sortedSessions } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          {sortedSessions.map((session) => (
            <SessionCell session={session} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
