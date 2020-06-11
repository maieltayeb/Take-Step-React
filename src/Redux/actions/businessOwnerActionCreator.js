import axios from "axios";
import {
  Get_BussinessUsers,
  post_SignUp_BussinessUsers,
  post_Login_BussinessUsers,
  Edit_BussinessUsers,
  Get_Countries,
  Get_timeDurationTypes,
  ADD_Job,
  Get_Jobs,
  Get_BussinessUsersById,
  GET_Error
} from "../actionTypes";
/////////////////////////get/////////////////////////////
export const getAllUsersBussinessOwner = () => dispatch => {
  axios
    .get("http://localhost:4402/bussinessOwner/getAllBussinessUsers")
    .then(response => {
      const users = response.data;
      const newUsers = [];
      for (const key in users) {
        newUsers.push({ id: key, ...users[key] });
      }
      dispatch(getAllUsersSuccess(newUsers));
      //   console.log("all user", newUsers);
    })
    .catch(err => {
      console.log(err);
      // handle error dipatch();
    });
};

const getAllUsersSuccess = newUsers => {
  return { type: Get_BussinessUsers, payload: newUsers };
};
//////////////////////////////////////get user by id/////////////////////////////////
export const getUserById = id => dispatch => {
  axios
    .get(`http://localhost:4402/bussinessOwner/${id}`)
    .then(response => {
      const user = response.data;
      // console.log("user", user);

      dispatch(getUserByIdSuccess(user));
      //   console.log("all user", newUsers);
    })
    .catch(err => {
      console.log(err);
      // handle error dipatch();
    });
};

const getUserByIdSuccess = user => {
  return { type: Get_BussinessUsersById, payload: user };
};
////////////////////////signup/////////////////////////////
export const SignupBussinessOwner = newUser => dispatch => {
  axios
    .post("http://localhost:4402/bussinessOwner/register", newUser)
    .then(response => {
      const { data } = response;
      console.log("data", data);
      if (response.status === 200) dispatch(SignUpSuccess(data.user));
    })
    .catch(err => {
      console.log(err.response.data.message);
      // if (response.status === 422)
      dispatch(SignUpFailed(err.response.data.message));
    });
};

const SignUpSuccess = user => {
  return { type: post_SignUp_BussinessUsers, payload: user };
};
const SignUpFailed = errMsg => {
  return { type: GET_Error, payload: errMsg };
};
///----------------------login--------------------------////////
export const logInBussinessOwner = currentUser => dispatch => {
  return axios
    .post("http://localhost:4402/bussinessOwner/login", currentUser)
    .then(response => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // newUser.id = data.name;
      console.log("datafrom database", user);
      console.log("stopone");
      if (response.status === 200) dispatch(loginSuccess(user));
      return user;
    })
    .catch(console.log);
};

const loginSuccess = user => {
  return { type: post_Login_BussinessUsers, payload: user };
};
///////////////////////getall countries***************//////////////////
export const getAllCountries = () => dispatch => {
  return axios
    .get("http://localhost:4402/country/getAllcountries")
    .then(response => {
      const countries = response.data;
      const newCounties = [];
      for (const key in countries) {
        newCounties.push({ id: key, ...countries[key] });
      }
      dispatch(getAllCountriesSuccess(newCounties));
    })
    .catch(err => {
      console.log(err);
      // handle error dipatch();
    });
};
const getAllCountriesSuccess = newCounties => {
  return { type: Get_Countries, payload: newCounties };
};
/***********edit bussinessowner */
export const editbussinessOwner = (id, newUser) => dispatch => {
  return axios
    .patch(`http://localhost:4402/bussinessOwner/Edit/${id}`, newUser, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
      const { data } = response;
      localStorage.setItem("user", JSON.stringify(data)); ///??
      console.log("userafter update", data);

      if (response.status === 200) dispatch(EditSuccess(data));
    })
    .catch(console.log);
};

const EditSuccess = user => {
  console.log({ user });
  return { type: Edit_BussinessUsers, payload: user };
};

///////////////////////get all timeDurationTypes***************//////////////////
export const getTimeDurationTypes = () => dispatch => {
  return axios
    .get("https://take-a-step-9ca1d.firebaseio.com/timeDurationType.json")
    .then(response => {
      const timeDurationTypes = response.data;

      const newtimeDurationTypes = [];
      for (const key in timeDurationTypes) {
        newtimeDurationTypes.push({ id: key, ...timeDurationTypes[key] });
      }
      dispatch(getAlltimeDurationTypesSuccess(newtimeDurationTypes));
    })
    .catch(err => {
      console.log(err);
      // handle error dipatch();
    });
};

const getAlltimeDurationTypesSuccess = newtimeDurationTypes => {
  return { type: Get_timeDurationTypes, payload: newtimeDurationTypes };
};
////////////////////////add job////////////////////////////////////
export const addJob = newJob => dispatch => {
  axios
    .post("https://take-a-step-9ca1d.firebaseio.com/jobs.json", newJob)
    .then(response => {
      const { data } = response;
      newJob.id = data.name;
      if (response.status === 200) dispatch(addJobSuccess(newJob));
    })
    .catch(console.log);
};

const addJobSuccess = job => {
  return { type: ADD_Job, payload: job };
};
///////////////////////////////////get all jobs////////////////////
export const getAllJobs = () => dispatch => {
  return axios
    .get("https://take-a-step-9ca1d.firebaseio.com/jobs.json")
    .then(response => {
      const jobs = response.data;

      const newJobs = [];
      for (const key in jobs) {
        newJobs.push({ id: key, ...jobs[key] });
      }
      dispatch(getAllJobsSuccess(newJobs));
    })
    .catch(err => {
      console.log(err);
      // handle error dipatch();
    });
};

const getAllJobsSuccess = newJobs => {
  return { type: Get_Jobs, payload: newJobs };
};
