import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";

function Payments() {
  const [payedPop, setPayedPop] = useState("hidden");
  const changePayedPop = () => {
    if (payedPop === "hidden") {
      setPayedPop(" ");
    } else {
      setPayedPop("hidden");
    }
  };
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-3/5 h-180/2 absolute centerHorizontal sm2:p-5 lg3:w-2/3 lg2:w-4/5 lg1:w-180/2">
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
                    <option>PaymentID</option>
                    <option>Bank</option>
                    <option>Date</option>
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
                <div className="w-full lg2:overflow-x-auto">
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
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">PaymentID</th>
                        <th className="px-4 py-3">Student</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Bank</th>
                        <th className="px-4 py-3">Cheque #</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Payment date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="text-gray-700">
                        <td className="px-2 py-2 border">1</td>
                        <td
                          className="px-2 py-2 border"
                          onClick={() => changePayedPop()}
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                      <tr className="h-auto bg-white hidden">
                        <td className="col-span-4"></td>
                      </tr>
                      <tr className="h-auto bg-white hidden">
                        <td className="col-span-4"></td>
                      </tr>
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
                                Amin Mehmood
                              </p>
                            </div>
                          </div>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                              <p className="font-semibold">Ibrahim Akbar</p>
                            </div>
                          </div>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                        <td className="px-4 py-3 border text-md font-semibold bg-gray-300">
                          Pending
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                        <td className="px-4 py-3 border text-md font-semibold bg-gray-300">
                          Pending
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
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
                              <p className="font-semibold">Sami Shahzad</p>
                            </div>
                          </div>
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
                        <td className="px-4 py-3 text-ms font-semibold border">
                          Meezan Bank Limited
                        </td>
                        <td className="px-2 py-2 border">000000000000</td>
                        <td className="px-2 py-2 border">20$</td>
                        <td className="px-4 py-3 text-sm border">6/4/2021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- pop up section --> */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${payedPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        Payed Scholarship
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
                        Value="24/5/2021"
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
                        value="1524562358456"
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
                        type="text"
                        value="05/24/2021"
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
                        type="text"
                        value="24/08/2021"
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
                        value="20"
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
                        type="text"
                        value="24/05/2021"
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
                        Approved total Amount:{" "}
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
                        value="2500"
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
                        value="Admin level 1"
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
                        type="text"
                        value="24/05/2019"
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
                        type="text"
                        value="24/052023"
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
                        value="1500"
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
                        value="24"
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
                      STATUS
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
                      onClick={() => changePayedPop()}
                    >
                      Close
                    </button>
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

Payments.propTypes = {};
const mapStateToProps = (state) => ({});

export default Payments;
