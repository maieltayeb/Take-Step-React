import axios from "axios";
import { GET_COMMENT, ADD_COMMENT } from "../actionTypes";

export const getAllComments = newComment => {
  return { type: GET_COMMENT, payload: newComment };
};

export const addComments = newComment => {
  return { type: ADD_COMMENT, payload: newComment };
};
