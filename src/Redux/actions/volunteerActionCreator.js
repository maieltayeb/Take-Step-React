import axios from "axios";
import {
  post_Login_VolunteerUsers,
  post_SignUp_VolunteerUsers,
  Get_VolunteerUsers, GET_Error,
  Edit_VolunteerUsers
} from "../actionTypes";
/////////////////////////get/////////////////////////////
export const getAllVolunteers = () => dispatch => {
  axios
    .get("http://localhost:4402/volunteer/getAllVolunteers")
    .then(response => {
      const users = response.data;
      const newUsers = [];
      for (const key in users) {
        newUsers.push({ id: key, ...users[key] });
      }
      dispatch(getAllUsersSuccess(newUsers));
      
    })
    .catch(err => {
      console.log(err);
      
    });
};

const getAllUsersSuccess = newUsers => {
  return { type: Get_VolunteerUsers, payload: newUsers };
};

////////////////////////signup/////////////////////////////
export const SignupVolunteers = newUser => dispatch => {
 return axios
    .post("http://localhost:4402/volunteer/register", newUser)
    .then(response => {
      const { data } = response;
      console.log("data", data);
      if (response.status === 200) dispatch(SignUpSuccess(data.user));
      return data.user
    })
    .catch(err => {
      console.log(err.response.data.message);
      // if (response.status === 422)
      dispatch(SignUpFailed(err.response.data.message));
      return err.response.data.message
    });
    //////////////////////////////////////////////////
 
};

const SignUpSuccess = user => {
  return { type: post_SignUp_VolunteerUsers, payload: user };
};
const SignUpFailed = errMsg => {
  return { type: GET_Error, payload: errMsg };
};
///----------------------login--------------------------////////
export const logInVolunteers = currentUser => dispatch => {
  return  axios
    .post("http://localhost:4402/volunteer/login", currentUser)
    .then(response => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
     
      if (response.status === 200) dispatch(loginSuccess(user));
      return user;
    })
    .catch(err => {
   
      dispatch(LoginFailed(err.response.data.message));
      return err.response.data.message
    });
    
};

const loginSuccess = user => {
  return { type: post_Login_VolunteerUsers, payload: user };
};
const LoginFailed = errMsg => {
  return { type: GET_Error, payload: errMsg };
};
/***********edit bussinessowner */
export const volunteeredit = (id, newUser) => dispatch => {
  return axios
    .patch(`http://localhost:4402/volunteer/Edit/${id}`, newUser, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
      const { data } = response;
      localStorage.setItem("user", JSON.stringify(data));
      console.log("userafter update", data);

      if (response.status === 200) dispatch(EditSuccess(data));
    })
    .catch(console.log);
};

const EditSuccess = user => {
  return { type:Edit_VolunteerUsers , payload: user };
};
