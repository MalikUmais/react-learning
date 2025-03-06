import Item from "./Item";
import styles from "./TodoItems.module.css"
const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div className={styles.itemCont}>
      {todoItems.map((item) => (
        <Item todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};
export default TodoItems;
