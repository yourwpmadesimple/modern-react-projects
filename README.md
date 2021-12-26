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






[<< Go To Previous Branch Lesson](https://github.com/yourwpmadesimple/modern-react-projects/tree/Lesson-5_Redux_ReduxInstall)