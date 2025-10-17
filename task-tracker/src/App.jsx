import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("task-tracker.tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("task-tracker.tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", fontFamily: "sans-serif" }}>
      <h1>Task Tracker ✅</h1>
      <TaskForm onAdd={addTask} />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <FilterBar filter={filter} setFilter={setFilter} />
        <button onClick={clearCompleted} disabled={!tasks.some((t) => t.completed)}>
          Clear Completed
        </button>
      </div>

      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />

      <footer style={{ marginTop: 12, color: "#555" }}>
        <strong>{tasks.length}</strong> total •{" "}
        <strong>{tasks.filter((t) => !t.completed).length}</strong> pending •{" "}
        <strong>{tasks.filter((t) => t.completed).length}</strong> completed
      </footer>
    </div>
  );
}
