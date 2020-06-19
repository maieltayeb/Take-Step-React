import * as actionTypes from "../actionTypes";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS ,ADD_SUBMITTASK_LINK,GET_ALLSUBMITTED_TASKS} from "../actionTypes";

const initialState = {
  appliedTasks: [],
  newTask: null,
  submittedTaskLinks:[]
};

const InprogReducer = (state = initialState, action) => {
  let newState;
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
      break;
    case GET_VOL_TASKS:
      // debugger;
      // newState = Object.keys(action.payload).map((key) => ({
      //   inprogTaskId: String(key),
      //   details: action.payload[key],
      // }));
      // console.log(newState);
      newState = {
        ...state,
        appliedTasks: Object.keys(action.payload).map((key) => ({
          inprogTaskId: String(key),
          details: action.payload[key],
        })),
      };
      console.log(action.payload);
      break;
////////////upload task///////////
     case ADD_SUBMITTASK_LINK:
      newState = { ...state };
      newState.submittedTaskLinks = [...state.submittedTaskLinks, action.payload];
      console.log("state",newState)
      break;
      case GET_ALLSUBMITTED_TASKS:
        // newState = action.payload;
        newState = { ...state };
        newState.submittedTaskLinks = action.payload;
  
      break;
     default:
      newState = state;
      break;
  }
  return newState;
};

export default InprogReducer;
