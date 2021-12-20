import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { setAlert } from "../../actions/alert";
import InputMask from "react-input-mask";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//redux stuff
import { connect } from "react-redux";
import {
  newScholarship,
  getScholarships,
  updateScholarship,
} from "../../actions/scholarships";
import { getApplicants } from "../../actions/aplicants";
import { getParents } from "../../actions/parents";
import { getBanks } from "../../actions/banks";
import { getOptions } from "../../actions/options";
import ScholarshipPopUp from "./ScholarshipPopUp";
//filepond stuff
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);
function ScholarshipsST({
  newScholarship,
  updateScholarship,
  getScholarships,
  scholarships,
  getApplicants,
  applicants,
  getParents,
  parents,
  getBanks,
  banks,
  setAlert,
  getOptions,
  options,
}) {
  //handle images
  const [adminReceipt, setAdminReceipt] = useState();
  const [cardId, setCardId] = useState();
  //---------------------------------
  const [scholarshipPopUp, setScholarshipPopUp] = useState(false);
  const [scholIdToPop, setScholIdToPop] = useState({
    id: undefined,
  });
  const [newSchoPop, setNewSchoPop] = useState("hidden");
  const [schoPop, setSchoPop] = useState("hidden");
  const [imageCnPop, setImageCnPop] = useState("hidden");
  const [imageStPop, setImageStPop] = useState("hidden");
  const [imageIdPop, setImageIdPop] = useState("hidden");
  const [formData, setFormData] = useState({
    applicant: "",
    parent1: "",
    parent2: "",
    institutionName: "",
    institutionType: "",
    level: "",
    pursuingEducation: "",
    institutionEmail: "",
    institutionPhone: "",
    institutionJoinDate: "",
    institutionAddress: "",
    scholarshipStartDate: "",
    scholarshipEndDate: "",
    requiredFees: "",
    // reports: [
    //     {
    //         level: "3 grade",
    //         grades: "2.4",
    //         dateOfExam: "29-01-15",
    //         dateOfResult: "20-01-16",
    //         resultReceivedOn: "29-01-16"
    //     }
    // ],
    bankAccount: "",
  });
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const changeNewSchoPop = () => {
    newSchoPop === "hidden" ? setNewSchoPop(" ") : setNewSchoPop("hidden");
  };
  const changeSchoPop = () => {
    schoPop === "hidden" ? setSchoPop(" ") : setSchoPop("hidden");
  };
  const changeImageCnPop = () => {
    imageCnPop === "hidden" ? setImageCnPop(" ") : setImageCnPop("hidden");
  };
  const changeImageStPop = () => {
    imageStPop === "hidden" ? setImageStPop(" ") : setImageStPop("hidden");
  };
  const changeImageIdPop = () => {
    imageIdPop === "hidden" ? setImageIdPop(" ") : setImageIdPop("hidden");
  };
  const changeScholIdToPop = (e) => {
    setScholIdToPop({ ...scholIdToPop, ["id"]: e.target.id });
  };
  const changeScholarshipPopUp = () => {
    setScholarshipPopUp(!scholarshipPopUp);
  };
  const changeScholarshipPopUpFull = (e) => {
    changeScholIdToPop(e);
    changeScholarshipPopUp();
  };
  //handle images
  const updateCardIdImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("cardId");
    return data;
  };
  const updateAdminReceiptImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("adminReceipt");
    return data;
  };
  //--------------------

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("try here222");
    const cardId = await updateCardIdImg(e);
    const adminReceipt = await updateAdminReceiptImg(e);
    const newInfo = {
      applicant: formData.applicant,
      parent1: formData.parent1,
      parent2: formData.parent2,
      institutionName: formData.institutionName,
      institutionType: formData.institutionType,
      level: formData.level,
      pursuingEducation: formData.pursuingEducation,
      institutionEmail: formData.institutionEmail,
      institutionPhone: formData.institutionPhone,
      institutionJoinDate: formData.institutionJoinDate,
      institutionAddress: formData.institutionAddress,
      scholarshipStartDate: formData.scholarshipStartDate,
      scholarshipEndDate: formData.scholarshipEndDate,
      requiredFees: formData.requiredFees,
      // reports: [
      //     {
      //         level: formData.reports[0].level,
      //         grades: formData.reports[0].grades,
      //         dateOfExam: formData.reports[0].dateOfExam,
      //         dateOfResult: formData.reports[0].dateOfResult,
      //         resultReceivedOn: formData.reports[0].resultReceivedOn
      //     }
      // ],
      idCard: cardId,
      admissionReceipt: adminReceipt,
      bankAccount: formData.bankAccount,
    };
    console.log("try here");
    newScholarship(newInfo);
    getApplicants();
    getScholarships();
    changeNewSchoPop();
    setAlert("Creating Scholarship, please wait", "success", 30000);
  };
  //get all the scholarships on render
  useEffect(() => {
    getApplicants();
    getParents();
    getBanks();
    getScholarships();
    getOptions();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white lg1:bg-transparent">
              {scholarships.loading === true ? (
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
                py-10
                cursor-pointer
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
                relative
                text-center
                md3:h-36
              "
                      onClick={() => changeNewSchoPop()}
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
                    {scholarships.scholarships !== null &&
                    applicants.applicants !== null
                      ? scholarships.scholarships.scholarships.map(
                          (scholarship) => (
                            <div
                              id={scholarship._id}
                              className="
                          cursor-pointer
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                              onClick={(e) => changeScholarshipPopUpFull(e)}
                            >
                              <div className="mr-4  pointer-events-none bg-blue-500 text-white rounded-full">
                                <img
                                  className="rounded-full w-12 h-12 pointer-events-none"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                              <div className="pointer-events-none">
                                <p className="mb-2 text-md font-medium text-gray-900 pointer-events-none">
                                  {applicants.applicants.applicants
                                    .filter(
                                      (applicant) =>
                                        applicant._id === scholarship.applicant
                                    )
                                    .map((applicanttt) => applicanttt.name)}
                                </p>
                                <p className="text-sm font-normal text-gray-800 pointer-events-none">
                                  CNIC:{" "}
                                  {applicants.applicants.applicants
                                    .filter(
                                      (applicant) =>
                                        applicant._id === scholarship.applicant
                                    )
                                    .map((applicanttt) => applicanttt.cnic)}
                                </p>

                                <p className="text-sm font-normal text-gray-800 pointer-events-none">
                                  STATUS:{" "}
                                  <span
                                    className={`text-white ${
                                      scholarship.status === "Approved"
                                        ? "bg-green-400"
                                        : scholarship.status === "Pending"
                                        ? "bg-gray-400"
                                        : "bg-red-400"
                                    } uppercase pointer-events-none`}
                                  >
                                    {scholarship.status}
                                  </span>
                                </p>
                              </div>
                            </div>
                          )
                        )
                      : " "}
                  </div>
                  {/* pop up section */}
                  {/* <!-- popup section  --> */}
                  {scholarshipPopUp && (
                    <ScholarshipPopUp
                      changeVisibility={changeScholarshipPopUp}
                      schoId={scholIdToPop}
                    />
                  )}
                  {/* End of pop up section */}
                  {/* pop up section */}
                  {/* <!-- popup section new scholarship --> */}
                  <div
                    className={`h-full w-full bg-white absolute top-0 left-0 ${newSchoPop}`}
                  >
                    <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                      <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="flex justify-center">
                          <div className="flex">
                            <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                              Scholarship Application
                            </h1>
                          </div>
                        </div>
                        {/* <!-- 1 row --> */}
                        <div className="grid grid-cols-1 mt-5 mx-7">
                          <label
                            className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                          >
                            Select Applicant From List
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
                            name="applicant"
                            required
                            value={formData.applicant}
                            onChange={(e) => onChangeFormData(e)}
                          >
                            <option defualt>Select</option>
                            {applicants.applicants !== null
                              ? applicants.applicants.applicants.map(
                                  (applicant) => (
                                    <option value={applicant._id}>
                                      {applicant.name}
                                    </option>
                                  )
                                )
                              : " "}
                          </select>
                        </div>
                        <div
                          className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                        >
                          <Link to="/applicantsSt">
                            <button
                              className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                              type="button"
                            >
                              Create New Applicant
                            </button>
                          </Link>
                        </div>
                        <hr className="mt-5 border" />
                        {/* <!-- 6row --> */}
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
                              Select Guardian/Parent From List
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
                              name="parent1"
                              required
                              value={formData.parent1}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              {parents.parents !== null
                                ? parents.parents.parents.map((parent) => (
                                    <option value={parent._id}>
                                      {" "}
                                      {parent.name}
                                    </option>
                                  ))
                                : " "}
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
                              Select Guardian/Parent From List
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
                              name="parent2"
                              required
                              value={formData.parent2}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              {parents.parents !== null
                                ? parents.parents.parents.map((parent) => (
                                    <option value={parent._id}>
                                      {" "}
                                      {parent.name}
                                    </option>
                                  ))
                                : " "}
                            </select>
                          </div>
                        </div>
                        {/* <!-- 7 row --> */}
                        <div
                          className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                        >
                          <Link to="/parentsSt">
                            <button
                              className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                              type="button"
                            >
                              Create New Parent/Guardian
                            </button>
                          </Link>
                        </div>
                        <hr className="mt-5 border" />
                        {/* <!-- bank account --> */}
                        <div className="grid grid-cols-1 mt-5 mx-7">
                          <label
                            className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                          >
                            Select Bank Account From List
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
                            name="bankAccount"
                            required
                            value={formData.bankAccount}
                            onChange={(e) => onChangeFormData(e)}
                          >
                            <option defualt>Select</option>
                            {banks.banks !== null
                              ? banks.banks.banks.map((bank) => (
                                  <option value={bank._id}>
                                    {" "}
                                    {bank.accNumber}
                                  </option>
                                ))
                              : " "}
                          </select>
                        </div>
                        <div
                          className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                        >
                          <Link to="/bankSt">
                            <button
                              className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                            >
                              Create New Bank Account
                            </button>
                          </Link>
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
                            placeholder="Required Fees"
                            name="requiredFees"
                            required
                            value={formData.requiredFees}
                            onChange={(e) => onChangeFormData(e)}
                          />
                        </div>
                        <hr className="mt-5 border" />
                        {/* select scholarship date */}
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
                              Scholarship Start Date
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
                              placeholder="start date"
                              name="scholarshipStartDate"
                              required
                              value={formData.scholarshipStartDate}
                              onChange={(e) => onChangeFormData(e)}
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
                              Scholarship End Date
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
                              placeholder="end date"
                              name="scholarshipEndDate"
                              required
                              value={formData.scholarshipEndDate}
                              onChange={(e) => onChangeFormData(e)}
                            />
                          </div>
                        </div>
                        <hr className="mt-5 border" />
                        {/* <!-- institution --> */}
                        <div className="grid grid-cols-1 mt-5 mx-7">
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
                            placeholder="institution/School Name"
                            name="institutionName"
                            required
                            value={formData.institutionName}
                            onChange={(e) => onChangeFormData(e)}
                          />
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
                            name="institutionType"
                            required
                            value={formData.institutionType}
                            onChange={(e) => onChangeFormData(e)}
                          >
                            <option defualt>Select</option>
                            {options.options !== null
                              ? options.options
                                  .filter(
                                    (opt) => opt.type === "Institution Type"
                                  )
                                  .map((opti) => (
                                    <option value={opti.name}>
                                      {opti.name}
                                    </option>
                                  ))
                              : ""}
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
                              name="level"
                              required
                              value={formData.level}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              {options.options !== null
                                ? options.options
                                    .filter(
                                      (opt) =>
                                        opt.type === "Grade,Level,Semester"
                                    )
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
                              name="pursuingEducation"
                              required
                              value={formData.pursuingEducation}
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              {options.options !== null
                                ? options.options
                                    .filter(
                                      (opt) => opt.type === "Pursuing Education"
                                    )
                                    .map((opti) => (
                                      <option value={opti.name}>
                                        {opti.name}
                                      </option>
                                    ))
                                : ""}
                            </select>
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
                              placeholder="Email"
                              name="institutionEmail"
                              required
                              value={formData.institutionEmail}
                              onChange={(e) => onChangeFormData(e)}
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
                              Institution/School Phone
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
                              mask="9999-9999999"
                              placeholder="9999-9999999"
                              name="institutionPhone"
                              required
                              value={formData.institutionPhone}
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
                              type="date"
                              placeholder="Joining date"
                              name="institutionJoinDate"
                              required
                              value={formData.institutionJoinDate}
                              onChange={(e) => onChangeFormData(e)}
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
                              placeholder="Adress"
                              name="institutionAddress"
                              required
                              value={formData.institutionAddress}
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
                    mb-1
                  "
                            >
                              ID CARD PHOTO
                            </label>
                            <div className="flex items-center justify-left w-full">
                              <FilePond
                                files={cardId}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="cardId"
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
                              ADMISSION RECEIPT COPY
                            </label>
                            <div className="flex items-center justify-left w-full">
                              <FilePond
                                files={adminReceipt}
                                allowMultiple={false}
                                allowFileEncode={true}
                                name="adminReceipt"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                className="w-full h-auto "
                                allowImagePreview={false}
                              >
                                {" "}
                              </FilePond>
                            </div>
                          </div>
                        </div>
                        {/* <div
                    className="
                flex
                items-center
                justify-self-end
                mx-7
                md:gap-8
                gap-4
                pt-5
                pb-5
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                type="button"
                    >
                      SAVE INFORMATION
                    </button>
                  </div> */}
                        <hr className="mt-5 border" />

                        {/* <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE REQUIRED FEES
                    </button>
                  </div> */}

                        {/* <!-- academic records -->  */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Which level/Grade/Semester you recently passed
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
                  name=""
                  required
                  value={formData.pursuingEducation}
                  onChange={(e) => onChangeFormData(e)}
                      >
                        <option>School</option>
                        <option>Pre-School</option>
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
                        % of Marks,GPA,GRADE
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
                        placeholder="Marks, GPA, Grade"
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
                        Date of exam
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
                        placeholder="Date of exam"
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
                        Date of result
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
                        placeholder="Date of result"
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
                        Results recived on:
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
                        placeholder="Results recived on"
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
                        Exam result sheet
                      </label>
                      <div className="flex items-center justify-left w-full">
                        <input type="file" className="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE QUALIFICATION
                    </button>
                  </div>
                     <hr className="mt-5 border" />  */}

                        {/* <!-- buttons --> */}
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
                            onClick={() => changeNewSchoPop()}
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
                            APPLY
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End of pop up section */}
                  {/* end of pop up section */}
                  {/* end of pop up section */}
                </div>
              )}
            </div>
          </div>
        </main>
        {/* start of images pop ups */}
        {/* <div
          className={`w-1/2 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${imageCnPop}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeImageCnPop()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/5 border ${imageStPop}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/graduate-member.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeImageStPop()}
              type="button"
            >
              X
            </button>
          </div>
        </div>

        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${imageIdPop}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeImageIdPop()}
              type="button"
            >
              X
            </button>
          </div>
        </div> */}
        {/* End of images pop ups */}
      </div>
    </Fragment>
  );
}

ScholarshipsST.propTypes = {
  updateScholarship: PropTypes.func.isRequired,
  newScholarship: PropTypes.func.isRequired,
  getScholarships: PropTypes.func.isRequired,
  getApplicants: PropTypes.func.isRequired,
  getParents: PropTypes.func.isRequired,
  getBanks: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  getOptions: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  scholarships: state.scholarships,
  applicants: state.aplicants,
  parents: state.parents,
  banks: state.banks,
  options: state.options,
});

export default connect(mapStateToProps, {
  updateScholarship,
  newScholarship,
  getScholarships,
  getApplicants,
  getParents,
  getBanks,
  setAlert,
  getOptions,
})(ScholarshipsST);
