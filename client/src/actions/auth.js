import axios from "axios";
import { setAlert } from "./alert";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    REGISTER_ADMIN,
    REGISTER_ADMIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
//Load User
export const loadUser = () => async(dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    console.log("inside loadUser");
    try {
        const res = await axios.get("/api/auth");
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        console.log("error xd");
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
//Register the users
export const register =
    ({ name, email, password }) =>
    async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({ name, email, password });
        try {
            const res = await axios.post("/api/users", body, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            dispatch(loadUser());
            dispatch(setAlert("thanks for register", "success"));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
            }
            dispatch({
                type: REGISTER_FAIL,
            });
        }
    };
export const registerAdmin =
    ({ name, email, password, level, tipo }) =>
    async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({ name, email, password, level, tipo });
        console.log(body);
        try {
            const res = await axios.post("/api/users", body, config);
            dispatch({
                type: REGISTER_ADMIN,
                payload: res.data,
            });
            dispatch(setAlert("thanks for register", "success"));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
            }
            dispatch({
                type: REGISTER_ADMIN_FAIL,
            });
        }
    };
//User Login
export const login = (email, password) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post("/api/auth", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.log("not working");
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
        }
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

//Log out user
export const logout = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
    });
};