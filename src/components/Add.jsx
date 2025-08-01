import React from "react";
import { useState } from "react";

const Add = ({ setNewTask, newTask, setTaskList, taskList }) => {
  function addTask() {
    if (newTask.trim() !== "") {
      setTaskList((taskList) => [...taskList, newTask]);
      setNewTask("");
    }
  }
  return (
    <div>
      <button
        onClick={addTask}
        className="bg-amber-300 rounded-full px-4 py-2 text-black"
      >
        +
      </button>
    </div>
  );
};

export default Add;
