import React, { useState } from "react";
import { connect } from "react-redux"; // returns a connected version of component from the redux store

import { addTodoRequest } from "../../assets/thunks";

import "./NewTodoFormCSS.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state, onCreatePressed) => ({
  todos: state.todos, // NewTodoForm will automatically get the the todos from the state passed to it as a todos prop
});

const mapDispatchToProps = (dispatch) => ({
  // allows components trigger actions that redux store will respond to
  onCreatePressed: (text) => dispatch(addTodoRequest(text)), // creates a proper object action
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
