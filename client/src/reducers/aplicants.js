import {
  CREATE_USER_APPLI,
  UPDATE_USER_APPLI,
  GET_USER_APPLI,
  ERROR_USER_APPLI,
  ERROR_USER_APPLI2,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  applicants: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER_APPLI:
    case UPDATE_USER_APPLI:
    case GET_USER_APPLI:
      return {
        ...state,
        loading: false,
        applicants: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        applicants: null,
      };
    case ERROR_USER_APPLI2:
      return {
        ...state,
        loading: true,
        applicants: null,
      };
    case ERROR_USER_APPLI:
    default:
      return state;
  }
}
