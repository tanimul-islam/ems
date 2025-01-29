import React from "react";

const AcceptTask = ({ tasks }) => {
  const acceptedTasks = tasks.filter((task) => task.active && !task.completed);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto">
      {acceptedTasks.length > 0 ? (
        acceptedTasks.map((task, index) => (
          <div
            key={index}
            className="bg-green-600 px-4 py-2 flex items-center justify-between rounded mb-2"
          >
            <h2 className="font-bold">{task.title}</h2>
            <h3>{task.category}</h3>
            <p className="text-md text-white">Assigned to: {task.assignedTo}</p>
            <h5>{task.completed ? "Completed" : "Pending"}</h5>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No accepeted tasks available</p>
      )}
    </div>
  );
};

export default AcceptTask;
