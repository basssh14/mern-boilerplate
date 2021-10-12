import { CREATE_OPTIONS, GET_OPTIONS, ERROR_OPTIONS } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//create a new option
export const newOption = (optionData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/options", optionData, config);
    dispatch({
      type: CREATE_OPTIONS,
      payload: res.data,
    });
    dispatch(setAlert("Option created", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      console.log(errors);
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: ERROR_OPTIONS,
    });
  }
};
//Get all the payments
export const getOptions = () => async (dispatch) => {
  console.log("getOptions");
  try {
    const res = await axios.get("/api/options");
    dispatch({
      type: GET_OPTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_OPTIONS,
    });
  }
};
