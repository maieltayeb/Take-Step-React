import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
// import ownerInfoReducer from "./ownerInfoReducer";

export default combineReducers({
  Users: usersReducer,
  // ownerPersonalInfo: ownerInfoReducer
});
