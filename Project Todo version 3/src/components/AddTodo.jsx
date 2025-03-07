import { useRef } from "react";
import { useContext } from "react";
import TodoItemsContext from "./TodoItemsContext";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const DueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, DueDate);
  };
  return (
    <div className="container ">
      <form className="row um-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2 ">
          <button type="submit" className="btn btn-success um-btn ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
