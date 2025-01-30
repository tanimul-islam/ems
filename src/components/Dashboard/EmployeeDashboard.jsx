/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNums from "../other/TaskListNums";
import Tasklist from "../TaskList/Tasklist";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

const EmployeeDashboard = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (data) {
      setTasks(data.tasks || []);
    }
  }, [data]);

  //function to update task status
  const updateTaskStatus = (taskIndex, status) => {
    const updatedTasks = tasks.map((task, index) => {
      index === taskIndex
        ? {
            ...task,
            completed: status === "completed",
            failed: status === "failed",
          }
        : task;
    });
    setTasks(updatedTasks);

    //update local Storage
    const { employees } = getLocalStorage();
    const updateEmployees = employees.map((emp) =>
      emp.email === data.email ? { ...emp, task: updatedTasks } : emp
    );

    localStorage.setItem("Employees", JSON.stringify(updateEmployees));
    setLocalStorage();
  };
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen text-white">
      <Header user={data?.name || "Employee"} />
      <TaskListNums tasks={tasks} />
      <Tasklist tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
