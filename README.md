# Using Redux

## Installing Redux
*Command for intalling Redux*
```javascript
npm i redux react-redux
```

## Redux Store
*Beginninng code for Store*
```javascript
import { createStore, combineReducers } from "redux";

const reducers = {}; // This holds all reducers

const rootReducer = combineReduc ers(reducers);

const configureStore = () => createStore(rootReducer);
```

## New imports to store.jsx
```javascript
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
```


## Create Redux Action
*Redux action code*
```javascript
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
```

## Create Reducer
*code*
```javascript
import { connect } from 'react-redux'
```

## Giving Components Access To The Redux Store
```javascript
import { connect } from 'react-redux'
import { createTodo } from "../../redux/actions";

const NewTodoForm = ({ todos })

const mapStateToProps = (state, onCreatePressed) => ({
  todos: state.todos, // NewTodoForm will automatically get the the todos from the state passed to it as a todos prop
});

const mapDispatchToProps = (dispatch) => ({
  // allows components trigger actions that redux store will respond to
  onCreatePressed: (text) => dispatch(createTodo(text)), // creates a proper object action
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

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
```

## Install Redux Persist
```
npm i redux-persist
```

## Redux DevTools
URL https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
*Modify store.jsx*
```javascript
export const configureStore = () =>
  createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
```

## Installing Thunk
```
npm i redux-thunk redux-devtools-extension @babel/runtime

and

npm i --save-dev @babel/plugin-transform-runtime
```


[<< Go To Previous Branch Lesson](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-98_Redux_RefactoringTodosReducer) | [Go To Next Branch Lesson >>](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-99_Redux_UsingThunksToCreateServerResources)