import { GET_FULL_SCHO, ERROR_FULL_SCHO, UPDATE_FULL_SCHO } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
//Get all the scholarships
export const getFullScho = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/applicantsAdmin/scholarships`);
    dispatch({
      type: GET_FULL_SCHO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_FULL_SCHO,
    });
  }
};
//update a scholarship
export const updateScho = (schoData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/applicantsAdmin/update`,
      schoData,
      config
    );
    dispatch({
      type: UPDATE_FULL_SCHO,
      payload: res.data,
    });
    dispatch(setAlert("Scholarship Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: ERROR_FULL_SCHO,
    });
  }
};
