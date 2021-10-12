import { combineReducers } from "redux";
import auth from "./auth";
// import todos from "./todos";
// import flag from "./flag";
import alert from "./alert";
import parents from "./parents";
import banks from "./banks";
import aplicants from "./aplicants";
import scholarships from "./scholarships";
import students from "./students";
import scholarshipsAdmin from "./scholarshipsAdmin";
import payments from "./payments";
import scholarshipsInfo from "./scholarshipsInfo";
import fullScho from "./fullScho";
import options from "./options";
// import notes from "./notes";

export default combineReducers({
  alert,
  auth,
  parents,
  banks,
  aplicants,
  scholarships,
  students,
  scholarshipsAdmin,
  payments,
  scholarshipsInfo,
  fullScho,
  options,
});
