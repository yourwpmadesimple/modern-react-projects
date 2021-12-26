import React from "react";

import "./TodoListItemCSS.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {todo.isCompleted ? null : (
        <button
          onClick={() => onCompletedPressed(todo.text)}
          className="completed-button"
        >
          Mark As Completed
        </button>
      )}
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
