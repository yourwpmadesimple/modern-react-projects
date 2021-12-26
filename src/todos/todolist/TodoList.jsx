import React from "react";
import { connect } from "react-redux";

import TodoListItem from "../todolist-item/TodoListItem"; // This file has not yet been created
import NewTodoForm from "../todo-newform/NewTodoForm";
import { removeTodo, markTodoAsCompleted } from "../../redux/actions";
import { displayAlert } from "../../assets/thunks";

import "./TodoListCSS.css";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
