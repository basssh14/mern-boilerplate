import {
    CREATE_USER_SCHOLARSHIP,
    UPDATE_USER_SCHOLARSHIP,
    GET_USER_SCHOLARSHIPS,
    UPLOAD_USER_REPORT,
    ERROR_USER_SCHOLARSHIP,
} from "../actions/types";
const initialState = {
    loading: true,
    scholarships: null,
};
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER_SCHOLARSHIP:
        case UPDATE_USER_SCHOLARSHIP:
        case UPLOAD_USER_REPORT:
        case GET_USER_SCHOLARSHIPS:
            return {
                ...state,
                loading: false,
                scholarships: payload,
            };
        case ERROR_USER_SCHOLARSHIP:
            return {
                ...state,
                loading: false,
                scholarships: null,
            };
        default:
            return state;
    }
}