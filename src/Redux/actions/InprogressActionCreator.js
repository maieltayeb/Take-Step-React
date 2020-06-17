import axios from "axios";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS } from "../actionTypes";
export const getTaskById = (id) => (dispatch) => {
  axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/jobs/${id}.json`)
    .then((response) => {
      const { data } = response;
      //   newTask.id = data.name;

      console.log(data);
      if (response.status === 200) dispatch(getTask(data));
    })
    .catch(console.log);
};

const getTask = (task) => {
  return { type: GET_TASK_BY_ID, payload: task };
};
export const AddTasksToVol = (id, newTask) => (dispatch) => {
  debugger;
  axios
    .post(
      `https://take-a-step-9ca1d.firebaseio.com/Inprogress/${id}.json`,
      newTask
    )
    .then((response) => {
      const { data } = response;
      console.log(data);

      //   newTask.id = data.name;
      newTask.id = data.name;
      console.log(newTask);
      if (response.status === 200) dispatch(AddTask(newTask));
    })
    .catch(console.log);
};

const AddTask = (task) => {
  return { type: ADD_NEW_TASK, payload: task };
};

export const getTasksByVolId = (id) => (dispatch) => {
  axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/Inprogress/${id}.json`)
    .then((response) => {
      const { data } = response;
      //   newTask.id = data.name;

      console.log(data);
      if (response.status === 200) dispatch(getVolTasks(data));
    })
    .catch(console.log);
};

const getVolTasks = (task) => {
  return { type: GET_VOL_TASKS, payload: task };
};
