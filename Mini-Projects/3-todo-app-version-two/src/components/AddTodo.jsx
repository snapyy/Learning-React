import styles from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row gaku-row">
        <div className="col-6">
          <input
            className={styles.inputName}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.inputName} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success gaku-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
