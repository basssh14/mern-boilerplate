import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";

function Pay() {
  const [reportsPop, setReportsPop] = useState("hidden");
  const [payPop, setPayPop] = useState("hidden");
  const changeReportsPop = () => {
    if (reportsPop === "hidden") {
      setReportsPop(" ");
    } else {
      setReportsPop("hidden");
    }
  };
  const changePayPop = () => {
    if (payPop === "hidden") {
      setPayPop(" ");
    } else {
      setPayPop("hidden");
    }
  };
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-full h-180/2 padding-12 sm2:p-5">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white">
              <div
                className="
              w-full
              h-20/2
              bg-white
              rounded-2xl
              relative
              sm3:h-24/2
              usm:h-1/3
            "
              >
                <div
                  className="
                w-full
                h-1/2
                px-3
                absolute
                centerVertical
                grid grid-cols-7
                gap-4
                lg1:w-full
                sm3:w-full sm3:ml-0 sm3:gap-1 sm3:h-4/5
                sm2:w-full sm2:ml-0 sm2:gap-1
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
                  sm3:col-span-3
                  usm:col-span-6
                "
                  >
                    <option>Date</option>
                    <option>Bank</option>
                    <option>ID</option>
                    <option>CNIC</option>
                    <option>ClassName</option>
                    <option>All</option>
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
                  usm:col-span-6
                "
                    placeholder=""
                  />
                  <button
                    className="
                  col-span-1
                  rounded-md
                  bg-green-400
                  shadow-lg
                  sm3:col-span-3
                  usm:col-span-6
                  text-white
                "
                  >
                    SEARCH
                  </button>

                  <div className="col-span-1 text-center sm3:col-span-3 usm:col-span-6">
                    <button
                      className="
                    col-span-1
                    rounded-lg
                    h-full
                    bg-blue-400
                    shadow-sm
                    text-white
                    px-3
                  "
                    >
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full mb-8 overflow-hidden shadow-lg">
                <div className="w-full lg3:overflow-x-auto">
                  <table className="w-full h-180/2">
                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">PaymentID</th>
                        <th className="px-4 py-3">Student</th>
                        <th className="px-4 py-3">Student reports</th>
                        <th className="px-4 py-3">Bank</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Approved funds</th>
                        <th className="px-4 py-3">funds Used</th>
                        <th className="px-4 py-3">Unused funds</th>
                        <th className="px-4 py-3">Payments left</th>
                        <th className="px-4 py-3">Payment date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">1</td>
                        <td
                          className="px-2 py-2 border"
                          onClick={() => changePayPop()}
                        >
                          02145678524
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold text-black">
                                Sufyan Khan
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          className="px-4 py-3 text-md font-semibold border"
                          onClick={() => changeReportsPop()}
                        >
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="h-auto bg-white hidden">
                        <td className=" col-span-4"></td>
                      </tr>
                      {/* Students Reports */}
                      <tr className={`h-auto bg-white ${reportsPop}`}>
                        <td colSpan="11" className="col-span-4">
                          <table className="w-full h-180/2">
                            <thead>
                              <tr
                                className="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-gray-900
                              bg-gray-100
                              uppercase
                              border-b border-gray-600
                            "
                              >
                                <th className="px-4 py-3">Number</th>
                                <th className="px-4 py-3">Report</th>
                                <th className="px-4 py-3">Date</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 1
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        2
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 2
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        3
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 3
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        4
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 4
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        5
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 5
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      {/* End of students  Reports */}
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">2</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold text-black">
                                Amin Mehmood{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">3</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Ibrahim Akbar </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">4</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Ali Ur rehman</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">5</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Khalid Arshad</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">6</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Nasser Mustafa</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">7</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Mohammed Yousaf</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">8</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Saad Server</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">9</td>
                        <td className="px-2 py-2 border">02145678524</td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">Sami Shahzad </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-2 py-2 border">500$</td>
                        <td className="px-2 py-2 border">240$</td>
                        <td className="px-2 py-2 border">260$</td>
                        <td className="px-2 py-2 border">13</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- pop up section --> */}
                  <div
                    className={`h-full w-full bg-white absolute top-0 left-0 ${payPop}`}
                  >
                    <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                      <div className="flex justify-center">
                        <div className="flex">
                          <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                            Pay Scholarship
                          </h1>
                        </div>
                      </div>
                      {/* <!-- 1 row --> */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Cheque Date
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                            placeholder="Cheque Date"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Cheque #
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                            placeholder="Cheque #"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Starting Month
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="date"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Ending Month:
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Amount
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                            placeholder="Amount"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Date of Approval
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Approved Amount:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Approval given by:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Approved From:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="date"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Approval to:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Unused Funds:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                              uppercase
                              md:text-sm
                              text-xs text-gray-500 text-light
                              font-semibold
                            "
                          >
                            Months Left:{" "}
                          </label>
                          <input
                            className="
                              py-2
                              px-3
                              rounded-lg
                              border border-gray-300
                              mt-1
                              focus:outline-none
                              focus:ring-1
                              focus:ring-gray-600
                              focus:border-transparent
                            "
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mx-7">
                        <label
                          className="
                            uppercase
                            md:text-sm
                            text-xs text-gray-500 text-light
                            font-semibold
                          "
                        >
                          sTATUS
                        </label>
                        <select
                          className="
                            py-2
                            px-3
                            rounded-lg
                            border border-gray-300
                            mt-1
                            focus:outline-none focus:ring-1
                            bg-gray-100
                            focus:ring-gray-600 focus:border-transparent
                          "
                        >
                          <option>Approved</option>
                          <option>Denied</option>
                        </select>
                      </div>
                      {/* <!-- buttons --> */}
                      <hr className="mt-5 border" />
                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          md:gap-8
                          gap-4
                          pt-5
                          pb-5
                        "
                      >
                        <button
                          className="
                            w-auto
                            bg-red-400
                            hover:bg-red-200
                            rounded-lg
                            shadow-xl
                            font-medium
                            text-white
                            px-4
                            py-2
                          "
                          onClick={() => changePayPop()}
                        >
                          Cancel
                        </button>
                        <button
                          className="
                            w-auto
                            bg-green-400
                            hover:bg-green-200
                            rounded-lg
                            shadow-xl
                            font-medium
                            text-white
                            px-4
                            py-2
                          "
                        >
                          PAY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

Pay.propTypes = {};
const mapStateToProps = (state) => ({});

export default Pay;
