import {
    CREATE_USER_APPLI,
    UPDATE_USER_APPLI,
    GET_USER_APPLI,
    ERROR_USER_APPLI,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//create a new bank account
export const newApplicant = (applicantData) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post("/api/applicants", applicantData, config);
        dispatch({
            type: CREATE_USER_APPLI,
            payload: res.data,
        });
        dispatch(setAlert("Applicant created", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: ERROR_USER_APPLI,
        });
    }
};
//edit
export const updateApplicant =
    (applicationData, applicantId) => async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post(
                `/api/applicants/edit/${applicantId}`,
                applicationData,
                config
            );
            dispatch({
                type: UPDATE_USER_APPLI,
                payload: res.data,
            });
            dispatch(setAlert("Applicant Updated", "success"));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "error"));
                });
            }
            dispatch({
                type: ERROR_USER_APPLI,
            });
        }
    };

//Get all the banks
export const getApplicants = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/applicants");
        dispatch({
            type: GET_USER_APPLI,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ERROR_USER_APPLI,
        });
    }
};