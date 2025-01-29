import React from "react";

const FailedTask = ({ tasks }) => {
  const failedTasks = tasks.filter((task) => task.failed);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto">
      {failedTasks.length > 0 ? (
        failedTasks.map((task, index) => (
          <div
            key={index}
            className="bg-red-600 px-4 py-2 flex items-center justify-between rounded mb-2"
          >
            <h2 className="font-bold">{task.title}</h2>
            <h3>{task.category}</h3>
            <p className="text-md text-white">Assigned to: {task.assignedTo}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No failed tasks available</p>
      )}
    </div>
  );
};

export default FailedTask;
