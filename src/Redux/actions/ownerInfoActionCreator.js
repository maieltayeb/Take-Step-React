import axios from "axios";

import {
  GET_OwnerUsers,
  GET_OwnerUser,
  ADD_OwnerUser,
  EDIT_OwnerUser,
  DELETE_OwnerUser
} from "../actionTypes";
export const getOwnerUsers=() => dispatch => {

    axios.get("https://take-a-step-9ca1d.firebaseio.com/bussinessowner.json").then(res =>{
        const allOwnerUsers = res.data;
        console.log(allOwnerUsers)
    })
}

export const getOwnerUserById
