import {
    GET_ADMIN_SCHOLARSHIPS,
    ERROR_ADMIN_SCHOLARSHIPS,
    LOG_OUT,
} from "../actions/types";
const initialState = {
    loading: true,
    scholarshipsAdmin: null,
};
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ADMIN_SCHOLARSHIPS:
            return {
                ...state,
                loading: false,
                scholarshipsAdmin: payload,
            };
        case ERROR_ADMIN_SCHOLARSHIPS:
        case LOG_OUT:
            return {
                ...state,
                loading: false,
                scholarshipsAdmin: null,
            };
        default:
            return state;
    }
}