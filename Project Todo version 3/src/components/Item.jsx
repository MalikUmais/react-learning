function Item({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row um-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button "
            className=" btn btn-danger um-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
