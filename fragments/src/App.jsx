import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./components/items";
import Error from "./components/Error";
import "./App.css";
//for using fragment
import React from "react";
function App() {
  let items = [
    "A first item",
    "A second item",
    "A third item",
    "And a fourth one",
  ];
  return (
    <>
      <h1 className="item-heading">items</h1>
      <Error iTem={items} />
      <Items iTem={items} />
    </>
  );
}
export default App;

// let items = [
//   "A second item",
//   "A third item",
//   "A fourth item",
//   "And a fifth one",
// ];
// // let items = [];
// // let message=items.length === 0 ? <h3>empty</h3> : null;
// return (
//   // <React.Fragment>
//   //other method
//   <>
//     <h1>items</h1>
//     {/* {message} */}
//     {/* another method for conditional is  */}
//     {items.length === 0 && <h3>empty</h3> }
//     <ul className="list-group">
//       {/* map methods */}
//       {items.map((item) => (
//         <li key={item} class="list-group-item">
//           {item}
//         </li>
//       ))}
//       {/* {items.map((item) => (
//         <li  class="list-group-item">{item}</li>
//       ))} */}
//       ;
//     </ul>
//   </>
//   // </React.Fragment>
// );
