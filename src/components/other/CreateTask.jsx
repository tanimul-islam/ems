import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

const CreateTask = ({ refreshTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    assignTo: "",
  });

  /**
   * Handles change event of a form input and updates the task state accordingly
   * @param {React.ChangeEvent<HTMLInputElement|HTMLSelectElement>} e - The change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { employees } = getLocalStorage();
    const updateEmployees = employees.map((emp) => {
      if (emp.name === task.assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, { ...task, active: true, completed: false }],
        };
      }
      return emp;
    });

    localStorage.setItem("Employees", JSON.stringify(updateEmployees));
    setLocalStorage();
    refreshTask();
    setTask({
      title: "",
      description: "",
      date: "",
      category: "",
      assignTo: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-start justify-between w-full bg-[#1c1c1c] flex-wrap p-8 mt-10"
      >
        <div className="w-1/2">
          <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">
              Task Title
            </h3>
            <input
              value={task.title}
              name="title"
              onChange={handleChange}
              placeholder="Task Title"
              required
              className="w-4/5 border-2 border-gray-300 rounded-md px-2 py-1 outline-none bg-transparent placeholder:text-gray-300"
              type="text"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">Date</h3>
            <input
              value={task.date}
              name="date"
              onChange={handleChange}
              placeholder="Deadline"
              required
              className="w-4/5 border-2 border-gray-300 rounded-md px-2 py-1 outline-none bg-transparent placeholder:text-gray-300"
              type="date"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">
              Assign To
            </h3>
            <input
              value={task.assignTo}
              name="assignTo"
              onChange={handleChange}
              placeholder="Assign To (Employee Name)"
              required
              className="w-4/5 border-2 border-gray-300 rounded-md px-2 py-1 outline-none bg-transparent placeholder:text-gray-300"
              type="text"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">
              Category
            </h3>
            <input
              name="category"
              value={task.category}
              onChange={handleChange}
              placeholder="Category"
              required
              className="w-4/5 border-2 border-gray-300 rounded-md px-2 py-1 outline-none bg-transparent placeholder:text-gray-300"
              type="text"
            />
          </div>
        </div>

        <div className="w-2/5 flex-col items-start">
          <h3 className="font-semibold text-lg text-gray-300 mb-2">
            Description
          </h3>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            placeholder="Task Description"
            className="w-full h-44 border-2 border-gray-300 rounded-md px-2 py-1 outline-none bg-transparent"
          ></textarea>
          <button className="bg-emerald-500 py-3 rounded-md px-6 mt-5 w-full font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
