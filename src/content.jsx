import React from "react";

function Content(props) {
  return (
    <div className="container">
      <div className="cards">
        <span id="emoji">{props.name}</span>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Content;
