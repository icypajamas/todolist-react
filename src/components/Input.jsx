import React from "react";
import { useState } from "react";
import Add from "./Add";

const Input = ({ setTaskList, newTask, setNewTask, taskList }) => {
  function textHandler(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className="flex justify-center items-center gap-4 text-white ">
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={textHandler}
        className="flex border-4 border-amber-300 rounded-full px-3 py-1"
      />
      <Add
        setTaskList={setTaskList}
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
      ></Add>
    </div>
  );
};

export default Input;
