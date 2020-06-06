import {
  
  post_SignUp_BussinessUsers,
  Get_BussinessUsers,
  Get_Countries,
  post_Login_BussinessUsers,
  Edit_BussinessUsers
} from "../actionTypes";
const initialState = {
  users: [],
  countries: [],
  currentUser: localStorage.getItem("user")
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
    case post_SignUp_BussinessUsers:
      newState = { ...state };
      newState.users = [...state.users, action.payload];
      //   console.log(newState.users);
      break;
      case post_Login_BussinessUsers:
        newState = { ...state };
        newState.currentUser={...state.currentUser};
        newState.currentUser =action.payload;
        
        break;

        case Edit_BussinessUsers:
          newState = { ...state };
          newState.currentUser={...state.currentUser};
          newState.currentUser =action.payload;

    default:
      newState = state;
      break;
  }
  return newState;
};
