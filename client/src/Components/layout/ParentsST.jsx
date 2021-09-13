import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import axios from "axios";
import { connect } from "react-redux";
import { newParent, updateParent, getParents } from "../../actions/parents";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";
import ParentPopUp from "./ParentPopUp";
import { setAlert } from "../../actions/alert";
import Spinner from "./Spinner";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//filepond stuff
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function ParentsST({
  newParent,
  updateParent,
  getParents,
  parents,
  setAlert,
  uploadCnic,
  uploadQuali,
  uploadSalary,
}) {
  //handle images
  const [cnicFront, setCnciFront] = useState();
  const [cnicBack, setCnicBack] = useState();
  const [salarySlip, setSalarySlip] = useState();
  const [qualiDoc, setQualiDoc] = useState();
  //take care of the data
  const [userParents, setUserParents] = useState([]);
  const [startParent, setStartParent] = useState();
  const [formData, setFormData] = useState({
    type: "",
    gender: "",
    name: "",
    cnic: "",
    email: "",
    mobile: "",
    phone: "",
  });
  const [cnicPhoto, setCnicCopy] = useState("");
  const [salaryPhoto, setSalaryPhoto] = useState("");
  const [qualiPhoto, setQualiPhoto] = useState("");
  const onChange = (e) =>
    setStartParent({ ...startParent, [e.target.name]: e.target.value });
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeCnic = (e) => setCnicCopy(e.target.files[0]);
  const onChangeSalary = (e) => setSalaryPhoto(e.target.files[0]);
  const onChangeQuali = (e) => setQualiPhoto(e.target.files[0]);
  const [parentIdToComp, setParentIdToComp] = useState({
    id: undefined,
  });
  //handle images
  const updateCnicFrontImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("cnicFront");
    return data;
  };
  const updateCnicBackImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("cnicBack");
    return data;
  };
  const updateSalarySlip = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("salarySlip");
    return data;
  };
  const updateQualiDoc = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("qualiDoc");
    return data;
  };
  //--------------------
  console.log(parentIdToComp.id);
  //0000000000000000000000000000000000000000000000000000000000000000000000000000
  //take care of the dinamic
  const [parentPop, setParentPop] = useState(false);
  const [newParentPop, setNewParentPop] = useState("hidden");
  const [imagePop, setImagePop] = useState("hidden");
  const changeParentPop = () => {
    setParentPop(!parentPop);
  };
  const changeNewParentPop = () => {
    console.log("this function");
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
  const changeParentIdToComp = (e) => {
    setParentIdToComp({ ...parentIdToComp, ["id"]: e.target.id });
    changeParentPop();
  };
  const onSubmitNewParent = async (e) => {
    e.preventDefault();
    const cnicFrontData = await updateCnicFrontImg(e);
    const cnicBackData = await updateCnicBackImg(e);
    const salarySlipData = await updateSalarySlip(e);
    const qualiDocData = await updateQualiDoc(e);
    const newInfo = {
      type: formData.type,
      gender: formData.gender,
      name: formData.name,
      cnic: formData.cnic,
      email: formData.email,
      mobile: formData.mobile,
      phone: formData.phone,
      cnicFront: cnicFrontData,
      cnicBack: cnicBackData,
      salarySlip: salarySlipData,
      qualiDoc: qualiDocData,
    };
    console.log(newInfo);
    newParent(newInfo);
    getParents();
    changeNewParentPop();
    setAlert("Creating Parent, Please Wait", "success", 20000);
  };
  //000000000000000000000000000000000000000000000000000000000000000000000000000000000
  useEffect(() => {
    getParents();
  }, []);

  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white lg1:bg-transparent">
              {parents.loading === true ? (
                <Spinner />
              ) : (
                <div className="w-fll h-full relative">
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
                      onClick={() => changeNewParentPop()}
                    >
                      <div className="w-20 h-20 centerSom">
                        <img
                          src="./img/icons8-add-100.png"
                          alt="add logo"
                          className="w-full h-full bg-cover"
                        />
                      </div>
                    </div>
                    {/* <!-- Cards --> */}
                    {parents.parents !== null
                      ? parents.parents.parents.map((parent) => (
                          <div
                            id={parent._id}
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
                            onClick={(e) => changeParentIdToComp(e)}
                          >
                            <div className="mr-4 bg-blue-500 text-white rounded-full pointer-events-none">
                              <img
                                className="rounded-full w-12 h-12"
                                src={`./img/parents.png`}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="pointer-events-none">
                              <p className="mb-2 text-md font-medium text-gray-900 ">
                                {parent.name}
                              </p>
                              <p className="text-sm font-normal text-gray-800">
                                CNIC: {parent.cnic}
                              </p>
                            </div>
                          </div>
                        ))
                      : " "}
                  </div>
                  <div
                    className={`h-full w-full bg-white absolute top-0 left-0 ${newParentPop}`}
                  >
                    <form onSubmit={(e) => onSubmitNewParent(e)}>
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
                            name="type"
                            required
                            value={formData.type}
                            onChange={(e) => onChangeFormData(e)}
                          >
                            <option defualt>Select</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Guardian</option>
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
                              name="gender"
                              required
                              value={formData.gender}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
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
                              required
                              placeholder="Name"
                              name="name"
                              value={formData.name}
                              onChange={(e) => onChangeFormData(e)}
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
                              required
                              type="text"
                              mask="99999-9999999-9"
                              placeholder="99999-9999999-9"
                              name="cnic"
                              value={formData.cnic}
                              onChange={(e) => onChangeFormData(e)}
                            ></InputMask>
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
                              required
                              placeholder="Email"
                              name="email"
                              value={formData.email}
                              onChange={(e) => onChangeFormData(e)}
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
                              mask="9999-9999999"
                              type="text"
                              placeholder="9999-9999999"
                              name="mobile"
                              value={formData.mobile}
                              onChange={(e) => onChangeFormData(e)}
                            ></InputMask>
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
                              mask="9999-9999999"
                              type="text"
                              placeholder="9999-9999999"
                              name="phone"
                              value={formData.phone}
                              onChange={(e) => onChangeFormData(e)}
                            ></InputMask>
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
                              Cnic Front
                            </label>
                            <div className="flex items-center justify-left w-full -ml-2">
                              <FilePond
                                files={cnicFront}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="cnicFront"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
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
                              Cnic Back
                            </label>
                            <div className="flex items-center justify-left w-full -ml-2 ">
                              <FilePond
                                files={cnicBack}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="cnicBack"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-0 mx-7">
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
                              Salary Slip
                            </label>
                            <div className="flex items-center justify-left w-full -ml-2">
                              <FilePond
                                files={salarySlip}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="salarySlip"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
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
                              Qualification Document
                            </label>
                            <div className="flex items-center justify-left w-full -ml-2">
                              <FilePond
                                files={qualiDoc}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="qualiDoc"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
                            </div>
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
                            type="button"
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
                            type="submit"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {parentPop && (
                    <ParentPopUp
                      changeVisibility={changeParentPop}
                      parentId={parentIdToComp}
                    />
                  )}
                  {/* end of new parent pop up */}
                  {/* parent information */}
                  {/* start of new parent pop up */}
                  {/* <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${parentPop}`}
              >
                <form onClick={() => onsubmit()}>
                  <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                    <div className="flex justify-center">
                      <div className="flex">
                        <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                          {startParent !== undefined ? startParent.name : " "}
                        </h1>
                      </div>
                    </div>
                     <!-- 1 row -->
                    <div className="grid grid-cols-1 mx-7">
                      <label
                        className="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                      ></label>
                      <select
                        value={
                          startParent !== undefined ? startParent.name : ""
                        }
                        onChange={(e) => onChangeFormData(e)}
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
                        <option value="Parent">Parent</option>
                        <option value="Guardian">Parent</option>
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
                          value={
                            startParent !== undefined ? startParent.name : " "
                          }
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
                  </div> */}
                  {/* end of parent information */}
                  {/* <div
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
                  
                </form>*/}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

ParentsST.propTypes = {
  newParent: PropTypes.func.isRequired,
  updateParent: PropTypes.func.isRequired,
  getParents: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  uploadCnic: PropTypes.func.isRequired,
  uploadSalary: PropTypes.func.isRequired,
  uploadQuali: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  parents: state.parents,
});

export default connect(mapStateToProps, {
  setAlert,
  newParent,
  updateParent,
  getParents,
})(ParentsST);
