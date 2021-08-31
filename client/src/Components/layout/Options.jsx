import React, { Fragment } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";

function Options() {
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-1/2 h-180/2 absolute centerHorizontal sm2:p-5 lg3:w-3/5 lg2:w-3/4 lg1:w-180/2">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-transparent">
              <div
                className="
              w-full
              h-20/2
              bg-white
              rounded-2xl
              relative
              usm:h-1/3
              sm3:h-1/6
            "
              >
                <div
                  className="
                w-full
                h-1/2
                px-3
                absolute
                centerVertical
                grid grid-cols-8
                gap-4
                lg1:w-full lg1:ml-0 lg1:px-1
                sm3:w-full sm3:ml-0 sm3:gap-1 sm3:h-4/5 sm3:px-1
                sm2:w-full sm2:ml-0 sm2:gap-1 sm2:px-1
              "
                >
                  <select
                    className="
                  bg-white
                  h-full
                  px-3
                  col-span-2
                  w-full
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  sm3:col-span-4
                  usm:col-span-8
                "
                  >
                    <option>Institution Type</option>
                    <option>Bank</option>
                    <option>Grade/Level/Semester</option>
                    <option>Pursuing Education</option>
                  </select>
                  <select
                    className="
                  bg-white
                  h-full
                  px-3
                  col-span-2
                  w-full
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  sm3:col-span-4
                  usm:col-span-8
                "
                  >
                    <option>Habib Bank Limited</option>
                    <option>National Bank of Pakistan</option>
                    <option>MCB Bank</option>
                    <option>United Bank Limited UBL</option>
                    <option>New</option>
                  </select>
                  <input
                    type="text"
                    className="
                  col-span-3
                  h-full
                  px-2
                  w-full
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  focus:border-green-400
                  sm3:col-span-4
                  usm:col-span-8
                "
                    placeholder=""
                  />
                  <button
                    className="
                  col-span-1
                  rounded-md
                  bg-green-400
                  shadow-lg
                  sm3:col-span-4
                  usm:col-span-8
                  text-white
                "
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

Options.propTypes = {};
const mapStateToProps = (state) => ({});

export default Options;
