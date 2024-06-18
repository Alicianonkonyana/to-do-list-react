import React, { useState } from "react";
export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  function handleInput(event) {
    setTasks(event.target.value);
  }

  return (
    <div className="Todolist">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="write a task..."
        className="task-input"
        onChange={handleInput}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </div>
  );
}
