import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-gray-800">
        <Header></Header>
        <List taskList={taskList}></List>
        <Input
          setTaskList={setTaskList}
          newTask={newTask}
          setNewTask={setNewTask}
          taskList={taskList}
        ></Input>
      </div>
    </>
  );
}

export default App;
