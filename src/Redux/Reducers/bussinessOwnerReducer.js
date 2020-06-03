import {
  post_Login,
  post_SignUp,
  Get_BussinessUsers,
  Get_Countries
} from "../actionTypes";
const initialState = {
  users: [],
  countries: []
  //   token: "jksjlkjl"
};
export default (state = initialState, action) => {
  let newState;
  //   console.log(action.type);
  switch (action.type) {
    case Get_BussinessUsers:
      newState = { ...state };
      newState.users = action.payload;
      break;
    case Get_Countries:
      newState = { ...state };
      newState.countries = action.payload;
      //   console.log(newState.countries);
      break;
    case post_SignUp:
      newState = { ...state };
      newState.users = [...state.users, action.payload];
      //   console.log(newState.users);
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
