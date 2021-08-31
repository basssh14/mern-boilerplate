import React, { Fragment } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import HeaderUser from "../individual/HeaderUser";
import "@material-tailwind/react/Dropdown";

function UserSide() {
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12">
          <div className="w-full h-full relative ">
            <div className="w-full h-3/4 centerSom bg-white grid grid-cols-2 gap-5"></div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

UserSide.propTypes = {};
const mapStateToProps = (state) => ({});

export default UserSide;
