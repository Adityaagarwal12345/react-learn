import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) {
    return <p style={{ marginTop: 12 }}>No tasks yet — add one ✨</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: 12, display: "grid", gap: 8 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}
