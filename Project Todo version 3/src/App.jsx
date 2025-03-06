import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessaage";
function App() {
  
  const [todoItems,setTodoItems]=useState([]);
  const handleNewItem=(itemName,itemDueDate)=>{
    const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodoItems);
  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
    setTodoItems(newTodoItems);
    
  }
  return (
    <center className="todocontainer">
      <AppName />
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
