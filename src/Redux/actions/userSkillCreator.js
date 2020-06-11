import axios from "axios";

import {
  GET_SKILL_USER_SKILLS,
  GET_SKILL_BY_ID,
  ADD_SKILL,
  ADD_SKILL__ONLY_SEC,
  DELETE_SKILL,
  EDIT_SKILL,
} from "../actionTypes";

export const getSkillById = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4402/volunteer/getSkillById/${id}`, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      const userSkill = res.data;

      console.log(userSkill.skillName);
      dispatch(getSkill(userSkill.skilName));
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSkill = (skill) => {
  return { type: GET_SKILL_BY_ID, payload: skill };
};

export const getSkillsInSec = (skilNAme) => {
  return { type: ADD_SKILL__ONLY_SEC, payload: skilNAme };
};
export const getUserSkills = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4402/volunteer/getUserSkills/${id}`, {
      headers: { authorization: localStorage.getItem("token") },
    })

    .then((res) => {
      const userAllSkills = res.data;
      // const currentUser = [];
      // currentUser.push({ ...OwnerUser });
      console.log(userAllSkills);
      dispatch(getUserAllSkills(userAllSkills));
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserAllSkills = (skills) => {
  return { type: GET_SKILL_USER_SKILLS, payload: skills };
};
export const AddSkills = (skillsAdded) => (dispatch) => {
  axios
    .post(`http://localhost:4402/volunteer/addSkill`, skillsAdded, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      const addSkill = res.data;
      // const currentUser = [];
      // currentUser.push({ ...OwnerUser });
      console.log(addSkill.newSkill);
      dispatch(AddSkillToUser(addSkill.newSkill));
    })
    .catch((err) => {
      console.log(err);
    });
};

const AddSkillToUser = (skillAdded) => {
  return { type: ADD_SKILL, payload: skillAdded };
};
export const DeletSkills = (volunteerId, skillId) => (dispatch) => {
  axios
    .delete(
      `http://localhost:4402/volunteer/delete_skill/${volunteerId}/${skillId}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    )
    .then((res) => {
      console.log(res.data);
      dispatch(DeleteSkill(skillId));
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteSkill = (id) => {
  return { type: DELETE_SKILL, payload: id };
};
// export const editSkills = (id, newUser) => (dispatch) => {
//   axios
//     .patch(
//       `https://take-a-step-9ca1d.firebaseio.com/bussinessowner/${id}.json`,
//       newUser
//     )
//     .then((res) => {
//       const { data } = res;
//       console.log(data);

//       dispatch(editOwnerUserSuccess(data));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const editOwnerUserSuccess = (newUser) => {
//   return { type: EDIT_OwnerUser, payload: newUser };
// };
