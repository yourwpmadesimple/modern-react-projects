import React from "react";
import "./TodoListItemCSS.css";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark As Complete</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
