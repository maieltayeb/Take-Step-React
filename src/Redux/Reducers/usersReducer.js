import {
  Get_Countries,
  Get_timeDurationTypes,
  post_SignUp_BussinessUsers,
  post_SignUp_VolunteerUsers,
  Get_BussinessUsers,
  Get_VolunteerUsers,
  Get_BussinessUsersById,
  Get_Jobs,
  post_Login_BussinessUsers,
  post_Login_VolunteerUsers,
  Edit_BussinessUsers,
  Edit_VolunteerUsers,
  ADD_Job
} from "../actionTypes";
const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("user")),
  jobs: [],
  countries: [],
  timeDurationTypes: [],
  bussinessOwnerUsers: []
  //   token: "jksjlkjl"
};
export default (state = initialState, action) => {
  let newState;
  //   console.log(action.type);
  switch (action.type) {
    case Get_BussinessUsers:
    case Get_VolunteerUsers:
      newState = { ...state };
      newState.users = action.payload;
      break;
    case Get_BussinessUsersById:
      newState = { ...state };
      newState.bussinessOwnerUsers = action.payload;
      break;
    case Get_Countries:
      newState = { ...state };
      newState.countries = action.payload;
      //   console.log(newState.countries);
      break;
    case Get_Jobs:
      newState = { ...state };
      newState.jobs = action.payload;
      //   console.log(newState.countries);
      break;
    case Get_timeDurationTypes:
      newState = { ...state };
      newState.timeDurationTypes = action.payload;
      //   console.log(newState.countries);
      break;
    case post_SignUp_BussinessUsers:
    case post_SignUp_VolunteerUsers:
      newState = { ...state };
      newState.users = [...state.users, action.payload];
      //   console.log(newState.users);
      break;
    case post_Login_BussinessUsers:
    case post_Login_VolunteerUsers:
      newState = { ...state };
      newState.currentUser = { ...state.currentUser };
      newState.currentUser = action.payload;
      break;
    case Edit_BussinessUsers:
    case Edit_VolunteerUsers:
      newState = { ...state };
      newState.currentUser = action.payload;
      break;
    case ADD_Job:
      newState = { ...state };
      newState.jobs = [...state.jobs, action.payload];
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
