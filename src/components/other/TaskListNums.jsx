import React from "react";

const TaskListNums = ({ tasks }) => {
  const newTask = tasks.filter((task) => task?.newTask).length;
  const completedTask = tasks.filter((task) => task?.completedTask).length;
  const acceptedTask = tasks.filter((task) => task?.acceptedTask).length;
  const failedTask = tasks.filter((task) => task?.failedTask).length;

  return (
    <div className="mt-10 grid grid-cols-4 gap-4">
      <div className="h-40 bg-blue-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="h-40 bg-red-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">{completedTask}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>

      <div className="h-40 bg-green-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">{acceptedTask}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>

      <div className="h-40 bg-yellow-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">{failedTask}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNums;
