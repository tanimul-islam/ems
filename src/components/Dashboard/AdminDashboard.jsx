import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask"; // Assuming Tasklist.jsx is reused for all tasks
import { getLocalStorage } from "../../utils/localStorage";
import NewTask from "../TaskList/NewTask";
import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    refreshTask();
  }, []);

  const refreshTask = () => {
    const { employees } = getLocalStorage();
    const allTasks = employees.flatMap((employee) =>
      employee.tasks.map((task) => ({ ...task, assignedTo: employee.name }))
    );
    setTasks(allTasks);
  };
  return (
    <div className="h-screen w-full p-10">
      {/* Header Section */}
      <Header user="Admin User" />

      {/* Task Creation Section */}
      <CreateTask refreshTask={refreshTask} />

      {/* Task Overview Section */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold bg-yellow-600 w-1/5 rounded-md px-2 text-center py-2">
            New Tasks
          </h2>
          <NewTask tasks={tasks} />
        </div>
        <div>
          <h2 className="text-xl font-bold bg-emerald-600 w-1/4 rounded-md px-2 text-center py-2">
            Accepted Tasks
          </h2>
          <AcceptTask tasks={tasks} />
        </div>

        <div>
          <h2 className="text-xl font-bold bg-blue-500 w-1/3 rounded-md px-2 text-center py-2">
            Completed Tasks
          </h2>
          <CompleteTask tasks={tasks} />
        </div>
        <div>
          <h2 className="text-xl font-bold bg-red-600 w-1/3 rounded-md px-2 text-center py-2">
            Failed Tasks
          </h2>
          <FailedTask tasks={tasks} />
        </div>
      </div>
      {/* All Tasks Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
        <AllTask tasks={tasks} />
      </div>
    </div>
  );
};

export default AdminDashboard;
