import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";
import WelcomeMessage from "./components/WelcomeMessaage";
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todocontainer">
        <AppName />
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
