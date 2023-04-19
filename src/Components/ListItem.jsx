import { React, useContext, useState } from "react";
import { ToDoContext } from "../App";

const ListItem = ({ id, text, finish }) => {
  const [finishToDo, setfinishToDo] = useState(false);
  const { handleDelete, handleFinish } = useContext(ToDoContext);

  const finished = (id) => {
    setfinishToDo((prev) => !prev);
    handleFinish(id, !finishToDo);
  };
  return (
    <article className="list-item">
      <span
        className={finish ? "finished" : ""}
        onClick={() => finished(id, finishToDo)}
      >
        {text}
      </span>
      <button className="btn-del" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </article>
  );
};

export default ListItem;
