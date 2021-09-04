import {
    CREATE_PARENT,
    UPDATE_PARENT,
    PARENTS_ERRORS,
    GET_PARENTS,
    CNIC_PHOTO_SUCCESS,
    CNIC_PHOTO_ERROR,
    SALARY_PHOTO_ERROR,
    SALARY_PHOTO_SUCCESS,
    QUALI_PHOTO_SUCCESS,
    QUALI_PHOTO_ERROR
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//create a new parent
export const newParent = (parentData) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post("/api/parents", parentData, config);
        dispatch({
            type: CREATE_PARENT,
            payload: res.data,
        });
        dispatch(setAlert("Parent Created", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: PARENTS_ERRORS,
        });
    }
};
//edit
export const updateParent = (parentData, parentId) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post(
            `/api/parents/edit/${parentId}`,
            parentData,
            config
        );
        dispatch({
            type: UPDATE_PARENT,
            payload: res.data,
        });
        dispatch(setAlert("Parent Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "error"));
            });
        }
        dispatch({
            type: PARENTS_ERRORS,
        });
    }
};

//Get all the flags
export const getParents = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/parents");
        dispatch({
            type: GET_PARENTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PARENTS_ERRORS,
        });
    }
};
//cnic photo
export const uploadCnic = (file) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const res = await axios.post("/api/uploads/parents/cnicphotos", file, config);
        dispatch({
            type: CNIC_PHOTO_SUCCESS,
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            // errors.forEach((error) => {
            //     dispatch(setAlert(error.msg, "error"));
            // });
        }
        dispatch({
            type: CNIC_PHOTO_ERROR,
        });
    }
};
//salary photo
export const uploadSalary = (file) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const res = await axios.post("/api/uploads/parents/salaryphotos", file, config);
        dispatch({
            type: SALARY_PHOTO_SUCCESS,
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            // errors.forEach((error) => {
            //     dispatch(setAlert(error.msg, "error"));
            // });
        }
        dispatch({
            type: SALARY_PHOTO_ERROR,
        });
    }
};
//salary photo
export const uploadQuali = (file) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const res = await axios.post("/api/uploads/parents/qualiDocphotos", file, config);
        dispatch({
            type: QUALI_PHOTO_SUCCESS,
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors);
            // errors.forEach((error) => {
            //     dispatch(setAlert(error.msg, "error"));
            // });
        }
        dispatch({
            type: QUALI_PHOTO_ERROR,
        });
    }
};