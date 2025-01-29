import React from "react";

const CompleteTask = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto">
      {completedTasks.length > 0 ? (
        completedTasks.map((task, index) => (
          <div
            key={index}
            className="bg-blue-500 px-4 py-2 flex items-center justify-between rounded mb-2"
          >
            <h2 className="font-bold">{task.title}</h2>
            <h3>{task.category}</h3>
            <p className="text-s text-white">Assigned to: {task.assignedTo}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No completed tasks available</p>
      )}
    </div>
  );
};

export default CompleteTask;
