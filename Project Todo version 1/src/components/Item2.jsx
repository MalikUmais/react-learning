function Item2() {
  let todoName = "Go to College";
  let todoDate = "13/02/2025";
  return (
    <div class="container">
      <div class="row um-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class=" btn btn-danger um-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item2;
