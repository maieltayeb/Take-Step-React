import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import EducationReducer from "./EducationReducer";
import SkillReducer from "./skillReducer";
// import ownerInfoReducer from "./ownerInfoReducer";

export default combineReducers({
  Users: usersReducer,
  educations: EducationReducer,
  Skills: SkillReducer,
});
