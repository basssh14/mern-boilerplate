import {
  GET_ADMIN_ALL_SCHOLARSHIPS,
  ERROR_ADMIN_ALL_SCHOLARSHIPS,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  scholarshipsInfo: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ADMIN_ALL_SCHOLARSHIPS:
      return {
        ...state,
        loading: false,
        scholarshipsInfo: payload,
      };
    case ERROR_ADMIN_ALL_SCHOLARSHIPS:
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        scholarshipsInfo: null,
      };
    default:
      return state;
  }
}
