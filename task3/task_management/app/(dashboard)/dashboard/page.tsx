"use client";

import { useState } from "react";
import { Pencil, Trash2, CheckCircle2 } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  dueDate: string;
  completed: boolean;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
  });

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        createdAt: new Date().toLocaleDateString(),
        dueDate: newTask.dueDate,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask({
        title: "",
        description: "",
        dueDate: new Date().toISOString().split("T")[0],
      });
      setIsModalOpen(false);
    }
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <span className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">
            Create task
          </span>
        </div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="relative group bg-gray-900 py-10 px-4 flex flex-col space-y-2 items-start cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover"
          >
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white text-xl font-bold">{task.title}</h4>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleComplete(task.id);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    task.completed ? "bg-green-500" : "bg-gray-800"
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 ${
                      task.completed ? "text-white" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <p className="text-white/50 text-sm mb-4">{task.description}</p>
              <div className="flex items-center text-white/20 text-xs mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </div>
              <div className="flex items-center justify-between text-white/50">
                <p className="text-sm">Created: {task.createdAt}</p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTask(task.id);
                    }}
                    className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-800 text-white/50 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-white">Add New Task</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/50 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter task title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 mb-1">
                  Description
                </label>
                <textarea
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter task description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-white/50 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
