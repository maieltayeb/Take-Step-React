import axios from "axios";
import {
  Get_BussinessUsers,
  post_SignUp_BussinessUsers,
  post_Login_BussinessUsers,
  Edit_BussinessUsers,
  Get_Countries
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

////////////////////////signup/////////////////////////////
export const SignupBussinessOwner = newUser => dispatch => {
  axios
    .post("http://localhost:4402/bussinessOwner/register", newUser)
    .then(response => {
      const { data } = response;
      newUser.id = data.name;
      if (response.status === 200) dispatch(SignUpSuccess(newUser));
    })
    .catch(console.log);
};

const SignUpSuccess = user => {
  return { type: post_SignUp_BussinessUsers, payload: user };
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
      console.log("datafrom database",user);
      console.log('stopone')
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
      localStorage.setItem("user", JSON.stringify(data));
      console.log("userafter update", data);

      if (response.status === 200) dispatch(EditSuccess(data));
    })
    .catch(console.log);
};

const EditSuccess = user => {
  console.log({user})
  return { type: Edit_BussinessUsers, payload: user };
};
