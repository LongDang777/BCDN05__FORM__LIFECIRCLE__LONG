import { combineReducers,createStore } from "redux";
import { quanlySVReducer } from "./QLSVReducer";

const rootReducer = combineReducers({
  quanlySVReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())