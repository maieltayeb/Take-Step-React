import axios from "axios";
import {
  Get_BussinessUsers,
  post_Login,
  post_SignUp,
  Get_Countries
} from "../actionTypes";
export const getAllUsers = () => dispatch => {
  axios
    .get("https://take-a-step-9ca1d.firebaseio.com/bussinessowner.json")
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


export const Signup = newUser => dispatch => {
  axios
    .post(
      "https://take-a-step-9ca1d.firebaseio.com/bussinessowner.json",
      newUser
    )
    .then(response => {
      const { data } = response;
      newUser.id = data.name;
      if (response.status === 200) dispatch(SignUpSuccess(newUser));
    })
    .catch(console.log);
};


const SignUpSuccess = user => {
  return { type: post_SignUp, payload: user };
};

// export const login=async(currentUser) =>{
// //  const loginEndPoint = `${userEndPoint}/login`;
//   const response =await Axios.post("http://localhost:4402/user/login",currentUser).catch(err=>console.log(err));
//   console.log(response.data);
//   const {token ,user} = response.data;
//   localStorage.setItem("token",token);
//   localStorage.setItem("user",JSON.stringify(user));
//   // axios.defaults.headers.common["Authorization"]=token;
//   console.log(response.data);
  
//   return response.data;
// }
// export const logIn = () => dispatch => {
//   axios
//     .post(
//       "https://take-a-step-9ca1d.firebaseio.com/bussinessowner.json"
      
//     )
//     .then(response => {
//       const { data } = response;
//       newUser.id = data.name;
//       if (response.status === 200) dispatch(SignUpSuccess(newUser));
//     })
//     .catch(console.log);
// };

export const getAllCountries = () => dispatch => {
  axios
    .get("https://take-a-step-9ca1d.firebaseio.com/Countries.json")
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
