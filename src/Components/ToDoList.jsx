import { useState } from "react";
import TodoItem from "./ToDoItem";
import TodoInput from "./ToDoInput";
import "../App.css";


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");

    // Add or Edit a Task
    const addTask = (taskText) => {
        if (editIndex !== null) {
            setTasks(tasks.map((task, index) =>
                index === editIndex ? { text: taskText, completed: task.completed } : task
            ));
            setEditIndex(null);
            setEditTaskText("");
        } else {
            setTasks([...tasks, { text: taskText, completed: false }]);
        }
    };


    // Toggle Completion
    const toggleComplete = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };


    // Delete a Task
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));

        // Reset edit state if the deleted task was being edited
        if (editIndex === index) {
            setEditIndex(null);
            setEditTaskText("");
        }
    };


    // Edit a Task
    const editTask = (index) => {
        setEditIndex(index);
        setEditTaskText(tasks[index].text);
    };


    return (
        <div className="todo-container">
            <h1>Create your Todo-List</h1>
            <TodoInput addTask={addTask} editIndex={editIndex} editTaskText={editTaskText} />
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        task={task}
                        editTask={editTask}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
