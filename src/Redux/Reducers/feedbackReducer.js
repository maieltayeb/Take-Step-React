import * as actionTypes from "../actionTypes";
import { ADD_FEEDBACK, GET_FEEDBACK } from "../actionTypes";

const initialState = [];

const SkillReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_FEEDBACK:
      newState = action.payload;
      break;
    case ADD_FEEDBACK:
      newState = [...state, action.payload];

      break;

    default:
      newState = state;
      break;
  }
  return newState;
  // }
};

export default SkillReducer;
