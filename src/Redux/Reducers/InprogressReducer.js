import * as actionTypes from "../actionTypes";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS ,ADD_SUBMITTASK_LINK,GET_ALLSUBMITTED_TASKS ,DELET_TASKFROM_PROGRESS} from "../actionTypes";

const initialState = {
  appliedTasks: [],
  newTask: null,
  submittedTaskLinks:[]
};
const InprogReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_TASK_BY_ID:
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
      newState = {
        ...state,
        appliedTasks: Object.keys(action.payload).map((key) => ({
          inprogTaskId: String(key),
          details: action.payload[key],
        })),
      };
      break;
////////////upload task///////////
     case ADD_SUBMITTASK_LINK:
      newState={...state}
      newState.submittedTaskLinks = [...state.submittedTaskLinks, action.payload]
      break
    case GET_ALLSUBMITTED_TASKS :
      newState = { ...state };
      newState.submittedTaskLinks = action.payload;
      break;
    case DELET_TASKFROM_PROGRESS:
      newState = { ...state };
        let arr=[];
        newState.appliedTasks.map((d) => {
          if(d.inprogTaskId!==action.payload.inProgressTaskId){
            arr.push(d)
          }else{

          }
        })
        newState.appliedTasks=arr;
      break;
     default:
      newState = state;
      break;
  }
  return newState;
};
export default InprogReducer;
