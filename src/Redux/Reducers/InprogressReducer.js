import * as actionTypes from "../actionTypes";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS } from "../actionTypes";

const initialState = [];

const InprogReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_TASK_BY_ID:
      // debugger;
      newState = action.payload;
      break;
    case ADD_NEW_TASK:
      newState = [...state, action.payload];
      console.log(newState);
      break;
    case GET_VOL_TASKS:
      // debugger;
      newState = Object.keys(action.payload).map((key) => ({
        inprogTaskId: String(key),
        details: action.payload[key],
      }));
      console.log(newState);
      break;
    // debugger;

    default:
      newState = state;
      break;
  }
  return newState;
};

export default InprogReducer;
