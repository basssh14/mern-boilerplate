import {
    CREATE_USER_BANK,
    UPDATE_USER_BANK,
    GET_USER_BANKS,
    USER_BANKS_ERRORS,
} from "../actions/types";
const initialState = {
    loading: true,
    banks: null,
};
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER_BANK:
        case UPDATE_USER_BANK:
        case GET_USER_BANKS:
            return {
                ...state,
                loading: false,
                banks: payload,
            };
        case USER_BANKS_ERRORS:
            return {
                ...state,
                loading: false,
                //changed after test!
                banks: null,
            };
        default:
            return state;
    }
}