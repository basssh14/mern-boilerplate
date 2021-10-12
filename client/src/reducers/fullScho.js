import {
  GET_FULL_SCHO,
  ERROR_FULL_SCHO,
  LOG_OUT,
  UPDATE_FULL_SCHO,
} from "../actions/types";
const initialState = {
  loading: true,
  fullScho: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FULL_SCHO:
    case UPDATE_FULL_SCHO:
      return {
        ...state,
        loading: false,
        fullScho: payload,
      };
    case ERROR_FULL_SCHO:
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        fullScho: null,
      };
    default:
      return state;
  }
}
