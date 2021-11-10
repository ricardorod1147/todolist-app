import React from 'react'
import "../styles/Todo.styles.css";

const Todo = ({title, status , handleCompleteTodo, id}) => {
    return (
        <div className="todo-card">
            <div className="todo-title">
                <h4>{title}</h4>
            </div>

            <div className="todo-actions">
                <button onClick={() => handleCompleteTodo(id)}>{status ? "Reset" : "Completed"}</button>
            </div>
        </div>
    )
}

export default Todo
