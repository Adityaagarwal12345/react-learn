import {useState} from "react";

export default function TaskForm({onAdd}){
    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefualt();
        onAdd(value);
        setValue("");
    };
  return (
    <form onSubmit={handleSubmit} style={{display:"flex",gap:8}}>
        <input type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        placeholder="Add a new task..."
        style={{flex:1,pading:"8px 10px"}}
        />
        <button type="Submit">Add</button>
    </form>
  );
}