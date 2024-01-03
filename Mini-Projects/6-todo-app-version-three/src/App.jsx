import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like Share Subscribe",
  //     dueDate: "Right Now",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider value={[defaultTodoItems]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
