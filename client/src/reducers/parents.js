import {
  CREATE_PARENT,
  UPDATE_PARENT,
  GET_PARENTS,
  PARENTS_ERRORS,
  CNIC_PHOTO_ERROR,
  CNIC_PHOTO_SUCCESS,
  SALARY_PHOTO_ERROR,
  SALARY_PHOTO_SUCCESS,
  QUALI_PHOTO_SUCCESS,
  QUALI_PHOTO_ERROR,
  LOG_OUT,
} from "../actions/types";
const initialState = {
  loading: true,
  parents: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PARENT:
    case UPDATE_PARENT:
    case GET_PARENTS:
      return {
        ...state,
        loading: false,
        parents: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        parents: null,
      };
    case SALARY_PHOTO_SUCCESS:
    case SALARY_PHOTO_ERROR:
    case CNIC_PHOTO_SUCCESS:
    case PARENTS_ERRORS:
    case CNIC_PHOTO_ERROR:
    case QUALI_PHOTO_ERROR:
    case QUALI_PHOTO_SUCCESS:
    default:
      return state;
  }
}
