import React from "react";

const AllTask = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-5">No tasks available.</p>
    );
  }

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-80 overflow-auto">
      {tasks.map((task, index) => (
        <article
          key={index}
          className={`px-4 py-2 flex flex-col gap-2 rounded mb-2 ${
            task.completed ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold">{task.title}</h2>
            <h4 className="text-md font-semibold">
              {new Date(task.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h4>
          </div>
          <p className="text-m text-white">{task.category}</p>
          <p className="text-sm text-white">
            Assigned to: {task.assignedTo || "Unassigned"}
          </p>
          <p
            className={`text-sm font-semibold bg-white rounded w-fit p-2 ${
              task.completed ? "text-green-900" : "text-red-900"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </p>
        </article>
      ))}
    </div>
  );
};

export default AllTask;
