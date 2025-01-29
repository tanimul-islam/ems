import React from "react";

const TaskListNums = () => {
  return (
    <div className="mt-10 grid grid-cols-4 gap-4">
      <div className="h-40 bg-blue-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="h-40 bg-red-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>

      <div className="h-40 bg-green-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>

      <div className="h-40 bg-yellow-500 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNums;
