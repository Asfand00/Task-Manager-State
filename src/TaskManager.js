import React, { useState } from 'react';

const TaskManager = () => {
    // State initialization
    const [tasks, setTasks] = useState([]);

    // Function to add a new task
    const addTask = () => {
        // Generate a unique id for the task (e.g., using timestamp)
        const id = Date.now();
        // Create a new task object
        const newTask = { id, title: 'New Task', completed: false };
        // Update the tasks array immutably by creating a new array with the new task appended
        setTasks([...tasks, newTask]);
    };

    // Function to toggle the completion status of a task
    const toggleTaskCompletion = (taskId) => {
        // Update the tasks array immutably by mapping over it
        const updatedTasks = tasks.map(task =>
        // If the task id matches, toggle its completed status, otherwise return the task unchanged
        task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        // Set the state with the updated tasks array
        setTasks(updatedTasks);
    };

    return (
        <div>
        <h2>Task Manager</h2>
        {/* Button to add a new task */}
        <button onClick={addTask}>Add Task</button>
        {/* Render the list of tasks */}
        <ul>
            {tasks.map(task => (
            <li key={task.id}>
                {/* Display task title */}
                {task.title}
                {/* Button to toggle completion status */}
                <button onClick={() => toggleTaskCompletion(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TaskManager;
