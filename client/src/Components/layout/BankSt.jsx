import React, { Fragment, useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { setAlert } from "../../actions/alert";
import Spinner from "./Spinner";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";
import BankPopUp from "./BankPopUp";
//redux stuff
import { connect } from "react-redux";
import { newBank, getBanks, updateBank } from "../../actions/banks";
import { getOptions } from "../../actions/options";
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);
function BankSt({
  newBank,
  getBanks,
  updateBank,
  banks,
  setAlert,
  getOptions,
  options,
}) {
  const [newBankPop, setNewBankPop] = useState("hidden");
  const [checkImgFile, setCheckImgFile] = useState();
  const [bankPop, setBankPop] = useState("hidden");
  const [imagePop, setImagePop] = useState("hidden");
  const [userBankPop, setUserBankPop] = useState(false);
  const [formData, setFormData] = useState({
    bank: "",
    branchName: "",
    accTitle: "",
    accNumber: "",
    accIban: "",
    checkImg: "img stuff",
    checkImgType: "img stuff type",
    toProcessImg: {},
  });
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const changeUserBankPop = () => {
    setUserBankPop(!userBankPop);
  };
  // const setImageData = (e) => {
  //   const form = new FormData(e.target);
  //   const data = form.get("checkImgFile");
  // }
  //send the id to pop up
  const [bankIdToPop, setBankIdToPop] = useState({
    id: undefined,
  });
  const changeToProcessImg = (e) => {
    setFormData({ ...formData, ["toProcessImg"]: e.target.value });
  };
  const changeBankIdToPop = (e) => {
    setBankIdToPop({ ...bankIdToPop, ["id"]: e.target.id });
    changeUserBankPop();
  };
  const changeNewBankPop = () => {
    newBankPop === "hidden" ? setNewBankPop(" ") : setNewBankPop("hidden");
  };
  // const changeBankPop = () => {
  //   bankPop === "hidden" ? setBankPop(" ") : setBankPop("hidden");
  // };
  // const changeImagePop = () => {
  //   imagePop === "hidden" ? setImagePop(" ") : setImagePop("hidden");
  // };
  //update image data
  const updateImgData = async (e) => {
    const form = await new FormData(e.target);
    const data = await form.get("checkImgFile");
    return data;
  };
  //handle the submit
  const onSubmitNewBank = async (e) => {
    e.preventDefault();
    const data = await updateImgData(e);
    console.log(data);
    const newInfo = {
      bank: formData.bank,
      branchName: formData.branchName,
      accTitle: formData.accTitle,
      accNumber: formData.accNumber,
      accIban: formData.accIban,
      imageToProcess: data,
    };
    console.log(newInfo);
    // setFormData({ ...formData, ["toProcessImg"]: data });
    // console.log(formData);
    //console.log(data);
    // setTimeout(() => {
    //   setFormData({ ...formData, ["toProcessImg"]: data });
    //   console.log(formData);
    // }, 5000);
    //console.log(e.checkImgFile);
    newBank(newInfo);
    getBanks();
    changeNewBankPop();
    setAlert("Creating account, please wait", "success", 15000);
  };
  //get all the banks on render
  useEffect(() => {
    getBanks();
    getOptions();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white lg1:bg-transparent">
              {banks.loading === true ? (
                <Spinner />
              ) : (
                <div className="w-full h-full relative">
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
                py-10
                cursor-pointer
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
                    {banks.banks !== null
                      ? banks.banks.banks.map((bank) => (
                          <div
                            id={bank._id}
                            className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
                cursor-pointer
              "
                            onClick={(e) => changeBankIdToPop(e)}
                          >
                            <div className="mr-4 pointer-events-none bg-blue-500 text-white rounded-full">
                              <img
                                className="rounded-full w-12 h-12"
                                src={`./img/parents.png`}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="pointer-events-none">
                              <p className="mb-2 text-md font-medium text-gray-900">
                                {bank.accNumber}
                              </p>
                              <p className="text-sm font-normal text-gray-800">
                                Bank: {bank.bank}
                              </p>
                              <p className="text-sm font-normal text-gray-800">
                                Account Title: {bank.accTitle}
                              </p>
                            </div>
                          </div>
                        ))
                      : " "}
                  </div>
                  {/* <!-- popup section new bank --> */}
                  <div
                    className={`h-full w-full bg-white absolute top-0 left-0 ${newBankPop}`}
                  >
                    <form
                      encType="multipart/form-data"
                      onSubmit={(e) => onSubmitNewBank(e)}
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
                              name="bank"
                              required
                              value={formData.bank}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              {options.options !== null
                                ? options.options
                                    .filter((opt) => opt.type === "bank")
                                    .map((opti) => (
                                      <option value={opti.name}>
                                        {opti.name}
                                      </option>
                                    ))
                                : ""}
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
                              name="branchName"
                              required
                              value={formData.branchName}
                              onChange={(e) => onChangeFormData(e)}
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
                            name="accTitle"
                            required
                            value={formData.accTitle}
                            onChange={(e) => onChangeFormData(e)}
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
                            name="accNumber"
                            required
                            value={formData.accNumber}
                            onChange={(e) => onChangeFormData(e)}
                          ></input>
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
                          <InputMask
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
                            name="accIban"
                            mask="aa99-aaaa-9999-9999-9999-9999"
                            placeholder="AA00-AAAA-9999-9999-9999-9999"
                            required
                            value={formData.accIban}
                            onChange={(e) => onChangeFormData(e)}
                          ></InputMask>
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
                              <FilePond
                                files={checkImgFile}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="checkImgFile"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
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
                            type="button"
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
                            type="submit"
                          >
                            CREATE
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End of pop up section */}
                  {/* <!-- popup section new bank --> */}
                  {userBankPop && (
                    <BankPopUp
                      changeVisibility={changeUserBankPop}
                      bankId={bankIdToPop}
                      banks={banks}
                    />
                  )}
                  {/* <div
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
              </div> */}
                  {/* End of pop up section */}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

BankSt.propTypes = {
  getBanks: PropTypes.func.isRequired,
  updateBank: PropTypes.func.isRequired,
  newBank: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  getOptions: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  banks: state.banks,
  options: state.options,
});

export default connect(mapStateToProps, {
  setAlert,
  getBanks,
  updateBank,
  newBank,
  getOptions,
})(BankSt);
