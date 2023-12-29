function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container text-center">
      <div className="row gaku-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger gaku-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
