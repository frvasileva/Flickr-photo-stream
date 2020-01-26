import React from "react";
import "./style.scss";

function PhotoDescription(props) {
  return (
    <div className="description-wrapper card-text">
      <a href="#">{props.title}</a> by <a href="#">{props.author}</a>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
    </div>
  );
}

export default PhotoDescription;
