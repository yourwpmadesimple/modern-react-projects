# Using Redux

## Installing Redux
*Command for intalling Redux*
```
npm i redux react-redux
```

## Redux Store
*Beginninng code for Store*
```
import { createStore, combineReducers } from "redux";

const reducers = {}; // This holds all reducers

const rootReducer = combineReduc ers(reducers);

const configureStore = () => createStore(rootReducer);
```


## Create Redux Action
*Redux action code*
```
export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
``






[<< Go To Previous Branch Lesson](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-7_Redux_CreatingActions) | [Go To Next Branch Lesson >>](https://github.com/yourwpmadesimple/modern-react-projects/tree/)