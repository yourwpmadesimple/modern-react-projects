import React from "react";
import TodoListItem from "../todolist-item/TodoListItem"; // This file has not yet been created

import "./TodoListCSS.css";

const TodoList = ({ todos }) => (
  <div className="list-wrapper">
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
