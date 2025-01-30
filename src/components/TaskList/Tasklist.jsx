import React from "react";

const Tasklist = ({ tasks, updateTaskStatus }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-400 text-center mt-5">No tasks assigned.</p>;
  }

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 rounded-xl flex justify-flex-start gap-5 items-center flex-nowrap"
    >
      {tasks.map((task, index) => (
        <article
          key={index}
          className={`h-full w-[300px] ${
            task.completed
              ? "bg-green-200"
              : task.failed
              ? "bg-red-200"
              : "bg-yellow-200"
          } rounded-xl flex-shrink-0 p-5`}
        >
          <div className="flex justify-between items-center font-semibold">
            <h3 className="text-white text-center px-3 py-1 rounded bg-blue-500">
              {task.category}
            </h3>
            <h4 className="text-black text-sm">
              {new Date(task.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h4>
          </div>
          <h2 className="text-2xl font-semibold mt-5 text-black">
            {task.title}
          </h2>
          <p className="text-sm text-gray-700 mt-2">{task.description}</p>
          <p
            className={`text-sm font-bold mt-2 ${
              task.completed
                ? "text-green-700"
                : task.failed
                ? "text-red-700"
                : "text-yellow-700"
            }`}
          >
            {task.completed ? "Completed" : task.failed ? "Failed" : "Pending"}
          </p>

          {!task.completed && !task.failed && (
            <div className="mt-3 flex gap-2">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => updateTaskStatus(index, "completed")}
              >
                Complete
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => updateTaskStatus(index, "failed")}
              >
                Fail
              </button>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default Tasklist;
