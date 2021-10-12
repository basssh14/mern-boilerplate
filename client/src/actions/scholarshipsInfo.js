import {
  GET_ADMIN_ALL_SCHOLARSHIPS,
  ERROR_ADMIN_ALL_SCHOLARSHIPS,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
//Get all the scholarships
export const getAllScholarshipsAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/scholarshipsAdmin`);
    dispatch({
      type: GET_ADMIN_ALL_SCHOLARSHIPS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_ADMIN_ALL_SCHOLARSHIPS,
    });
  }
};
