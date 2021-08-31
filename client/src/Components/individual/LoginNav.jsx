import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LoginNav(props) {
  const [mobMenu, setMobMenu] = useState("hidden");
  function controlMobMenu() {
    mobMenu === "hidden" ? setMobMenu("block") : setMobMenu("hidden");
  }

  return (
    <Fragment>
      <header
        id="site-header"
        className="w-full h-20/2 relative px-5 lg1:px-2  bg-white text-gray-900"
      >
        <section className="navigation relative bg-white">
          <div className="nav-container">
            <div className="brand centerVertical text-gray-900 usm:text-lg">
              <Link to="/">Scholarship App</Link>
            </div>
            <nav className="mt-4 lg1:mt-1 z-50">
              <div className="nav-mobile bg-transparent z-50">
                <a id="nav-toggle" href="#!" onClick={() => controlMobMenu()}>
                  <span></span>
                </a>
              </div>
              <ul className={`nav-list ${mobMenu} z-50`}>
                <li className="text-gray-900">
                  <Link to="/">Log In</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </Fragment>
  );
}

LoginNav.propTypes = {};

export default LoginNav;
