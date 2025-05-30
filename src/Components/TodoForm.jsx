import React, { useState } from "react";

const TodoForm = ({ onAddTAsk }) => {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("work");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      category: category,
      completed: false,
    };

    onAddTAsk(newTask);
    setTaskText("");
    setCategory("work");
  };

  return (
    <from onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">work</option>
        <option value="personal">personal</option>
        <option value="shopping">shopping</option>
      </select>

      <button type="submit">Add task</button>
    </from>
  );
};
export default TodoForm;
