import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessaage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todocontainer">
        <AppName />
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
