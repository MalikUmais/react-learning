import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Item from "./Item";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemCont}>
      {todoItems.map((item) => (
        <Item key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItems;
