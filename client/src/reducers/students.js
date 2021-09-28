import {
    GET_STUDENTS,
    ERROR_STUDENTS,
    LOG_OUT,
} from "../actions/types";
const initialState = {
    loading: true,
    students: null,
};
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_STUDENTS:
            return {
                ...state,
                loading: false,
                students: payload,
            };
        case ERROR_STUDENTS:
        case LOG_OUT:
            return {
                ...state,
                loading: false,
                students: null,
            };
        default:
            return state;
    }
}