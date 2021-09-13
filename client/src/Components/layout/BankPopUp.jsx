import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { setAlert } from "../../actions/alert";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//redux stuff
import { connect } from "react-redux";
import { getBanks, updateBank } from "../../actions/banks";
//filepond
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function BankPopUp({
  changeVisibility,
  bankId,
  banks,
  getBanks,
  updateBank,
  setAlert,
}) {
  //display image center of screen
  const [imgTop, setImgTop] = useState(0);
  //image hide
  const [imagePop, setImagePop] = useState("hidden");
  const [checkImgFile, setCheckImgFile] = useState();
  const clickedBank =
    banks.banks !== null &&
    banks.banks.banks.find((account) => account._id === bankId.id);
  console.log(clickedBank);
  console.log(Buffer.from(clickedBank.checkImg).toString("base64"));
  const imgDisplay = () => {
    if (clickedBank.checkImg != null && clickedBank.checkImgType != null) {
      return `data: ${
        clickedBank.checkImgType
      };charset=utf-8;base64,${Buffer.from(clickedBank.checkImg).toString(
        "base64"
      )}`;
    }
  };
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  const reverseImg = (img) => {
    return Buffer.from(img).toString("base64");
  };
  const [formData, setFormData] = useState({
    bank: clickedBank !== null ? clickedBank.bank : " ",
    branchName: clickedBank !== null ? clickedBank.branchName : " ",
    accTitle: clickedBank !== null ? clickedBank.accTitle : " ",
    accNumber: clickedBank !== null ? clickedBank.accNumber : " ",
    accIban: clickedBank !== null ? clickedBank.accIban : " ",
    checkImg: clickedBank !== null ? reverseImg(clickedBank.checkImg) : " ",
    checkImgType: clickedBank !== null ? clickedBank.checkImgType : " ",
  });
  const updateImgData = async (e) => {
    const form = await new FormData(e.target);
    const data = await form.get("checkImgFile");
    return data;
  };
  const changeImagePop = () => {
    getPosition("something");
    imagePop === "hidden" ? setImagePop(" ") : setImagePop("hidden");
  };
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmitUpdataBank = async (e) => {
    e.preventDefault();
    const data = await updateImgData(e);
    let newInfo = {
      bank: formData.bank,
      branchName: formData.branchName,
      accTitle: formData.accTitle,
      accNumber: formData.accNumber,
      accIban: formData.accIban,
      imageToProcess:
        data.size === 0
          ? { data: formData.checkImg, type: formData.checkImgType }
          : data,
    };
    // if (data.size === 0) {
    //   newInfo = {
    //     bank: formData.bank,
    //     branchName: formData.branchName,
    //     accTitle: formData.accTitle,
    //     accNumber: formData.accNumber,
    //     accIban: formData.accIban,
    //     imageToProcess: null,
    //   };
    // } else {
    //   newInfo = {
    //     bank: formData.bank,
    //     branchName: formData.branchName,
    //     accTitle: formData.accTitle,
    //     accNumber: formData.accNumber,
    //     accIban: formData.accIban,
    //     imageToProcess: data,
    //   };
    // }
    //console.log(newInfo);
    console.log(newInfo);
    updateBank(newInfo, bankId.id);
    getBanks();
    changeVisibility();
    setAlert("Uploading account, please wait", "success", 7000);
  };
  return (
    <Fragment>
      <div className={`h-full w-full bg-white absolute top-0 left-0`}>
        <form onSubmit={(e) => onSubmitUpdataBank(e)}>
          <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                  {formData.accNumber}
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
                  name="bank"
                  required
                  value={formData.bank}
                  onChange={(e) => onChangeFormData(e)}
                >
                  <option defualt>Select</option>
                  <option value="Meezan Bank Limited.">
                    Meezan Bank Limited.
                  </option>
                  <option value="Soneri Mustaqeem Islamic Bank.">
                    Soneri Mustaqeem Islamic Bank.
                  </option>
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
                mask="9999-9999-9999-9999"
                placeholder="9999-9999-9999-9999"
                name="accNumber"
                required
                value={formData.accNumber}
                onChange={(e) => onChangeFormData(e)}
              ></InputMask>
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
                mask="9999-9999-9999-9999-9999-9999"
                placeholder="9999-9999-9999-9999-9999-9999"
                name="accIban"
                required
                value={formData.accIban}
                onChange={(e) => onChangeFormData(e)}
              ></InputMask>
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
                    type="button"
                    onClick={() => changeImagePop()}
                  >
                    Check Image
                  </button>
                </div>
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
                onClick={() => changeVisibility()}
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
                UPDATE
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{ top: imgTop }}
        className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imagePop}`}
      >
        <div className="w-full h-full relative">
          <img
            src={clickedBank !== null ? imgDisplay() : " "}
            className="w-full h-full bg-cover"
            alt="bank check"
          />
          <button
            className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
            onClick={() => changeImagePop()}
          >
            X
          </button>
        </div>
      </div>
    </Fragment>
  );
}

BankPopUp.propTypes = {
  changeVisibility: PropTypes.func.isRequired,
  bankId: PropTypes.object.isRequired,
  banks: PropTypes.object.isRequired,
  getBanks: PropTypes.func.isRequired,
  updateBank: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, getBanks, updateBank })(BankPopUp);
