import { useState, useEffect } from "react";

const TodoInput = ({ addTask, editIndex, editTaskText }) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(editTaskText || ""); // Update input when editing a task
    }, [editTaskText]);

    const handleSubmit = () => {
        if (input.trim() === "") return;
        addTask(input);
        setInput(""); // Reset input after submission
    };

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="What are your tasks for today?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Add"}</button>
        </div>
    );
};

export default TodoInput;
