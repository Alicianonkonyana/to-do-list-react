import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function DeleteTask({ task, setTask, index }) {
  function deleteTask() {
    const updatedTask = task((_, i) => i !== index);

    setTask(updatedTask);
  }

  return (
    <div className="DeleteTask">
      <FontAwesomeIcon icon={faTrash} onClick={deleteTask} />
    </div>
  );
}
