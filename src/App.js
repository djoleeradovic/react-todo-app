import { React, createContext, useState, useEffect } from "react";
import { AddNew, ToDoList } from "./Components";
import "./index.css";

export const ToDoContext = createContext();

const App = () => {
  const [todos, setToDos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddNew = (text) => {
    const todo = {
      id: todos.length + 1,
      text: text,
      finish: false,
    };

    setToDos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const handleFinish = (id, isFinished) => {
    const selected = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, finish: isFinished };
      }

      return todo;
    });
    setToDos(selected);
  };

  return (
    <ToDoContext.Provider
      value={{ handleFinish, handleDelete, handleAddNew, todos }}
    >
      <section className="container">
        <AddNew />
        <ToDoList />
      </section>
    </ToDoContext.Provider>
  );
};

export default App;
