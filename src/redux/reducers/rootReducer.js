import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  // reducer list
});

export default rootReducer;
