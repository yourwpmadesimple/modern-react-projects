## Todos components

# TodoList component
*Beginning code for TodoList.jsx*
```
import React from "react";
import TodoListItem from './TodoLIstItem' // This file has not yet been created

import './TodoListCSS.css'


const TodoList = ({ todos }) => (
 <div className="list-wrapper">
    {todos.map(todo => <TodoListItem todo={todo} />)}
 </div>
) 

export default TodoList
```

## TodoListItem component
*Beginning code for TodoListItem.jsx*
```
import React from "react";

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
```
## NewTodoForm component
*Beginning code for NewTodoForm.jsx*
```
import React from "react";

const NewTodoForm = () => (
  <div className="new-todo-form">
    <input className="new-todo-input" type="text" />
    <button className="new-todo-button">Create Todo</button>
  </div>
);

export default NewTodoForm;
```





[<< Go Back To Previous Branch Lesson](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-3_Todos_NewTodoForm)