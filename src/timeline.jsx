import React from "react";

function Timeline(props) {
  const { data } = props;
  if (data.length > 0) {
    return data.map((category, index) => {
      <div className="category" key={category.title}>
        {category.title}
      </div>;
    });
  } else {
    return <h3>No categories yet</h3>;
  }
}

export default Timeline;
