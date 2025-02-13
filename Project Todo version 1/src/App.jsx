import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css";
function App() {
  return (
    <center className="todocontainer">
      {/* <AppName></AppName> */}
      {/* both above and below methods can be used */}
      <AppName />
      <div className="item-cont">
        <AddTodo />
        <Item1 />
        <Item2 />
      </div>
    </center>
  );
}

export default App;
