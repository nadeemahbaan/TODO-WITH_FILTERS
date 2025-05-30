import React from "react";

const TodoList = ({tasks}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.text}</span>{" "}
                    <span>({task.category})</span>

                </li>
            ))}
        </ul>
    );
};

export default TodoList;