import React from "react";
import "./style.scss";

function PhotoTags(props) {
  return (
    <div className="tag-wrapper">
      Tags:{" "}
      <ul className="tag-list">
        {props.tags.map(itm => (
          <li>
            <a href="#">{itm}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoTags;
