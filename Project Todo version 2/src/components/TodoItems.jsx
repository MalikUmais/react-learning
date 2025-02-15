import Item from "./Item";
import styles from "./TodoItems.module.css"
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemCont}>
      {todoItems.map((item) => (
        <Item todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItems;
