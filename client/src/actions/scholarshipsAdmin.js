import { GET_ADMIN_SCHOLARSHIPS, ERROR_ADMIN_SCHOLARSHIPS } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//Get all the scholarships
export const getScholarshipsAdmin = (reportId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/scholarshipsAdmin/${reportId}`);
    dispatch({
      type: GET_ADMIN_SCHOLARSHIPS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_ADMIN_SCHOLARSHIPS,
    });
  }
};
//Delete previous report data
export const deleteReportData = () => async (dispatch) => {
  try {
    dispatch({
      type: ERROR_ADMIN_SCHOLARSHIPS,
    });
  } catch (err) {
    dispatch({
      type: ERROR_ADMIN_SCHOLARSHIPS,
    });
  }
};
