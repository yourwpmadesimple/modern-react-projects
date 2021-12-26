import React from "react";
import { connect } from "react-redux";

import TodoListItem from "../todolist-item/TodoListItem"; // This file has not yet been created
import NewTodoForm from "../todo-newform/NewTodoForm";
import { removeTodo } from "../../redux/actions";

import "./TodoListCSS.css";

const TodoList = ({ todos = [], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispacth) => ({
  onRemovePressed: (text) => dispacth(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
