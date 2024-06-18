import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowUp,
  faArrowDown,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
export default function Todolist() {
  const [task, setTask] = useState(["Attend a meeting", "Breakfaast", "Work"]);
  const [newTask, setNewTask] = useState("");
  function handleInput(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
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
      <button type="submit" className="add-button" onClick={addTask}>
        Add
      </button>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => console.log("Edit clicked")}
            />
            <FontAwesomeIcon
              icon={faArrowUp}
              onClick={() => console.log("Move up clicked")}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
