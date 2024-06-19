import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function MoveTaskUp({ task, setTask, index }) {
  function MoveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  return (
    <div className="MoveTaskUp">
      <FontAwesomeIcon icon={faArrowUp} onClick={() => MoveTaskUp(index)} />
    </div>
  );
}
