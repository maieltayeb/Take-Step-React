import axios from "axios";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS } from "../actionTypes";

export const getTaskById = (id) => async (dispatch) => {
  // debugger;
  console.log(id);
  // const ids= JSON.parse(id)
  await axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/jobs/${id}.json`)
    .then((response) => {
      const { data } = response;
      console.log(data);

      //   newTask.id = data.name;
      // newTask.id = data.name;
      // console.log(newTask);
      // if (response.status === 200)
      dispatch(getTask(data));
    })
    .catch("error");
};

const getTask = (task) => {
  // debugger;
  return { type: GET_TASK_BY_ID, payload: task };
};
export const AddTasksToVol = (id, newTask) => async (dispatch) => {
  // debugger;
  await axios
    .post(
      `https://take-a-step-9ca1d.firebaseio.com/Inprogress/${id}.json`,
      newTask
    )
    .then((response) => {
      const { data } = response;
      console.log(data);
      console.log(response);

      //   newTask.id = data.name;
      newTask.id = data.name;
      console.log(newTask);
      dispatch(AddTask(newTask));
    })
    .catch(console.log("error"));
};

const AddTask = (task) => {
  return { type: ADD_NEW_TASK, payload: task };
};

export const getTasksByVolId = (id) => async (dispatch) => {
  // debugger;
  await axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/Inprogress/${id}.json`)
    .then((response) => {
      const { data } = response;
      //   newTask.id = data.name;

      console.log(data);
      dispatch(getVolTasks(data));
    })
    .catch(console.log("error"));
};

const getVolTasks = (task) => {
  return { type: GET_VOL_TASKS, payload: task };
};
