import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginNav from "../individual/LoginNav";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

function LandingRegister({ setAlert, register, isAuthenticated, typeUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // setAlert("thanks for register", "success");
    register({ name, email, password });
  };
  //Redirect if logged in
  if (isAuthenticated && typeUser !== null) {
    if (isAuthenticated && typeUser.tipo === "student") {
      return <Redirect to="/userSide" />;
    }
    if (isAuthenticated && typeUser.tipo === "admin") {
      return <Redirect to="/adminSide" />;
    }
  }
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <LoginNav />
        <main className="w-full h-180/2 padding-12 sm2:p-5">
          <div className="w-full h-full relative">
            <div className="h-full w-full overflow-hidden flex items-center justify-center">
              {/* <!-- Root element for center items --> */}
              <div className="w-full flex flex-col h-screen bg-gray-100">
                {/* <!-- Auth Card Container --> */}
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                  {/* <!-- Auth Card --> */}
                  <div
                    className="
                  w-11/12
                  p-12
                  sm:w-8/12
                  md:w-6/12
                  lg:w-5/12
                  2xl:w-4/12
                  px-6
                  py-10
                  sm:px-10 sm:py-6
                  bg-white
                  rounded-lg
                  shadow-md
                  lg:shadow-lg
                "
                  >
                    {/* <!-- Card Title --> */}
                    <h2
                      className="
                    text-center
                    font-semibold
                    text-3xl
                    lg:text-4xl
                    text-gray-800
                  "
                    >
                      Register
                    </h2>

                    <form className="mt-10" onSubmit={(e) => onSubmit(e)}>
                      {/* <!-- Name --> */}
                      <label
                        for="Name"
                        className="block text-xs font-semibold text-gray-600 uppercase"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="name"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        placeholder="Name"
                        autocomplete="name"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                      />
                      {/* <!-- Email Input --> */}
                      <label
                        for="email"
                        className="
                      block
                      text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      mt-2
                    "
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        placeholder="e-mail address"
                        autocomplete="email"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                      />
                      {/* <!-- Password Input --> */}
                      <label
                        for="password"
                        className="
                      block
                      mt-2
                      text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                    "
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        placeholder="password"
                        autocomplete="current-password"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      mb-4
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                      />

                      {/* <!-- Auth Buttton --> */}
                      {/* <Link to="/userSide"> */}
                      <button
                        type="submit"
                        className="
                      w-full
                      py-3
                      mt-10
                      bg-gray-800
                      rounded-sm
                      font-medium
                      text-white
                      uppercase
                      focus:outline-none
                      hover:bg-gray-700 hover:shadow-none
                    "
                      >
                        Register
                      </button>
                      {/* </Link> */}

                      {/* <!-- Another Auth Routes --> */}
                      <div
                        className="
                      sm:flex sm:flex-wrap
                      mt-8
                      sm:mb-4
                      text-sm text-center
                    "
                      >
                        <a href="#!" className="flex-2 underline">
                          Forgot password?
                        </a>

                        <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                          or
                        </p>

                        <a href="register" className="flex-2 underline">
                          Create an Account
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
    //);
  );
}

LandingRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  typeUser: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  typeUser: state.auth.user,
});

export default connect(mapStateToProps, { setAlert, register })(
  LandingRegister
);
