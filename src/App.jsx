import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>📝 To-Do List with Filters</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
