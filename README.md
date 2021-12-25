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


[<< Go Back To Branch Lesson-1_Todos_ListComponent](https://github.com/yourwpmadesimple/modern-react-projects) [Go To Next Branch Lesson]()