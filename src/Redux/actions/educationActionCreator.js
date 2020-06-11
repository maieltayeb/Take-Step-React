import axios from "axios";

// import { GET_EDU, REMOVE_EDU, ADD_EDUCATION } from "../actionTypes";
import {
  GET_EDU,
  REMOVE_EDU,
  ADD_EDUCATION,
  GET_OwnerUser,
  EDIT_EDUCATION
} from "../actionTypes";

export const getAllEducation = newEducations => {
  return { type: GET_EDU, payload: newEducations };
};

export const deleteEducation = id => {
  return { type: REMOVE_EDU, payload: id };
};

export const addEducation = education => {
  return { type: ADD_EDUCATION, payload: education };
};

// export const editOwnerUser = (id, newUser) => dispatch => {
//   axios
//     .patch(
//       `https://take-a-step-9ca1d.firebaseio.com/educationSection/${id}.json`,
//       newUser
//     )
//     .then(response => {
//       const { data } = response;
//       console.log(data);

//       dispatch(editOwnerUserSuccess(data));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const editOwnerUserSuccess = newUser => {
//   return { type: EDIT_OwnerUser, payload: newUser };
// };
/////----------------------------------------------------------//////
export const editEducation = (volunteerId, eduId,newUser) => dispatch => {
  axios
    .patch(
      `http://localhost:4402/volunteer/EditEducation/${volunteerId}/${eduId}`,
      newUser
    )
    .then(res => {

      const { data } = res;
      // const user = {
      //   ...data,
      //   id: data.name
      // };
      // console.log("user//////////////////////////////", user, data);
      dispatch(editEducationSuccess(data));
    })
    .catch(err => {
      console.log(err);
    });
};

const editEducationSuccess = User => {
  return { type: EDIT_EDUCATION, payload: User };
};



