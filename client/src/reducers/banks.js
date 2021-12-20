import {
  CREATE_USER_BANK,
  UPDATE_USER_BANK,
  GET_USER_BANKS,
  USER_BANKS_ERRORS,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  banks: null,
};
export default function (state = initialState, action) {
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
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        //changed after test!
        banks: null,
      };
    case USER_BANKS_ERRORS:
    default:
      return state;
  }
}
