import * as actionTypes from "../actionTypes";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS } from "../actionTypes";

const initialState = {
  appliedTasks: [],
  newTask: "",
};

const InprogReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_TASK_BY_ID:
      // debugger;

      newState = { ...state, newTask: action.payload };
      break;
    case ADD_NEW_TASK:
      newState = {
        ...state,
        appliedTasks: [
          ...state.appliedTasks,
          {
            inprogTaskId: action.payload.id,
            details: action.payload,
          },
        ],
      };
      // newState = [...state, action.payload];
      console.log(newState);
      // newState = [...state, action.payload];
      console.log(newState);
      break;
    case GET_VOL_TASKS:
      // debugger;
      if ((state.appliedTasks != [] && state.newTask != "") || action.payload) {
        newState = {
          ...state,
          appliedTasks: Object.keys(action.payload).map((key) => ({
            inprogTaskId: String(key),
            details: action.payload[key],
          })),
        };
        console.log(action.payload);
        console.log(newState);
      } else {
        newState = {
          appliedTasks: [],
          newTask: "",
        };
      }
      break;
  }
  return newState;
};

export default InprogReducer;
