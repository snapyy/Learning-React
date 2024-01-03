import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on : ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row gaku-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.inputName}
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className={styles.inputName}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success gaku-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
