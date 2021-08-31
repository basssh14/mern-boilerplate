import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";

function BankSt(props) {
  const [newBankPop, setNewBankPop] = useState("hidden");
  const [bankPop, setBankPop] = useState("hidden");
  const [imagePop, setImagePop] = useState("hidden");
  const changeNewBankPop = () => {
    newBankPop === "hidden" ? setNewBankPop(" ") : setNewBankPop("hidden");
  };
  const changeBankPop = () => {
    bankPop === "hidden" ? setBankPop(" ") : setBankPop("hidden");
  };
  const changeImagePop = () => {
    imagePop === "hidden" ? setImagePop(" ") : setImagePop("hidden");
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
                  onClick={() => changeNewBankPop()}
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
                  onClick={() => changeBankPop()}
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
                      12453568794
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      Bank: Meezan Bank Limited
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      Account Title: Hamesh Khan
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
                    <div>
                      <p className="mb-2 text-md font-medium text-gray-900">
                        12000568794
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        Bank: Dubai Islamic Bank
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        Account Title: Kashif Khan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- popup section new bank --> */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${newBankPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        New Bank
                      </h1>
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
                        <option>Meezan Bank Limited.</option>
                        <option>Soneri Mustaqeem Islamic Bank.</option>
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
                        placeholder="Branch name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                      placeholder="Account Title"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                      placeholder="Account Number"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                      placeholder="Account IBAN"
                    />
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
                        Copy of CHEQUE
                      </label>
                      <div className="flex items-center justify-left w-full">
                        <input type="file" />
                      </div>
                    </div>
                  </div>
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
                      onClick={() => changeNewBankPop()}
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
                      CREATE
                    </button>
                  </div>
                </div>
              </div>
              {/* End of pop up section */}
              {/* <!-- popup section new bank --> */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${bankPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        12453568794
                      </h1>
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
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                      value="12453568794"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
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
                          onClick={() => changeImagePop()}
                        >
                          Check Image
                        </button>
                      </div>
                      <div className="flex items-center justify-left w-full">
                        <input type="file" />
                      </div>
                    </div>
                  </div>
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
                      onClick={() => changeBankPop()}
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
                      CREATE
                    </button>
                  </div>
                </div>
              </div>
              {/* End of pop up section */}
              <div
                className={`w-2/3 h-1/2 bg-white centerSom usm:h-1/3 border ${imagePop}`}
              >
                <div className="w-full h-full relative">
                  <img
                    src="./img/MeezanBank_PK.jpg"
                    className="w-full h-full bg-cover"
                    alt="bank check"
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
        </main>
      </div>
    </Fragment>
  );
}

BankSt.propTypes = {};

export default BankSt;
