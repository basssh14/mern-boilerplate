import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//stuff for redux
import { Provider } from "react-redux";
import store from "./store";
//import components
//Log in routes
import PrivateRoute from "./Components/routing/PrivateRoute";
import AdminRoute from "./Components/routing/AdminRoute";
import LandingLogin from "./Components/layout/LandingLogin";
import LandingRegister from "./Components/layout/LandingRegister";
//userSide routes
import UserSide from "./Components/layout/UserSide";
import ParentsST from "./Components/layout/ParentsST";
import ApplicantsSt from "./Components/layout/ApplicantsSt";
import BankSt from "./Components/layout/BankSt";
import ScholarshipsST from "./Components/layout/ScholarshipsST";
import UserPassword from "./Components/layout/UserPassword";
//adminSide routes
import LoginS from "./Components/layout/LoginS";
import Students from "./Components/layout/Students";
import Applications from "./Components/layout/Applications";
import Payments from "./Components/layout/Payments";
import Pay from "./Components/layout/Pay";
import Options from "./Components/layout/Options";
import AdminPass from "./Components/layout/AdminPass";
import NewAdminUser from "./Components/layout/NewAdminUser";
//component imports
import Alert from "./Components/individual/Alert";
import setAuthToken from "./utils/setAuthToken";
//actions imports
import { loadUser } from "./actions/auth";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    console.log("1234");
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path="/" component={LandingLogin} />{" "}
            <Route exact path="/register" component={LandingRegister} />{" "}
            {/* userSide */}
            <PrivateRoute exact path="/userSide" component={UserSide} />
            <PrivateRoute exact path="/parentsSt" component={ParentsST} />{" "}
            <PrivateRoute exact path="/applicantsSt" component={ApplicantsSt} />{" "}
            <PrivateRoute exact path="/bankSt" component={BankSt} />
            <PrivateRoute
              exact
              path="/scholarshipsSt"
              component={ScholarshipsST}
            />{" "}
            <PrivateRoute exact path="/userPassword" component={UserPassword} />{" "}
            {/* adminSide */}
            <AdminRoute exact path="/adminSide" component={LoginS} />{" "}
            <AdminRoute exact path="/students" component={Students} />{" "}
            <AdminRoute exact path="/applications" component={Applications} />{" "}
            <AdminRoute exact path="/payments" component={Payments} />{" "}
            <AdminRoute exact path="/pay" component={Pay} />{" "}
            <AdminRoute exact path="/options" component={Options} />{" "}
            <AdminRoute exact path="/adminPass" component={AdminPass} />{" "}
            <AdminRoute exact path="/newAdminUser" component={NewAdminUser} />{" "}
          </Switch>
        </Fragment>{" "}
      </Router>
    </Provider>
  );
}

export default App;
