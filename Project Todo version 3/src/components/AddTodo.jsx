import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName,setToDoName]=useState("");
  const [DueDate,setDueDate]=useState("");
  const handleNameChanage=(event)=>{
    setToDoName(event.target.value);
  }
  const hndleDataChange=(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked=()=>{
    onNewItem(todoName,DueDate);
    setDueDate("");
    setToDoName("");
  }
  return (
    <div className="container ">
      <div className="row um-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChanage}/>
        </div>
        <div className="col-4">
          <input type="date" value={DueDate} onChange={hndleDataChange}/>
        </div>
        <div className="col-2 ">
          <button type="button" className="btn btn-success um-btn " onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
