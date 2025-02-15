import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "13/02/2025",
    },
    {
      name: "Go to College",
      dueDate: "13/02/2025",
    },
    {
      name: "Go to Market",
      dueDate: "13/02/2025",
    },
  ];
  return (
    <center className="todocontainer">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
