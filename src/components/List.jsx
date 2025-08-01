import React from "react";

const List = ({ taskList }) => {
  return (
    <div className="flex justify-center text-white py-12">
      <ol className="list-decimal">
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;
