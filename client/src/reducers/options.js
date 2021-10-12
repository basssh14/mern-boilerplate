import {
  CREATE_OPTIONS,
  GET_OPTIONS,
  ERROR_OPTIONS,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  options: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_OPTIONS:
    case GET_OPTIONS:
      return {
        ...state,
        loading: false,
        options: payload,
      };
    case ERROR_OPTIONS:
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        options: null,
      };
    default:
      return state;
  }
}
