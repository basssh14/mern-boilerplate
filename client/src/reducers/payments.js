import {
  CREATE_PAYMENT,
  GET_PAYMENTS,
  ERROR_PAYMENTS,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  payments: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PAYMENT:
    case GET_PAYMENTS:
      return {
        ...state,
        loading: false,
        payments: payload,
      };
    case ERROR_PAYMENTS:
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        payments: null,
      };
    default:
      return state;
  }
}
