import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import DeleteTask from "./DeleteTask";
import MoveTaskUp from "./MoveTaskUp";
export default function Todolist() {
  const [task, setTask] = useState([]);

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
            <DeleteTask task={task} setTask={setTask} index={index} />
            <MoveTaskUp task={task} setTask={setTask} index={index} />
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => console.log("Edit clicked")}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
