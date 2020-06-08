import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import EducationReducer from "./EducationReducer";
// import ownerInfoReducer from "./ownerInfoReducer";

export default combineReducers({
  Users: usersReducer,
  educations: EducationReducer
  // ownerPersonalInfo: ownerInfoReducer
});
