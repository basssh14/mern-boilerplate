import React, { Fragment, useState, useEffect, Profiler } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import axios from "axios";
import { newParent, updateParent, getParents } from "../../actions/parents";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { uploadCnic, uploadQuali, uploadSalary } from "../../actions/parents";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//filepond
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function ParentPopUp({
  updateParent,
  getParents,
  parents,
  changeVisibility,
  parentId,
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
  const [utilityOne, setUtilityOne] = useState();
  const [utilitySec, setUtilitySec] = useState();
  const [formB, setFormB] = useState();
  //display image center of screen
  const [imgTop, setImgTop] = useState(0);
  //take care of the data
  const [userParents, setUserParents] = useState([]);
  const [startParent, setStartParent] = useState();
  const [cnicPhoto, setCnicCopy] = useState("");
  const [salaryPhoto, setSalaryPhoto] = useState("");
  const [qualiPhoto, setQualiPhoto] = useState("");
  const onChangeCnic = (e) => setCnicCopy(e.target.files[0]);
  const onChangeSalary = (e) => setSalaryPhoto(e.target.files[0]);
  const onChangeQuali = (e) => setQualiPhoto(e.target.files[0]);
  //console.log(parentId);
  const clickedParent =
    parents.parents !== null &&
    parents.parents.parents.find((parent) => parent._id === parentId.id);
  //parents.parents.parents.map((parent) => console.log(parent._id + "=" + parentId.id));
  //console.log(clickedParent);
  const reverseImg = (img) => {
    return Buffer.from(img).toString("base64");
  };
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  const [formData, setFormData] = useState({
    type: clickedParent !== null ? clickedParent.type : " ",
    gender: clickedParent !== null ? clickedParent.gender : " ",
    name: clickedParent !== null ? clickedParent.name : " ",
    cnic: clickedParent !== null ? clickedParent.cnic : " ",
    email: clickedParent !== null ? clickedParent.email : " ",
    mobile: clickedParent !== null ? clickedParent.mobile : " ",
    phone: clickedParent !== null ? clickedParent.phone : " ",
    cnicFrontImg:
      clickedParent !== null ? reverseImg(clickedParent.cnicFrontImg) : " ",
    cnicFrontImgType:
      clickedParent !== null ? clickedParent.cnicFrontImgType : " ",
    cnicBackImg:
      clickedParent !== null ? reverseImg(clickedParent.cnicBackImg) : " ",
    cnicBackImgType:
      clickedParent !== null ? clickedParent.cnicBackImgType : " ",
    salarySlipImg:
      clickedParent !== null ? reverseImg(clickedParent.salarySlipImg) : " ",
    salarySlipImgType:
      clickedParent !== null ? clickedParent.salarySlipImgType : " ",
    qualiDocImg:
      clickedParent !== null ? reverseImg(clickedParent.qualiDocImg) : " ",
    qualiDocImgType:
      clickedParent !== null ? clickedParent.qualiDocImgType : " ",
    utilityOneImg:
      clickedParent !== null ? reverseImg(clickedParent.utilityOneImg) : " ",
    utilityOneImgType:
      clickedParent !== null ? clickedParent.utilityOneImgType : " ",
    utilitySecImg:
      clickedParent !== null ? reverseImg(clickedParent.utilitySecImg) : " ",
    utilitySecImgType:
      clickedParent !== null ? clickedParent.utilitySecImgType : " ",
      formBImg:
      clickedParent !== null ? reverseImg(clickedParent.formBImg) : " ",
    formBImgType:
      clickedParent !== null ? clickedParent.formBImgType : " ",
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
  const updateUtilityOne = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("utilityOne");
    return data;
  };
  const updateUtilitySec = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("utilitySec");
    return data;
  };
  const updateFormB = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("formB");
    return data;
  };
  const displayCnicFront = () => {
    if (
      clickedParent.cnicFrontImg != null &&
      clickedParent.cnicFrontImgType != null
    ) {
      return `data: ${
        clickedParent.cnicFrontImgType
      };charset=utf-8;base64,${Buffer.from(clickedParent.cnicFrontImg).toString(
        "base64"
      )}`;
    }
  };
  const displayCnicBack = () => {
    if (
      clickedParent.cnicBackImg != null &&
      clickedParent.cnicBackImgType != null
    ) {
      return `data: ${
        clickedParent.cnicBackImgType
      };charset=utf-8;base64,${Buffer.from(clickedParent.cnicBackImg).toString(
        "base64"
      )}`;
    }
  };
  const displaySalarySlip = () => {
    if (
      clickedParent.salarySlipImg != null &&
      clickedParent.salarySlipImgType != null
    ) {
      return `data: ${
        clickedParent.salarySlipImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedParent.salarySlipImg
      ).toString("base64")}`;
    }
  };
  const displayQualiDoc = () => {
    if (
      clickedParent.qualiDocImg != null &&
      clickedParent.qualiDocImgType != null
    ) {
      return `data: ${
        clickedParent.qualiDocImgType
      };charset=utf-8;base64,${Buffer.from(clickedParent.qualiDocImg).toString(
        "base64"
      )}`;
    }
  };
  const displayUtilityOne = () => {
    if (
      clickedParent.utilityOneImg != null &&
      clickedParent.utilityOneImgType != null
    ) {
      return `data: ${
        clickedParent.utilityOneImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedParent.utilityOneImg
      ).toString("base64")}`;
    }
  };
  const displayUtilitySec = () => {
    if (
      clickedParent.utilitySecImg != null &&
      clickedParent.utilitySecImgType != null
    ) {
      return `data: ${
        clickedParent.utilitySecImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedParent.utilitySecImg
      ).toString("base64")}`;
    }
  };
  const displayFormB = () => {
    if (
      clickedParent.formBImg != null &&
      clickedParent.formBImgType != null
    ) {
      return `data: ${
        clickedParent.formBImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedParent.formBImg
      ).toString("base64")}`;
    }
  };
  //-----------------------------------------------
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  //0000000000000000000000000000000000000000000000000000000000000000000000000000
  //take care of the dinamic
  // const [parentPop, setParentPop] = useState("hidden");
  // const [newParentPop, setNewParentPop] = useState("hidden");
  const [imagePopCnic, setImagePopCnic] = useState("hidden");
  const [imagePopSalary, setImagePopSalary] = useState("hidden");
  const [imagePopQuali, setImagePopQuali] = useState("hidden");
  const [imagePopCnicBack, setImagePopCnicBack] = useState("hidden");
  const [imageUtilityOne, setImageUtilityOne] = useState("hidden");
  const [imageUtilitySec, setImageUtilitySec] = useState("hidden");
  const [imageFormB, setImageFormB] = useState("hidden");
  const changeImagePopCnic = () => {
    getPosition("something");
    if (imagePopCnic === "hidden") {
      setImagePopCnic(" ");
    } else {
      setImagePopCnic("hidden");
    }
  };
  const changeImagePopCnicBack = () => {
    getPosition("something");
    imagePopCnicBack === "hidden"
      ? setImagePopCnicBack(" ")
      : setImagePopCnicBack("hidden");
  };
  const changeImagePopSalary = () => {
    getPosition("something");
    if (imagePopSalary === "hidden") {
      setImagePopSalary(" ");
    } else {
      setImagePopSalary("hidden");
    }
  };
  const changeImagePopQuali = () => {
    getPosition("something");
    if (imagePopQuali === "hidden") {
      setImagePopQuali(" ");
    } else {
      setImagePopQuali("hidden");
    }
  };
  const changeImageUtilityOne = () => {
    getPosition("something");
    if (imageUtilityOne === "hidden") {
      setImageUtilityOne(" ");
    } else {
      setImageUtilityOne("hidden");
    }
  };
  const changeImageUtilitySec = () => {
    getPosition("something");
    if (imageUtilitySec === "hidden") {
      setImageUtilitySec(" ");
    } else {
      setImageUtilitySec("hidden");
    }
  };
  const changeImageFormB = () => {
    getPosition("something");
    if (imageFormB === "hidden") {
      setImageFormB(" ");
    } else {
      setImageFormB("hidden");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const cnicFrontData = await updateCnicFrontImg(e);
    const cnicBackData = await updateCnicBackImg(e);
    const salarySlipData = await updateSalarySlip(e);
    const qualiDocData = await updateQualiDoc(e);
    const utilityOneData = await updateUtilityOne(e);
    const utilitySecData = await updateUtilitySec(e);
    const formBData = await updateFormB(e);
    const newInfo = {
      type: formData.type,
      gender: formData.gender,
      name: formData.name,
      cnic: formData.cnic,
      email: formData.email,
      mobile: formData.mobile,
      phone: formData.phone,
      cnicFront:
        cnicFrontData.size === 0
          ? { data: formData.cnicFrontImg, type: formData.cnicFrontImgType }
          : cnicFrontData,
      cnicBack:
        cnicBackData.size === 0
          ? { data: formData.cnicBackImg, type: formData.cnicBackImgType }
          : cnicBackData,
      salarySlip:
        salarySlipData.size === 0
          ? { data: formData.salarySlipImg, type: formData.salarySlipImgType }
          : salarySlipData,
      qualiDoc:
        qualiDocData.size === 0
          ? { data: formData.qualiDocImg, type: formData.qualiDocImgType }
          : qualiDocData,
      utilityOne:
        utilityOneData.size === 0
          ? { data: formData.utilityOneImg, type: formData.utilityOneImgType }
          : utilityOneData,
      utilitySec:
        utilitySecData.size === 0
          ? { data: formData.utilitySecImg, type: formData.utilitySecImgType }
          : utilitySecData,
          formB:
          formBData.size === 0
            ? { data: formData.formBImg, type: formData.formBImgType }
            : formBData,
    };
    updateParent(newInfo, parentId.id);
    getParents();
    changeVisibility();
    setAlert("Updating Parent, Please Wait", "success", 20000);
  };
  //000000000000000000000000000000000000000000000000000000000000000000000000000000000
  // useEffect(() => {
  //   getParents();
  //   reloadDataforForm();
  // }, [clickedParent]);
  return (
    <Fragment>
      {/* start of new parent pop up */}
      <div className={`h-full w-full bg-white absolute top-0 left-0`}>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                  {startParent !== undefined ? startParent.name : " "}
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
              ></label>
              <select
                value={formData.type}
                name="type"
                onChange={(e) => onChange(e)}
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
                <option defualt>Select</option>
                <option value="parent">Parent</option>
                <option value="guardian">Guardian</option>
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
                  name="gender"
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
                  value={formData.gender}
                  onChange={(e) => onChange(e)}
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
                  name="name"
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
                  value={formData.name}
                  onChange={(e) => onChange(e)}
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
                <InputMask
                  name="cnic"
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
                  mask="99999-9999999-9"
                  placeholder="99999-9999999-9"
                  value={formData.cnic}
                  onChange={(e) => onChange(e)}
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
                  name="email"
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
                  value={formData.email}
                  onChange={(e) => onChange(e)}
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
                <InputMask
                  name="mobile"
                  required
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
                  value={formData.mobile}
                  onChange={(e) => onChange(e)}
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
                  name="phone"
                  required
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
                  value={formData.phone}
                  onChange={(e) => onChange(e)}
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
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImagePopCnic()}
                  >
                    Check Image
                  </button>
                </div>
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
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImagePopCnicBack()}
                  >
                    Check Image
                  </button>
                </div>
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
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImagePopSalary()}
                  >
                    Check Image
                  </button>
                </div>
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
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImagePopQuali()}
                  >
                    Check Image
                  </button>
                </div>
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
                  Utility Bill 1
                </label>
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImageUtilityOne()}
                  >
                    Check Image
                  </button>
                </div>
                <div className="flex items-center justify-left w-full -ml-2">
                  <FilePond
                    files={utilityOne}
                    allowMultiple={false}
                    allowFileEncode={true}
                    name="utilityOne"
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
                  Utility Bill 2
                </label>
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImageUtilitySec()}
                  >
                    Check Image
                  </button>
                </div>
                <div className="flex items-center justify-left w-full -ml-2">
                  <FilePond
                    files={utilitySec}
                    allowMultiple={false}
                    allowFileEncode={true}
                    name="utilitySec"
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
                 Form-B/FRC 
                </label>
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImageFormB()}
                  >
                    Check Image
                  </button>
                </div>
                <div className="flex items-center justify-left w-full -ml-2">
                  <FilePond
                    files={formB}
                    allowMultiple={false}
                    allowFileEncode={true}
                    name="formB"
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
                Add
              </button>
            </div>
          </div>
          {/* end of parent information */}
          {/* handle images */}
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imagePopCnic}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayCnicFront() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImagePopCnic()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imagePopCnicBack}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayCnicBack() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImagePopCnicBack()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imagePopSalary}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displaySalarySlip() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImagePopSalary()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imagePopQuali}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayQualiDoc() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImagePopQuali()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imageUtilityOne}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayUtilityOne() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImageUtilityOne()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imageUtilitySec}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayUtilitySec() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImageUtilitySec()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${imageFormB}`}
          >
            <div className="w-full h-full relative">
              <img
                src={clickedParent !== null ? displayFormB() : " "}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                onClick={() => changeImageFormB()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          {/* end of images */}
        </form>
      </div>
    </Fragment>
  );
}

ParentPopUp.propTypes = {
  newParent: PropTypes.func.isRequired,
  updateParent: PropTypes.func.isRequired,
  getParents: PropTypes.func.isRequired,
  changeVisibility: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
  uploadSalary: PropTypes.func.isRequired,
  uploadQuali: PropTypes.func.isRequired,
  uploadCnic: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  parents: state.parents,
});

export default connect(mapStateToProps, {
  newParent,
  setAlert,
  updateParent,
  getParents,
  uploadCnic,
  uploadQuali,
  uploadSalary,
})(ParentPopUp);
