import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
