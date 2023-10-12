import React from "react";
import Heading from "./heading";
import details from "./details";
import Content from "./content";

function looper(items) {
  return (
    <Content name={items.emoji} title={items.name} content={items.content} />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {details.map(looper)}
    </div>
  );
}
export default App;
