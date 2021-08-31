import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";

function Students() {
  const [paymentsPop, setPaymentsPop] = useState("hidden");
  const [reportsPop, setReportsPop] = useState("hidden");
  const [studentInfoPop, setStudentInfoPop] = useState("hidden");
  const [cnPhoto, setCnPhoto] = useState("hidden");
  const [stPhoto, setStPhoto] = useState("hidden");
  const [prPhoto, setPrPhoto] = useState("hidden");
  const [idPhoto, setIdPhoto] = useState("hidden");
  const [bkPhoto, setBkPhoto] = useState("hidden");
  const changeCnPhoto = () => {
    cnPhoto === "hidden" ? setCnPhoto(" ") : setCnPhoto("hidden");
  };
  const changeStPhoto = () => {
    stPhoto === "hidden" ? setStPhoto(" ") : setStPhoto("hidden");
  };
  const changePrPhoto = () => {
    prPhoto === "hidden" ? setPrPhoto(" ") : setPrPhoto("hidden");
  };
  const changeIdPhoto = () => {
    idPhoto === "hidden" ? setIdPhoto(" ") : setIdPhoto("hidden");
  };
  const changeBkPhoto = () => {
    bkPhoto === "hidden" ? setBkPhoto(" ") : setBkPhoto("hidden");
  };
  const changePaymentsPop = () => {
    if (paymentsPop === "hidden") {
      setReportsPop("hidden");
      setPaymentsPop(" ");
    } else {
      setPaymentsPop("hidden");
    }
    //paymentsPop === "hidden" ? setPaymentsPop(" ") : setPaymentsPop("hidden");
  };
  const changeReportsPop = () => {
    if (reportsPop === "hidden") {
      setPaymentsPop("hidden");
      setReportsPop(" ");
    } else {
      setReportsPop("hidden");
    }
    //paymentsPop === "hidden" ? setPaymentsPop(" ") : setPaymentsPop("hidden");
  };
  const changeStudentInfoPop = () => {
    if (studentInfoPop === "hidden") {
      setStudentInfoPop(" ");
    } else {
      setStudentInfoPop("hidden");
    }
  };
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-1/2 h-180/2 absolute centerHorizontal sm2:p-5 lg3:w-3/5 lg2:w-3/4 lg1:w-180/2">
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
                    <option>bank</option>
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
                <div className="w-full md2:overflow-x-auto">
                  <table className="w-full h-auto relative">
                    <thead className="w-full">
                      <tr
                        className="
                      text-md
                      h-auto
                      font-semibold
                      tracking-wide
                      text-left text-gray-900
                      bg-gray-100
                      uppercase
                      border-b border-gray-600
                    "
                      >
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Reports</th>
                        <th className="px-4 py-3">Payments</th>
                        <th className="px-4 py-3">Scholarship time</th>
                      </tr>
                    </thead>
                    <tbody className="w-full bg-white">
                      <tr className="text-gray-700">
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
                              <p
                                className="font-semibold text-black"
                                onClick={() => changeStudentInfoPop()}
                              >
                                Sufyan Khan
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          className="px-4 py-3 text-ms font-semibold border"
                          onClick={() => changeReportsPop()}
                        >
                          Student Reports
                        </td>
                        <td
                          className="px-4 py-3 border text-md font-semibold"
                          onClick={() => changePaymentsPop()}
                        >
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="h-auto bg-white hidden">
                        <td
                          colSpan="4"
                          className="col-span-4 bg-green-200 "
                        ></td>
                      </tr>
                      <tr className={`h-auto bg-white ${paymentsPop}`}>
                        <td colSpan="4" className="col-span-4">
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
                                <th className="px-4 py-3">Payment</th>
                                <th className="px-4 py-3">Payment status</th>
                                <th className="px-4 py-3">Payment Date</th>
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
                                  Payment 1
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
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
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 2
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
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
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 3
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
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
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 4
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                                >
                                  Pending
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
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 5
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                                >
                                  pending
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      {/* Students Reports */}
                      <tr className={`h-auto bg-white ${reportsPop}`}>
                        <td colSpan="4" className="col-span-4">
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
                                Amin Mehmood
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                              <p className="font-semibold">Ibrahim Akbar</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>

                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                      <tr className="text-gray-700">
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
                              <p className="font-semibold">Sami Shahzad</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Reports
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">
                          Student Payments
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          From: 6/4/2000 to: 6/4/2004
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* start of student info pop up */}
                <div
                  className={`h-full w-full bg-white absolute top-0 left-0 ${studentInfoPop}`}
                >
                  <div
                    className="
                w-full
                h-full
                centerSom
                bg-white
                lg1:bg-transparent
                usm:w-full
              "
                  >
                    <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                      <div className="flex justify-center">
                        <div className="flex">
                          <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                            Sufyan Khan
                          </h1>
                        </div>
                      </div>
                      {/* <!-- 1 row --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Name
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
                            value="Sufyan Khan"
                            placeholder="Sufyan Khan"
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
                            CNIC
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
                            value="152478459636"
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
                            Gender
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>Male</option>
                          </select>
                        </div>
                      </div>
                      {/* <!-- 2 row --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Age
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
                            value="12"
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
                            Mobile
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
                            value="+56-569-5987-8965"
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
                            Phone
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
                            value="451268594"
                          />
                        </div>
                      </div>
                      {/* <!-- 3 row --> */}

                      {/* <!-- 5 row --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Email
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
                            value="testemail@test.com"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            CNIC PHOTO
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button
                              id="imageCn"
                              className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                              onClick={() => {
                                changeCnPhoto();
                              }}
                            >
                              Check Image
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            STUDENT PHOTO
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button
                              id="imageCn"
                              className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                              onClick={() => {
                                changeStPhoto();
                              }}
                            >
                              Check Image
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                      </div>
                      <hr className="mt-5 border" />
                      {/* <!-- 6row --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Guardian/Parent
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>Parent1</option>
                            <option>Parent2</option>
                          </select>
                        </div>

                        {/* <!-- hidden form --> */}

                        <div className="grid grid-cols-1 mx-7">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Type
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
                            <option>Parent</option>
                          </select>
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
                            Gender
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>Male</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Name
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
                            value="Hamesh khan"
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
                            CNIC
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
                            value="1542578659452"
                          />
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Email
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
                            value="paren1@email.com"
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
                            Mobile
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
                            value="+54-569-5896-5896"
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
                            Phone
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
                            value="564587512"
                          />
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            CNIC PHOTO
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button
                              id="imageCn"
                              className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                              onClick={() => {
                                changePrPhoto();
                              }}
                            >
                              Check Image
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            SALARY SLIP
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500">
                              Donwload file
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                      mb-1
                    "
                          >
                            QUALIFICATION DOCUMENT
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500">
                              Donwload file
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                      </div>

                      <hr className="mt-5 border" />
                      {/* <!-- institution --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Select Class
                          </label>
                          <select
                            className="
                      py-2
                      px-3
                      rounded-lg
                      border border-gray-300
                      mt-1
                      bg-gray-100
                      focus:outline-none
                      focus:ring-1
                      focus:ring-gray-600
                      focus:border-transparent
                    "
                          >
                            <option>School</option>
                            <option>School</option>
                            <option>School</option>
                            <option>School</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            institution/School Name
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
                            value="xyz school"
                          />
                        </div>
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Institution Type
                          </label>
                          <select
                            className="
                      py-2
                      px-3
                      rounded-lg
                      border border-gray-300
                      mt-1
                      bg-gray-100
                      focus:outline-none
                      focus:ring-1
                      focus:ring-gray-600
                      focus:border-transparent
                    "
                          >
                            <option>School</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Which level/Grade/Semester are you in?
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>School</option>
                          </select>
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
                            Education you are pursuing
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>School</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Institution/School Phone
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
                            value="1524562548"
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
                            Institution/School Joining Date
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
                            value="24/10/2020"
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
                            Institution/School Address
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
                            value="Xyz street"
                          />
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                          >
                            Institution/School Email
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
                            value="xyzschool@email.com"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            ID CARD PHOTO
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button
                              className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                              onClick={() => changeIdPhoto()}
                            >
                              Check Image
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            ADMISSION RECEIPT COPY
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500">
                              Donwload file
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
                      </div>

                      <hr className="mt-5 border" />
                      {/* <!-- FEES --> */}
                      <div className="grid grid-cols-1 mt-5 mx-7">
                        <label
                          className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                        >
                          Required Fees
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
                          value="i need 500 dollars to finish the school year"
                        />
                      </div>
                      <hr className="mt-5 border" />
                      {/* <!-- bank account --> */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Bank Account
                          </label>
                          <select
                            className="
                      py-2
                      px-3
                      rounded-lg
                      border border-gray-300
                      mt-1
                      bg-gray-100
                      focus:outline-none
                      focus:ring-1
                      focus:ring-gray-600
                      focus:border-transparent
                    "
                          >
                            <option>Bank1</option>
                            <option>Bank2</option>
                          </select>
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
                            Bank
                          </label>
                          <select
                            className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                          >
                            <option>Meezan Bank Limited</option>
                            <option>Bank2</option>
                          </select>
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
                            Branch Name
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
                            value="Abdullah Haroon Road Branch"
                          />
                        </div>
                      </div>
                      {/* end here */}
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account Title
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
                            value="Hamesh Khan"
                          />
                        </div>
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account Number
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
                            value="123564875962"
                          />
                        </div>
                        <div className="grid grid-cols-1 ">
                          <label
                            className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account IBAN
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
                            value="Account IBAN"
                          />
                        </div>
                      </div>
                      <div
                        className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                      >
                        <div className="grid grid-cols-1">
                          <label
                            className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                          >
                            Copy of CHEQUE
                          </label>
                          <div className="flex items-center justify-left w-full">
                            <button
                              className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                              onClick={() => changeBkPhoto()}
                            >
                              Check Image
                            </button>
                          </div>
                          <div className="flex items-center justify-left w-full">
                            <input type="file" />
                          </div>
                        </div>
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
                          onClick={() => changeStudentInfoPop()}
                        >
                          Go back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of student info pop up */}
              </div>
            </div>
          </div>
        </main>
        {/* start of images pop ups */}
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${cnPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeCnPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/5 border ${stPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/graduate-member.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeStPhoto()}
            >
              X
            </button>
          </div>
        </div>

        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${prPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changePrPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${idPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeIdPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${bkPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/MeezanBank_PK.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeBkPhoto()}
            >
              X
            </button>
          </div>
        </div>
        {/* End of images pop ups */}
      </div>
    </Fragment>
  );
}

Students.propTypes = {};
const mapStateToProps = (state) => ({});

export default Students;
