import {
    GET_STUDENTS,
    ERROR_STUDENTS,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

//Get all the banks
export const getStudents = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/applicantsAdmin");
        dispatch({
            type: GET_STUDENTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ERROR_STUDENTS,
        });
    }
};