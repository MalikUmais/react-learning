import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";
function Item({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container ">
      <div className="row um-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button "
            className=" btn btn-danger um-btn"
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
