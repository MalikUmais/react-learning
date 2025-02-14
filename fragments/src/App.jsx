import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//for using fragment
import React from "react";

function App() {
  let items = [
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  return (
    // <React.Fragment>
    //other method
    <>
      <h1>items</h1>
      <ul className="list-group">
        {/* map methods */}
        {items.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
        {/* {items.map((item) => (
          <li  class="list-group-item">{item}</li>
        ))} */}
        ;
      </ul>
    </>
    // </React.Fragment>
  );
}

export default App;
