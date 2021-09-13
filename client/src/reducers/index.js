import { combineReducers } from "redux";
import auth from "./auth";
// import todos from "./todos";
// import flag from "./flag";
import alert from "./alert";
import parents from "./parents";
import banks from "./banks";
import aplicants from "./aplicants";
import scholarships from "./scholarships";
// import notes from "./notes";

export default combineReducers({
    alert,
    auth,
    parents,
    banks,
    aplicants,
    scholarships,
});