import { CREATE_PAYMENT, GET_PAYMENTS, ERROR_PAYMENTS } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//create a new payment
export const newPayment = (paymentData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/payments", paymentData, config);
    dispatch({
      type: CREATE_PAYMENT,
      payload: res.data,
    });
    dispatch(setAlert("Payment made", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      console.log(errors);
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: ERROR_PAYMENTS,
    });
  }
};
//Get all the payments
export const getPayments = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/payments");
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_PAYMENTS,
    });
  }
};
