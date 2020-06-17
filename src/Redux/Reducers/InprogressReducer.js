import * as actionTypes from "../actionTypes";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS } from "../actionTypes";

const initialState = [];

const InprogReducer = (state = initialState, action) => {
  let newState = state;
  let obj;
  let arr = [];
  switch (action.type) {
    case GET_TASK_BY_ID:
      newState = action.payload;
      console.log(newState);
      break;
    case ADD_NEW_TASK:
      newState = [...state, action.payload];
      console.log(newState);

    case GET_VOL_TASKS:
      debugger;
      // obj = { ...action.payload };
      // newState = Object.values(action.payload);
      // newState = Object.entries(action.payload).map((e) => e[1]);
      newState = Object.keys(action.payload).map((key) => ({
        inprogTaskId: String(key),
        details: action.payload[key],
      }));

    // default:
    //   newState = state;
    //   break;
  }
  return newState;
  // }
};

export default InprogReducer;
