import React, { Fragment } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";

function LoginS() {
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-full h-180/2 padding-12">
          <div className="w-full h-full relative">
            <div className="w-full h-3/4 centerSom bg-white">
              {/* <div className="w-full h-3/4 centerSom bg-transparent grid grid-cols-2 gap-5">
              <section className="h-full bg-white py-20">
                <div id="title" className="h-1/5 grid grid-cols-4">
                  <div className="col-span-1"></div>
                  <div className="col-span-2 h-full fontRoboto text-center">
                    <h2 className="fontRoboto text-6xl font-thin border-b border-black">
                      Applications
                    </h2>
                  </div>
                </div>
                <div id="title" className="h-4/5 grid grid-cols-2">
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-blue-300
                  "
                    >
                      21
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      New
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-gray-300
                  "
                    >
                      15
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Pending
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-red-300
                  "
                    >
                      1
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Denied
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-green-200
                  "
                    >
                      10
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Approved
                    </h3>
                  </div>
                </div>
              </section>
              <section className="h-full bg-white py-20">
                <div id="title" className="h-1/5 grid grid-cols-4">
                  <div className="col-span-1"></div>
                  <div className="col-span-2 h-full fontRoboto text-center">
                    <h2 className="fontRoboto text-6xl font-thin border-b border-black">
                      Payments
                    </h2>
                  </div>
                </div>
                <div id="title" className="h-4/5 grid grid-cols-2">
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-blue-300
                  "
                    >
                      40
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Month
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-red-300
                  "
                    >
                      24
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Pending
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-gray-300
                  "
                    >
                      100
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Students
                    </h3>
                  </div>
                  <div className="col-span-1 border-black relative text-center">
                    <h2
                      className="
                    w-full
                    h-4/5
                    fontRoboto
                    font-black
                    text-8xl
                    centerSom
                    text-green-200
                  "
                    >
                      16
                    </h2>
                    <h3
                      className="
                    w-1/2
                    h-1/5
                    absolute
                    bottom-5
                    centerHorizontal
                    fontRoboto
                    font-light
                    text-4xl
                    border-t
                  "
                    >
                      Approved
                    </h3>
                  </div>
                </div>
              </section>
            </div> */}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

LoginS.propTypes = {};
const mapStateToProps = (state) => ({});

export default LoginS;
