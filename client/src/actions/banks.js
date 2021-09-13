import {
    CREATE_USER_BANK,
    UPDATE_USER_BANK,
    GET_USER_BANKS,
    USER_BANKS_ERRORS,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//create a new bank account
export const newBank = (bankData) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post("/api/bankAccount", bankData, config);
        dispatch({
            type: CREATE_USER_BANK,
            payload: res.data,
        });
        dispatch(setAlert("bank Created", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: USER_BANKS_ERRORS,
        });
    }
};
//edit
export const updateBank = (bankData, bankId) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post(
            `/api/bankAccount/edit/${bankId}`,
            bankData,
            config
        );
        dispatch({
            type: UPDATE_USER_BANK,
            payload: res.data,
        });
        dispatch(setAlert("Bank Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: USER_BANKS_ERRORS,
        });
    }
};

//Get all the banks
export const getBanks = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/bankAccount");
        dispatch({
            type: GET_USER_BANKS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: USER_BANKS_ERRORS,
        });
    }
};