import { applyMiddleware, createStore } from "redux";
import { todoReducer, todoDetailsReducer } from "../reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { combineReducers } from "redux";



const middleware = [thunk];

const reducer = combineReducers({todos: todoReducer, todoDetails: todoDetailsReducer})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;