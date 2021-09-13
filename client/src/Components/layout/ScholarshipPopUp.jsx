import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import InputMask from "react-input-mask";
import {
  getScholarships,
  updateScholarship,
  uploadReport,
} from "../../actions/scholarships";
import { getApplicants } from "../../actions/aplicants";
import { getParents } from "../../actions/parents";
import { getBanks } from "../../actions/banks";
import { connect } from "react-redux";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//filepond stuff
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function ScholarshipPopUp({
  changeVisibility,
  schoId,
  updateScholarship,
  getScholarships,
  scholarships,
  getApplicants,
  applicants,
  uploadReport,
  getParents,
  parents,
  getBanks,
  banks,
  setAlert,
}) {
  console.log("try here333");
  //handle images
  const [adminReceipt, setAdminReceipt] = useState();
  const [cardId, setCardId] = useState();
  const [reportImg, setReportImg] = useState();
  //---------------------------------
  //display image center of screen
  const [imgTop, setImgTop] = useState(0);
  //hide/unhide images boxes
  const [adminReceiptBox, setAdminReceiptBox] = useState("hidden");
  const [cardIdBox, setCardIdBox] = useState("hidden");
  //reverse the image
  const reverseImg = (img) => {
    return Buffer.from(img).toString("base64");
  };
  //take care of passed id
  const clickedScholarship =
    scholarships.scholarships !== null &&
    scholarships.scholarships.scholarships.find(
      (scholarship) => scholarship._id === schoId.id
    );
  console.log(clickedScholarship);
  //getElementPosition
  const getPosition = (buttonName) => {
    //const elem = buttonnn1.top + window.scrollY;
    setImgTop(window.scrollY + 100);
  };

  const [formData, setFormData] = useState({
    applicant: clickedScholarship !== null ? clickedScholarship.applicant : " ",
    parent1: clickedScholarship !== null ? clickedScholarship.parent1 : " ",
    parent2: clickedScholarship !== null ? clickedScholarship.parent2 : " ",
    institutionName:
      clickedScholarship !== null ? clickedScholarship.institutionName : " ",
    institutionType:
      clickedScholarship !== null ? clickedScholarship.institutionType : " ",
    level: clickedScholarship !== null ? clickedScholarship.level : " ",
    pursuingEducation:
      clickedScholarship !== null ? clickedScholarship.pursuingEducation : " ",
    institutionEmail:
      clickedScholarship !== null ? clickedScholarship.institutionEmail : " ",
    institutionPhone:
      clickedScholarship !== null ? clickedScholarship.institutionPhone : " ",
    institutionJoinDate:
      clickedScholarship !== null
        ? clickedScholarship.institutionJoinDate
        : " ",
    institutionAddress:
      clickedScholarship !== null ? clickedScholarship.institutionAddress : " ",
    requiredFees:
      clickedScholarship !== null ? clickedScholarship.requiredFees : " ",
    // reports: [
    //     {
    //         level: "3 grade",
    //         grades: "2.4",
    //         dateOfExam: "29-01-15",
    //         dateOfResult: "20-01-16",
    //         resultReceivedOn: "29-01-16"
    //     }
    // ],
    idCardImg:
      clickedScholarship !== null
        ? reverseImg(clickedScholarship.idCardImg)
        : " ",
    idCardImgType:
      clickedScholarship !== null ? clickedScholarship.idCardImgType : " ",
    admissionReceiptImg:
      clickedScholarship !== null
        ? reverseImg(clickedScholarship.admissionReceiptImg)
        : " ",
    admissionReceiptImgType:
      clickedScholarship !== null
        ? clickedScholarship.admissionReceiptImgType
        : " ",
    bankAccount:
      clickedScholarship !== null ? clickedScholarship.bankAccount : " ",
  });
  const [reportData, setReportData] = useState({
    level: " ",
    grades: " ",
    dateOfExam: " ",
    dateOfResult: " ",
    resultReceivedOn: " ",
  });
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
  const updateReportImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("reportImg");
    return data;
  };
  //--------------------
  //hide/unhide image boxes
  const changeIdCardBox = () => {
    getPosition("something");
    cardIdBox === "hidden" ? setCardIdBox(" ") : setCardIdBox("hidden");
  };
  const changeAdminReceiptBox = () => {
    getPosition("something");
    adminReceiptBox === "hidden"
      ? setAdminReceiptBox(" ")
      : setAdminReceiptBox("hidden");
  };
  //------------------------------------------------
  const displayIdCard = () => {
    if (
      clickedScholarship.idCardImg != null &&
      clickedScholarship.idCardImgType != null
    ) {
      return `data: ${
        clickedScholarship.idCardImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedScholarship.idCardImg
      ).toString("base64")}`;
    }
  };
  const displayAdminReceipt = () => {
    if (
      clickedScholarship.admissionReceiptImg != null &&
      clickedScholarship.admissionReceiptImgType != null
    ) {
      return `data: ${
        clickedScholarship.admissionReceiptImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedScholarship.admissionReceiptImg
      ).toString("base64")}`;
    }
  };
  //----------------------------------------------------
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeReportData = (e) =>
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  const onSubmitForm = async (e) => {
    e.preventDefault();
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
      requiredFees: formData.requiredFees,
      idCard:
        cardId.size === 0
          ? { data: formData.idCardImg, type: formData.idCardImgType }
          : cardId,
      admissionReceipt:
        adminReceipt.size === 0
          ? {
              data: formData.admissionReceiptImg,
              type: formData.admissionReceiptImgType,
            }
          : adminReceipt,
      bankAccount: formData.bankAccount,
    };
    updateScholarship(newInfo, schoId.id);
    getApplicants();
    getScholarships();
    changeVisibility();
    setAlert("Updating Scholarship, please wait", "success", 7000);
  };
  const onSubmitReport = async (e) => {
    e.preventDefault();
    const examData = await updateReportImg(e);
    const newInfo = {
      level: reportData.level,
      grades: reportData.grades,
      dateOfExam: reportData.dateOfExam,
      dateOfResult: reportData.dateOfResult,
      resultReceivedOn: reportData.resultReceivedOn,
      examImg: examData,
    };
    uploadReport(newInfo, schoId.id);
    getApplicants();
    getScholarships();
    changeVisibility();
    setAlert("Creating report, please wait", "success", 7000);
  };
  return (
    <div className={`h-full w-full bg-white absolute top-0 left-0 `}>
      <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
              {applicants.applicants !== null
                ? applicants.applicants.applicants
                    .filter(
                      (applicant) =>
                        applicant._id === clickedScholarship.applicant
                    )
                    .map((applicanttt) => applicanttt.name)
                : " "}
            </h1>
          </div>
        </div>
        <form onSubmit={(e) => onSubmitReport(e)}>
          {/* <!-- academic records --> */}
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
                name="level"
                required
                value={reportData.level}
                onChange={(e) => onChangeReportData(e)}
              >
                <option defualt>Select</option>
                <option value="Pre-School">Pre-School</option>
                <option value="School">School</option>
                <option value="High-School">High School</option>
                <option value="College">College</option>
                <option value="University">University</option>
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
                name="grades"
                required
                value={reportData.grades}
                onChange={(e) => onChangeReportData(e)}
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
                Date of exam
              </label>
              <input
                className=" py-2 px-3 rounded-lg border border-gray-300
                    mt-1 focus:outline-none focus:ring-1 focus:ring-gray-600
                    focus:border-transparent "
                type="date"
                name="dateOfExam"
                required
                value={reportData.dateOfExam}
                onChange={(e) => onChangeReportData(e)}
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
                type="date"
                name="dateOfResult"
                required
                value={reportData.dateOfResult}
                onChange={(e) => onChangeReportData(e)}
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
                name="resultReceivedOn"
                required
                value={reportData.resultReceivedOn}
                onChange={(e) => onChangeReportData(e)}
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
                <FilePond
                  files={reportImg}
                  allowMultiple={false}
                  allowFileEncode={true}
                  name="reportImg"
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
              type="submit"
            >
              UPDATE REPORT
            </button>
          </div>
          <hr className="mt-5 border" />
        </form>
        <form onSubmit={(e) => onSubmitForm(e)}>
          {/* <!-- Admin --> */}

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
                Application Status
              </label>
              <select
                className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        mb-5
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
              >
                <option>{clickedScholarship.status}</option>
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
                Notes for student
              </label>
              <textarea
                className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        h-32
                        focus:outline-none
                        focus:ring-gray-600
                        focus:border-transparent
                        mb-5
                      "
                type="text"
                value="Default notes from test."
              />
            </div>
          </div>
          <hr classNameName="mt-5 border" />
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
              Applicant
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
                ? applicants.applicants.applicants.map((applicant) => (
                    <option value={applicant._id}>{applicant.name}</option>
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
                Create Applicant
              </button>
            </Link>
          </div>
          {/* <input
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
              value="Abib Khan"
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
              value="1542748485745"
            />
          </div>
        </div>
        <!-- 2 row --> 
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
              value="15"
            />
          </div>
        </div>
         <!-- 3 row --> 
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
              value="+54-5689-896-896"
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
              value="5623894512"
            />
          </div>
        </div>

         <!-- 4 row -->
        <div className="grid grid-cols-1 mt-5 mx-7">
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
            value="test@test.com"
          />
        </div>

         <!-- 5 row --> 
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
                id="imageCn"
                type="button"
                className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                //   onClick={() => {
                //     changeImageCnPop();
                //   }}
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
                className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                //   onClick={() => changeImageStPop()}
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
            type="button"
          >
            UPDATE FILES
          </button>
        </div> */}
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
                name="parent1"
                required
                value={formData.parent1}
                onChange={(e) => onChangeFormData(e)}
              >
                <option defualt>Select</option>
                {parents.parents !== null
                  ? parents.parents.parents.map((parent) => (
                      <option value={parent._id}> {parent.name}</option>
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
                name="parent2"
                required
                value={formData.parent2}
                onChange={(e) => onChangeFormData(e)}
              >
                <option defualt>Select</option>
                {parents.parents !== null
                  ? parents.parents.parents.map((parent) => (
                      <option value={parent._id}> {parent.name}</option>
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
                Add Parent/Guardian
              </button>
            </Link>
          </div>
          <hr className="mt-5 border" />
          {/* <!-- 7 row --> */}
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
              <option value="Pre-School">Pre-School</option>
              <option value="School">School</option>
              <option value="High-School">High School</option>
              <option value="College">College</option>
              <option value="University">University</option>
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
                <option value="Pre-School">Pre-School</option>
                <option value="School">School</option>
                <option value="High-School">High School</option>
                <option value="College">College</option>
                <option value="University">University</option>
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
                <option value="Pre-School">Pre-School</option>
                <option value="School">School</option>
                <option value="High-School">High School</option>
                <option value="College">College</option>
                <option value="University">University</option>
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
                <button
                  id="pictureee1"
                  className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                  type="button"
                  onClick={() => changeIdCardBox()}
                >
                  Check Image
                </button>
              </div>
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
                <button
                  className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                  type="button"
                  onClick={() => changeAdminReceiptBox()}
                >
                  Check Image
                </button>
              </div>
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
          <hr className="mt-5 border" />
          {/* <!-- academic records -->
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
                value="2.4 GPA"
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
                Date of exam
              </label>
              <input
                className=" py-2 px-3 rounded-lg border border-gray-300
                    mt-1 focus:outline-none focus:ring-1 focus:ring-gray-600
                    focus:border-transparent "
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
                placeholder="29/10/2020"
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
                value="Results recived on information"
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
                <button
                  className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                  type="button"
                >
                  Donwload file
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
              type="button"
            >
              UPDATE QUALIFICATION
            </button>
          </div>
          <hr className="mt-5 border" /> */}
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
              name="bankAccount"
              required
              value={formData.bankAccount}
              onChange={(e) => onChangeFormData(e)}
            >
              <option defualt>Select</option>
              {banks.banks !== null
                ? banks.banks.banks.map((bank) => (
                    <option value={bank._id}> {bank.accNumber}</option>
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
                Create Bank Account
              </button>
            </Link>
          </div>

          {/* <!-- buttons --> */}
          <hr className="mt-5 border" />
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
              SAVE
            </button>
          </div>
        </form>
        {/* start of images pop ups */}
        <div
          className={`w-2/3 h-1/2 fixed bg-white centerHorizontal usm:h-1/3 border ${cardIdBox}`}
          style={{ top: imgTop }}
        >
          <div className="w-full h-full relative">
            <img
              src={clickedScholarship !== null ? displayIdCard() : " "}
              className="w-full h-full bg-cover"
              alt="cnic Back "
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeIdCardBox()}
              type="button"
            >
              X
            </button>
          </div>
        </div>

        <div
          className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${adminReceiptBox}`}
          style={{ top: imgTop }}
        >
          <div className="w-full h-full relative">
            <img
              src={clickedScholarship !== null ? displayAdminReceipt() : " "}
              className="w-full h-full bg-cover"
              alt="cnic front "
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeAdminReceiptBox()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        {/* End of images pop ups */}
      </div>
    </div>
  );
}

ScholarshipPopUp.propTypes = {
  changeVisibility: PropTypes.func.isRequired,
  schoId: PropTypes.object.isRequired,
  updateScholarship: PropTypes.func.isRequired,
  getScholarships: PropTypes.func.isRequired,
  getApplicants: PropTypes.func.isRequired,
  getParents: PropTypes.func.isRequired,
  getBanks: PropTypes.func.isRequired,
  uploadReport: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  scholarships: state.scholarships,
  applicants: state.aplicants,
  parents: state.parents,
  banks: state.banks,
});

export default connect(mapStateToProps, {
  updateScholarship,
  getScholarships,
  getApplicants,
  getParents,
  getBanks,
  uploadReport,
  setAlert,
})(ScholarshipPopUp);