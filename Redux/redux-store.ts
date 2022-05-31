import { combineReducers, compose, createStore } from "redux";
import launchesReducer from "./launchesReducer";

let rootReducer = combineReducers({
  Launches: launchesReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer);

// if (typeof window !== "undefined") {
//   window.__store__ = store;
// }
export default store;
