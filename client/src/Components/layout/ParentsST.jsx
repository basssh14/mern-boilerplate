import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";

function ParentsST(props) {
  const [parentPop, setParentPop] = useState("hidden");
  const [newParentPop, setNewParentPop] = useState("hidden");
  const [imagePop, setImagePop] = useState("hidden");
  const changeParentPop = () => {
    if (parentPop === "hidden") {
      setParentPop(" ");
    } else {
      setParentPop("hidden");
    }
  };
  const changeNewParentPop = () => {
    if (newParentPop === "hidden") {
      setNewParentPop(" ");
    } else {
      setNewParentPop("hidden");
    }
  };
  const changeImagePop = () => {
    if (imagePop === "hidden") {
      setImagePop(" ");
    } else {
      setImagePop("hidden");
    }
  };

  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white lg1:bg-transparent">
              <div
                className="
              grid
              gap-6
              pt-5
              px-5
              mb-8
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              usm:px-1
            "
              >
                {/* <!-- Card 1 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
                relative
                text-center
                md3:h-36
              "
                  onClick={() => changeNewParentPop()}
                >
                  <div className="w-20 h-20 centerSom">
                    <img
                      src="./img/icons8-add-100.png"
                      alt="add logo"
                      className="w-full h-full bg-cover"
                    />
                    <div>
                      <p className="mb-2 text-md font-medium text-gray-900"></p>
                      <p className="text-sm font-normal text-gray-800"></p>
                      <p className="text-sm font-normal text-gray-800"></p>
                      <p className="text-sm font-normal text-gray-800">
                        <span className="text-white bg-green-400"></span>
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        <span className="text-white bg-gray-500"></span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                  onClick={() => changeParentPop()}
                >
                  <div className="mr-4 bg-blue-500 text-white rounded-full">
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-md font-medium text-gray-900">
                      Kashif Khan
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      CNIC: 1542748485745
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      RELATION: FATHER
                    </p>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                >
                  <div className="mr-4 bg-blue-500 text-white rounded-full">
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-md font-medium text-gray-900">
                      Aisha Khan
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      CNIC: 1542748485745
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      RELATION: MOTHER
                    </p>
                  </div>
                </div>
              </div>
              {/* start of new parent pop up */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${newParentPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        New Parent
                      </h1>
                    </div>
                  </div>
                  {/* <!-- 1 row --> */}
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
                      <option>Guardian</option>
                    </select>
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
                        <option>Female</option>
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
                        placeholder="Name"
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
                        placeholder="CNIC"
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
                        placeholder="Email"
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
                        placeholder="Mobile"
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
                        placeholder="Phone"
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
                    mb-1
                  "
                      >
                        CNIC COPY
                      </label>
                      <div className="flex items-center justify-left w-full">
                        {/* <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                             <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg> 
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              CHOOSE FILE
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>  */}
                        <input type="file" className="" />
                        {/* <button className="w-auto h-auto py-3 px-3 rounded-lg bg-gray-700">
                          Check
                        </button> */}
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
                        {/* <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              CHOOSE FILE
                            </p>
                          </div>
                          
                        </label> */}
                        <input type="file" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                      <input type="file" className="" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
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
                      onClick={() => changeNewParentPop()}
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
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* end of new parent pop up */}
              {/* parent information */}
              {/* start of new parent pop up */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${parentPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        Kashif Khan
                      </h1>
                    </div>
                  </div>
                  {/* <!-- 1 row --> */}
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
                        value="kashif khan"
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
                        CNIC PHOTO
                      </label>
                      <div className="flex items-center justify-left w-full">
                        <button
                          className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                          onClick={() => changeImagePop()}
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
                          Download Image
                        </button>
                      </div>
                      <div className="flex items-center justify-left w-full">
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                  <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
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
                      onClick={() => changeParentPop()}
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
                      Save
                    </button>
                  </div>
                </div>
                {/* end of parent information */}
                <div
                  className={`w-2/3 h-1/2 bg-white centerSom usm:h-1/3 border ${imagePop}`}
                >
                  <div className="w-full h-full relative">
                    <img
                      src="./img/Pakistani-CNIC-of-chinese-man.jpg"
                      className="w-full h-full bg-cover"
                    />
                    <button
                      className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
                      onClick={() => changeImagePop()}
                    >
                      X
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

ParentsST.propTypes = {};

export default ParentsST;
