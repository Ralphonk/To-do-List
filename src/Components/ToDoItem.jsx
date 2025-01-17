const TodoItem = ({ task, index, editTask, toggleComplete, deleteTask }) => {
    return (
        <li className={`task ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <div className="buttons">
                {!task.completed && ( // 👈 Hide Edit button if task is completed
                    <button className="edit-btn" onClick={() => editTask(index)}>EDIT</button>
                )}
                <button className="complete-btn" onClick={() => toggleComplete(index)}>
                    {task.completed ? "UNDO" : "COMPLETED"}
                </button>
                <button className="delete-btn" onClick={() => deleteTask(index)}>DELETE</button>
            </div>
        </li>
    );
};

export default TodoItem;
