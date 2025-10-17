function FilterButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 10px",
        borderRadius: 6,
        background: active ? "#222" : "transparent",
        color: active ? "#fff" : "#222",
        border: "1px solid #ddd",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function FilterBar({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
        All
      </FilterButton>
      <FilterButton active={filter === "pending"} onClick={() => setFilter("pending")}>
        Pending
      </FilterButton>
      <FilterButton
        active={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </FilterButton>
    </div>
  );
}
