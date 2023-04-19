import { React, useContext, useRef, useState } from "react";
import { ToDoContext } from "../App";

const AddNew = () => {
  const { handleAddNew } = useContext(ToDoContext);
  const [todoValue, setToDoValue] = useState("");
  const text = useRef(null);

  const handleSave = () => {
    if (todoValue.trim().length > 0) {
      handleAddNew(todoValue);
      setToDoValue("");
      text.current.focus();
    }
  };

  const handleSaveOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="add-new">
      <input
        onChange={(e) => setToDoValue(e.target.value)}
        onKeyDown={handleSaveOnEnter}
        type="text"
        value={todoValue}
        ref={text}
        placeholder="Enter a task"
      />
      <button className="btn-add" onClick={handleSave}>
        Add Task
      </button>
    </div>
  );
};

export default AddNew;
