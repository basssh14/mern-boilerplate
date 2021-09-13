import {
    CREATE_USER_SCHOLARSHIP,
    UPDATE_USER_SCHOLARSHIP,
    GET_USER_SCHOLARSHIPS,
    ERROR_USER_SCHOLARSHIP,
    UPLOAD_USER_REPORT,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
//create a new scholarship
export const newScholarship = (scholarshipData) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post("/api/scholarships", scholarshipData, config);
        dispatch({
            type: CREATE_USER_SCHOLARSHIP,
            payload: res.data,
        });
        dispatch(setAlert("Scholarship created", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: ERROR_USER_SCHOLARSHIP,
        });
    }
};
//edit
export const updateScholarship =
    (scholarshipData, scholarshipId) => async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post(
                `/api/scholarships/edit/${scholarshipId}`,
                scholarshipData,
                config
            );
            dispatch({
                type: UPDATE_USER_SCHOLARSHIP,
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
                type: ERROR_USER_SCHOLARSHIP,
            });
        }
    };

//Get all the scholarships
export const getScholarships = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/scholarships");
        dispatch({
            type: GET_USER_SCHOLARSHIPS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ERROR_USER_SCHOLARSHIP,
        });
    }
};

//upload report
export const uploadReport = (reportData, scholarshipId) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post(
            `/api/scholarships/uploadReport/${scholarshipId}`,
            reportData,
            config
        );
        dispatch({
            type: UPLOAD_USER_REPORT,
            payload: res.data,
        });
        dispatch(setAlert("Report Uploaded", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: ERROR_USER_SCHOLARSHIP,
        });
    }
};