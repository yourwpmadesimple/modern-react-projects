## Todos components

# todoList component
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


[<< Go Back To Previous Branch Lesson](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-1_Todos_ListComponent) | [Go To Next Branch Lesson >>](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-3_Todos_NewTodoForm)