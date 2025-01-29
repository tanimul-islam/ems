import React from "react";
import Header from "../other/Header";
import TaskListNums from "../other/TaskListNums";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
  console.log(props);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNums />
      <Tasklist />
    </div>
  );
};

export default EmployeeDashboard;
