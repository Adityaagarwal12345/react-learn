export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: 10,
        border: "1px solid #eee",
        borderRadius: 8,
        background: task.completed ? "#f7fff7" : "#fff",
      }}
    >
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <div
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
