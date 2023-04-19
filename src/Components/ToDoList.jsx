import { React, useContext } from "react";
import { ToDoContext } from "../App";
import ListItem from "./ListItem";

const ToDoList = () => {
  const { todos } = useContext(ToDoContext);
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            finish={todo.finish}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
