import { createStore, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancer())
  : createStore(rootReducer);
