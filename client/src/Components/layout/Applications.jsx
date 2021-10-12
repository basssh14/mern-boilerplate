import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";
import { setAlert } from "../../actions/alert";
import { getFullScho, updateScho } from "../../actions/fullScho";

function Applications({ getFullScho, fullScho, updateScho, setAlert }) {
  const [formData, setFormData] = useState({
    userId: "",
    scholarshipId: "",
    status: "",
    adminNotes: "",
    institutionName: "",
    intitutionType: "",
    level: "",
    pursuingEducation: "",
    intitutionEmail: "",
    intitutionPhone: "",
    intitutionJoinDate: "",
    scholarshipStartDate: "",
    scholarshipEndDate: "",
    intitutionAddress: "",
    idCardImg: "",
    idCardImgType: "",
    admissionReceiptImg: "",
    admissionReceiptImgType: "",
    requiredFees: "",
    name: "",
    gender: "",
    cnic: "",
    dateOfBirth: "",
    mobile: "",
    phone: "",
    email: "",
    cnicFrontImg: "",
    cnicFrontImgType: "",
    cnicBackImg: "",
    cnicBackImgType: "",
    studentImg: "",
    studentImgType: "",
    par1Type: "",
    par1Gender: "",
    par1Name: "",
    par1Cnic: "",
    par1Email: "",
    par1Mobile: "",
    par1Phone: "",
    par1CnicFrontImg: "",
    par1CnicFrontImgType: "",
    par1CnicBackImg: "",
    par1CnicBackImgType: "",
    par1SalarySlipImg: "",
    par1SalarySlipImgType: "",
    par1QualiDocImg: "",
    par1QualiDocImgType: "",
    par1UtilityOneImg: "",
    par1UtilityOneImgType: "",
    par1UtilitySecImg: "",
    par1UtilitySecImgType: "",
    par1FormBImg: "",
    par1FormBImgType: "",
    par2Type: "",
    par2Gender: "",
    par2Name: "",
    par2Cnic: "",
    par2Email: "",
    par2Mobile: "",
    par2Phone: "",
    par2CnicFrontImg: "",
    par2CnicFrontImgType: "",
    par2CnicBackImg: "",
    par2CnicBackImgType: "",
    par2SalarySlipImg: "",
    par2SalarySlipImgType: "",
    par2QualiDocImg: "",
    par2QualiDocImgType: "",
    par2UtilityOneImg: "",
    par2UtilityOneImgType: "",
    par2UtilitySecImg: "",
    par2UtilitySecImgType: "",
    par2FormBImg: "",
    par2FormBImgType: "",
    bank: "",
    branchName: "",
    accTitle: "",
    accNumber: "",
    accIban: "",
    checkImg: "",
    checkImgType: "",
  });

  const [appPop, setAppPop] = useState("hidden");
  const [cnPhoto, setCnPhoto] = useState("hidden");
  const [stPhoto, setStPhoto] = useState("hidden");
  const [prPhoto, setPrPhoto] = useState("hidden");
  const [idPhoto, setIdPhoto] = useState("hidden");
  const [bkPhoto, setBkPhoto] = useState("hidden");
  const [cnicFrontPhoto, setCnicFrontPhoto] = useState("hidden");
  const [cnicBackPhoto, setCnicBackPhoto] = useState("hidden");
  const [studentPhoto, setStudentPhoto] = useState("hidden");
  const [par1CnicFrontPhoto, setPar1CnicFrontPhoto] = useState("hidden");
  const [par1CnicBackPhoto, setPar1CnicBackPhoto] = useState("hidden");
  const [par1SalarySlipPhoto, setPar1SalarySlipPhoto] = useState("hidden");
  const [par1QualiDocPhoto, setPar1QualiDocPhoto] = useState("hidden");
  const [par1UtilityOnePhoto, setPar1UtilityOnePhoto] = useState("hidden");
  const [par1UtilitySecPhoto, setPar1UtilitySecPhoto] = useState("hidden");
  const [par1FormBPhoto, setPar1FormBPhoto] = useState("hidden");
  const [par2CnicFrontPhoto, setPar2CnicFrontPhoto] = useState("hidden");
  const [par2CnicBackPhoto, setPar2CnicBackPhoto] = useState("hidden");
  const [par2SalarySlipPhoto, setPar2SalarySlipPhoto] = useState("hidden");
  const [par2QualiDocPhoto, setPar2QualiDocPhoto] = useState("hidden");
  const [par2UtilityOnePhoto, setPar2UtilityOnePhoto] = useState("hidden");
  const [par2UtilitySecPhoto, setPar2UtilitySecPhoto] = useState("hidden");
  const [par2FormBPhoto, setPar2FormBPhoto] = useState("hidden");
  const [idCardPhoto, setIdCardPhoto] = useState("hidden");
  const [admissionReceiptCopyPhoto, setAdmissionReceiptCopyPhoto] =
    useState("hidden");
  const [copyCheqPhoto, setCopyCheqPhoto] = useState("hidden");
  //display image center of screen
  const [imgTop, setImgTop] = useState(0);
  //change the data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  const changeCnicFrontPhoto = () => {
    getPosition("something");
    cnicFrontPhoto === "hidden"
      ? setCnicFrontPhoto(" ")
      : setCnicFrontPhoto("hidden");
  };
  const changeCnicBackPhoto = () => {
    getPosition("something");
    cnicBackPhoto === "hidden"
      ? setCnicBackPhoto(" ")
      : setCnicBackPhoto("hidden");
  };
  const changeStudentPhoto = () => {
    getPosition("something");
    studentPhoto === "hidden"
      ? setStudentPhoto(" ")
      : setStudentPhoto("hidden");
  };
  const changePar1CnicFrontPhoto = () => {
    console.log("hola2222222");
    getPosition("something");
    par1CnicFrontPhoto === "hidden"
      ? setPar1CnicFrontPhoto(" ")
      : setPar1CnicFrontPhoto("hidden");
  };
  const changePar1CnicBackPhoto = () => {
    getPosition("something");
    par1CnicBackPhoto === "hidden"
      ? setPar1CnicBackPhoto(" ")
      : setPar1CnicBackPhoto("hidden");
  };
  const changePar1SalarySlipPhoto = () => {
    getPosition("something");
    par1SalarySlipPhoto === "hidden"
      ? setPar1SalarySlipPhoto(" ")
      : setPar1SalarySlipPhoto("hidden");
  };
  const changePar1QualiDocPhoto = () => {
    getPosition("something");
    par1QualiDocPhoto === "hidden"
      ? setPar1QualiDocPhoto(" ")
      : setPar1QualiDocPhoto("hidden");
  };
  const changePar1UtilityOnePhoto = () => {
    getPosition("something");
    par1UtilityOnePhoto === "hidden"
      ? setPar1UtilityOnePhoto(" ")
      : setPar1UtilityOnePhoto("hidden");
  };
  const changePar1UtilitySecPhoto = () => {
    getPosition("something");
    par1UtilitySecPhoto === "hidden"
      ? setPar1UtilitySecPhoto(" ")
      : setPar1UtilitySecPhoto("hidden");
  };
  const changePar1FormBPhoto = () => {
    getPosition("something");
    par1FormBPhoto === "hidden"
      ? setPar1FormBPhoto(" ")
      : setPar1FormBPhoto("hidden");
  };
  const changePar2CnicFrontPhoto = () => {
    getPosition("something");
    par2CnicFrontPhoto === "hidden"
      ? setPar2CnicFrontPhoto(" ")
      : setPar2CnicFrontPhoto("hidden");
  };
  const changePar2CnicBackPhoto = () => {
    getPosition("something");
    par2CnicBackPhoto === "hidden"
      ? setPar2CnicBackPhoto(" ")
      : setPar2CnicBackPhoto("hidden");
  };
  const changePar2SalarySlipPhoto = () => {
    getPosition("something");
    par2SalarySlipPhoto === "hidden"
      ? setPar2SalarySlipPhoto(" ")
      : setPar2SalarySlipPhoto("hidden");
  };
  const changePar2QualiDocPhoto = () => {
    getPosition("something");
    par2QualiDocPhoto === "hidden"
      ? setPar2QualiDocPhoto(" ")
      : setPar2QualiDocPhoto("hidden");
  };
  const changePar2UtilityOnePhoto = () => {
    getPosition("something");
    par2UtilityOnePhoto === "hidden"
      ? setPar2UtilityOnePhoto(" ")
      : setPar2UtilityOnePhoto("hidden");
  };
  const changePar2UtilitySecPhoto = () => {
    getPosition("something");
    par2UtilitySecPhoto === "hidden"
      ? setPar2UtilitySecPhoto(" ")
      : setPar2UtilitySecPhoto("hidden");
  };
  const changePar2FormBPhoto = () => {
    getPosition("something");
    par2FormBPhoto === "hidden"
      ? setPar2FormBPhoto(" ")
      : setPar2FormBPhoto("hidden");
  };
  const changeIdCardPhoto = () => {
    getPosition("something");
    idCardPhoto === "hidden" ? setIdCardPhoto(" ") : setIdCardPhoto("hidden");
  };
  const changeAdmissionReceiptCopyPhoto = () => {
    getPosition("something");
    admissionReceiptCopyPhoto === "hidden"
      ? setAdmissionReceiptCopyPhoto(" ")
      : setAdmissionReceiptCopyPhoto("hidden");
  };
  const changeCopyCheqPhoto = () => {
    getPosition("something");
    copyCheqPhoto === "hidden"
      ? setCopyCheqPhoto(" ")
      : setCopyCheqPhoto("hidden");
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
  const changeAppPop = () => {
    if (appPop === "hidden") {
      setAppPop(" ");
    } else {
      setAppPop("hidden");
    }
  };
  //handle images
  const displayCnicFront = () => {
    if (formData.cnicFrontImg != null && formData.cnicFrontImgType != null) {
      return `data: ${
        formData.cnicFrontImgType
      };charset=utf-8;base64,${Buffer.from(formData.cnicFrontImg).toString(
        "base64"
      )}`;
    }
  };
  const displayCnicBack = () => {
    if (formData.cnicBackImg != null && formData.cnicBackImgType != null) {
      return `data: ${
        formData.cnicBackImgType
      };charset=utf-8;base64,${Buffer.from(formData.cnicBackImg).toString(
        "base64"
      )}`;
    }
  };
  const displayStudentPhoto = () => {
    if (formData.studentImg != null && formData.studentImgType != null) {
      return `data: ${
        formData.studentImgType
      };charset=utf-8;base64,${Buffer.from(formData.studentImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1CnicFront = () => {
    if (
      formData.par1CnicFrontImg != null &&
      formData.par1CnicFrontImgType != null
    ) {
      return `data: ${
        formData.par1CnicFrontImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1CnicFrontImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1CnicBack = () => {
    if (
      formData.par1CnicBackImg != null &&
      formData.par1CnicBackImgType != null
    ) {
      return `data: ${
        formData.par1CnicBackImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1CnicBackImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1SalarySlip = () => {
    if (
      formData.par1SalarySlipImg != null &&
      formData.par1SalarySlipImgType != null
    ) {
      return `data: ${
        formData.par1SalarySlipImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1SalarySlipImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1QualiDoc = () => {
    if (
      formData.par1QualiDocImg != null &&
      formData.par1QualiDocImgType != null
    ) {
      return `data: ${
        formData.par1QualiDocImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1QualiDocImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1UtilityOne = () => {
    if (
      formData.par1UtilityOneImg != null &&
      formData.par1UtilityOneImgType != null
    ) {
      return `data: ${
        formData.par1UtilityOneImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1UtilityOneImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1UtilitySec = () => {
    if (
      formData.par1UtilitySecImg != null &&
      formData.par1UtilitySecImgType != null
    ) {
      return `data: ${
        formData.par1UtilitySecImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1UtilitySecImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar1FormB = () => {
    if (formData.par1FormBImg != null && formData.par1FormBImgType != null) {
      return `data: ${
        formData.par1FormBImgType
      };charset=utf-8;base64,${Buffer.from(formData.par1FormBImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2CnicFront = () => {
    if (
      formData.par2CnicFrontImg != null &&
      formData.par2CnicFrontImgType != null
    ) {
      return `data: ${
        formData.par2CnicFrontImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2CnicFrontImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2CnicBack = () => {
    if (
      formData.par2CnicBackImg != null &&
      formData.par2CnicBackImgType != null
    ) {
      return `data: ${
        formData.par2CnicBackImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2CnicBackImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2SalarySlip = () => {
    if (
      formData.par2SalarySlipImg != null &&
      formData.par2SalarySlipImgType != null
    ) {
      return `data: ${
        formData.par2SalarySlipImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2SalarySlipImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2QualiDoc = () => {
    if (
      formData.par2QualiDocImg != null &&
      formData.par2QualiDocImgType != null
    ) {
      return `data: ${
        formData.par2QualiDocImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2QualiDocImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2UtilityOne = () => {
    if (
      formData.par2UtilityOneImg != null &&
      formData.par2UtilityOneImgType != null
    ) {
      return `data: ${
        formData.par2UtilityOneImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2UtilityOneImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2UtilitySec = () => {
    if (
      formData.par2UtilitySecImg != null &&
      formData.par2UtilitySecImgType != null
    ) {
      return `data: ${
        formData.par2UtilitySecImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2UtilitySecImg).toString(
        "base64"
      )}`;
    }
  };
  const displayPar2FormB = () => {
    if (formData.par2FormBImg != null && formData.par2FormBImgType != null) {
      return `data: ${
        formData.par2FormBImgType
      };charset=utf-8;base64,${Buffer.from(formData.par2FormBImg).toString(
        "base64"
      )}`;
    }
  };
  const displayIdCard = () => {
    if (formData.idCardImg != null && formData.idCardImgType != null) {
      return `data: ${
        formData.idCardImgType
      };charset=utf-8;base64,${Buffer.from(formData.idCardImg).toString(
        "base64"
      )}`;
    }
  };
  const displayAdmissionReceipt = () => {
    if (
      formData.admissionReceiptImg != null &&
      formData.admissionReceiptImgType != null
    ) {
      return `data: ${
        formData.admissionReceiptImgType
      };charset=utf-8;base64,${Buffer.from(
        formData.admissionReceiptImg
      ).toString("base64")}`;
    }
  };
  const displayCheck = () => {
    if (formData.checkImg != null && formData.checkImgType != null) {
      return `data: ${formData.checkImgType};charset=utf-8;base64,${Buffer.from(
        formData.checkImg
      ).toString("base64")}`;
    }
  };
  const setUpFormData = (form) => {
    console.log(form);
    setFormData({
      userId: form.userId,
      scholarshipId: form.scholarshipId,
      status: form.status,
      adminNotes: form.adminNotes,
      institutionName: form.institutionName,
      intitutionType: form.intitutionType,
      level: form.level,
      pursuingEducation: form.pursuingEducation,
      intitutionEmail: form.intitutionEmail,
      intitutionPhone: form.intitutionPhone,
      intitutionJoinDate: form.intitutionJoinDate,
      scholarshipStartDate: form.scholarshipStartDate,
      scholarshipEndDate: form.scholarshipEndDate,
      intitutionAddress: form.intitutionAddress,
      idCardImg: form.idCardImg,
      idCardImgType: form.idCardImgType,
      admissionReceiptImg: form.admissionReceiptImg,
      admissionReceiptImgType: form.admissionReceiptImgType,
      requiredFees: form.requiredFees,
      name: form.name,
      gender: form.gender,
      cnic: form.cnic,
      dateOfBirth: form.dateOfBirth,
      mobile: form.mobile,
      phone: form.phone,
      email: form.email,
      cnicFrontImg: form.cnicFrontImg,
      cnicFrontImgType: form.cnicFrontImgType,
      cnicBackImg: form.cnicBackImg,
      cnicBackImgType: form.cnicBackImgType,
      studentImg: form.studentImg,
      studentImgType: form.studentImgType,
      par1Type: form.par1Type,
      par1Gender: form.par1Gender,
      par1Name: form.par1Name,
      par1Cnic: form.par1Cnic,
      par1Email: form.par1Email,
      par1Mobile: form.par1Mobile,
      par1Phone: form.par1Phone,
      par1CnicFrontImg: form.par1CnicFrontImg,
      par1CnicFrontImgType: form.par1CnicFrontImgType,
      par1CnicBackImg: form.par1CnicBackImg,
      par1CnicBackImgType: form.par1CnicBackImgType,
      par1SalarySlipImg: form.par1SalarySlipImg,
      par1SalarySlipImgType: form.par1SalarySlipImgType,
      par1QualiDocImg: form.par1QualiDocImg,
      par1QualiDocImgType: form.par1QualiDocImgType,
      par1UtilityOneImg: form.par1UtilityOneImg,
      par1UtilityOneImgType: form.par1UtilityOneImgType,
      par1UtilitySecImg: form.par1UtilitySecImg,
      par1UtilitySecImgType: form.par1UtilitySecImgType,
      par1FormBImg: form.par1FormBImg,
      par1FormBImgType: form.par1FormBImgType,
      par2Type: form.par2Type,
      par2Gender: form.par2Gender,
      par2Name: form.par2Name,
      par2Cnic: form.par2Cnic,
      par2Email: form.par2Email,
      par2Mobile: form.par2Mobile,
      par2Phone: form.par2Phone,
      par2CnicFrontImg: form.par2CnicFrontImg,
      par2CnicFrontImgType: form.par2CnicFrontImgType,
      par2CnicBackImg: form.par2CnicBackImg,
      par2CnicBackImgType: form.par2CnicBackImgType,
      par2SalarySlipImg: form.par2SalarySlipImg,
      par2SalarySlipImgType: form.par2SalarySlipImgType,
      par2QualiDocImg: form.par2QualiDocImg,
      par2QualiDocImgType: form.par2QualiDocImgType,
      par2UtilityOneImg: form.par2UtilityOneImg,
      par2UtilityOneImgType: form.par2UtilityOneImgType,
      par2UtilitySecImg: form.par2UtilitySecImg,
      par2UtilitySecImgType: form.par2UtilitySecImgType,
      par2FormBImg: form.par2FormBImg,
      par2FormBImgType: form.par2FormBImgType,
      bank: form.bank,
      branchName: form.branchName,
      accTitle: form.accTitle,
      accNumber: form.accNumber,
      accIban: form.accIban,
      checkImg: form.checkImg,
      checkImgType: form.checkImgType,
    });
    //console.log(formData);
    changeAppPop();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      status: formData.status,
      notes: formData.adminNotes,
      userId: formData.userId,
      schoId: formData.scholarshipId,
    };
    updateScho(data);
    changeAppPop();
    setAlert(
      "Updating Scholarship, Please Wait for update confirmation",
      "success",
      50000
    );
  };
  useEffect(() => {
    getFullScho();
  }, []);
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
                    <option>New</option>
                    <option>Approved</option>
                    <option>Denied</option>
                    <option>Pending</option>
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
                        <th className="px-4 py-3">Cnic</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Applicantion</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {fullScho.fullScho !== null ? (
                        fullScho.fullScho.map((scho) => (
                          <tr className="text-gray-700">
                            <td className="px-4 py-3 text-sm border">
                              {scho.cnic}
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
                                    {scho.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td
                              className="px-4 py-3 text-ms font-semibold border cursor-pointer"
                              onClick={() => setUpFormData(scho)}
                            >
                              Application
                            </td>
                            <td
                              className={`px-4 py-3 border text-md font-semibold ${
                                scho.status === "Approved"
                                  ? "bg-green-400"
                                  : scho.status === "Pending"
                                  ? "bg-gray-400"
                                  : "bg-red-400"
                              }`}
                            >
                              {scho.status}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <Spinner />
                      )}
                    </tbody>
                  </table>
                </div>
                {/* start of student info pop up */}
                <div
                  class={`h-full w-full bg-white absolute top-0 left-0 ${appPop}`}
                >
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div
                      class="
                w-full
                h-full
                centerSom
                bg-white
                lg1:bg-transparent
                usm:w-full
              "
                    >
                      <div class="grid h-auto bg-white rounded-lg shadow-xl w-full">
                        <div class="flex justify-center">
                          <div class="flex">
                            <h1 class="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                              {formData.name}
                            </h1>
                          </div>
                        </div>
                        {/* <!-- 1 row --> */}
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Name
                            </label>
                            <input
                              class="
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
                              value={formData.name}
                              placeholder="Sufyan Khan"
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              CNIC
                            </label>
                            <input
                              class="
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
                              value={formData.cnic}
                            />
                          </div>
                        </div>
                        {/* <!-- 2 row --> */}
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Gender
                            </label>
                            <select
                              class="
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
                              <option value={formData.gender}>
                                {formData.gender}
                              </option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Birth Date
                            </label>
                            <input
                              class="
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
                              value={formData.dateOfBirth}
                            />
                          </div>
                        </div>
                        {/* <!-- 3 row --> */}
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Mobile
                            </label>
                            <input
                              class="
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
                              value={formData.mobile}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Phone
                            </label>
                            <input
                              class="
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
                              value={formData.phone}
                            />
                          </div>
                        </div>

                        {/* <!-- 4 row --> */}
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Email
                          </label>
                          <input
                            class="
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
                            value={formData.email}
                          />
                        </div>

                        {/* <!-- 5 row --> */}
                        <div
                          class="
                    grid grid-cols-3
                    md:grid-cols-3
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                            >
                              CNIC front
                            </label>
                            <div className="flex items-center justify-left w-full">
                              <button
                                id="imageCn"
                                className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                                onClick={() => {
                                  changeCnicFrontPhoto();
                                }}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changeCnicBackPhoto()}
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
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
                                  changeStudentPhoto();
                                }}
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr class="mt-5 border" />
                        {/* <!-- 6row --> */}
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Guardian/Parent
                            </label>
                            <select
                              class="
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
                            </select>
                          </div>
                        </div>
                        <div class="grid grid-cols-1 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Type
                          </label>
                          <select
                            class="
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
                            <option value={formData.par1Type}>
                              {formData.par1Type}
                            </option>
                          </select>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Gender
                            </label>
                            <select
                              class="
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
                              <option value={formData.par1Gender}>
                                {formData.par1Gender}
                              </option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Name
                            </label>
                            <input
                              class="
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
                              value={formData.par1Name}
                            />
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              CNIC
                            </label>
                            <input
                              class="
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
                              value={formData.par1Cnic}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Email
                            </label>
                            <input
                              class="
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
                              value={formData.par1Email}
                            />
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Mobile
                            </label>
                            <input
                              class="
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
                              value={formData.par1Mobile}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Phone
                            </label>
                            <input
                              class="
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
                              value={formData.par1Phone}
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
                              Cnic Front
                            </label>
                            <div className="flex items-center justify-left w-full">
                              <button
                                className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                                type="button"
                                onClick={() => changePar1CnicFrontPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1CnicBackPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1SalarySlipPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1QualiDocPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1UtilityOnePhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1UtilitySecPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar1FormBPhoto()}
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr class="mt-5 border" />
                        {/* parent 2 */}
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Guardian/Parent
                            </label>
                            <select
                              class="
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
                              <option>Parent2</option>
                            </select>
                          </div>
                        </div>
                        <div class="grid grid-cols-1 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Type
                          </label>
                          <select
                            class="
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
                            <option value={formData.par2Type}>
                              {formData.par2Type}
                            </option>
                          </select>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Gender
                            </label>
                            <select
                              class="
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
                              <option value={formData.par2Gender}>
                                {formData.par2Gender}
                              </option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Name
                            </label>
                            <input
                              class="
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
                              value={formData.par2Name}
                            />
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              CNIC
                            </label>
                            <input
                              class="
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
                              value={formData.par2Cnic}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Email
                            </label>
                            <input
                              class="
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
                              value={formData.par2Email}
                            />
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Mobile
                            </label>
                            <input
                              class="
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
                              value={formData.par2Mobile}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Phone
                            </label>
                            <input
                              class="
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
                              value={formData.par2Phone}
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
                              Cnic Front
                            </label>
                            <div className="flex items-center justify-left w-full">
                              <button
                                className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                                type="button"
                                onClick={() => changePar2CnicFrontPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2CnicBackPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2SalarySlipPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2QualiDocPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2UtilityOnePhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2UtilitySecPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() => changePar2FormBPhoto()}
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr class="mt-5 border" />
                        {/* <!-- institution -->
              <!-- institution --> */}
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            institution/School Name
                          </label>
                          <input
                            class="
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
                            value={formData.institutionName}
                          />
                        </div>
                        <div class="grid grid-cols-1 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Institution Type
                          </label>
                          <select
                            class="
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
                            <option value={formData.intitutionType}>
                              {formData.intitutionType}
                            </option>
                          </select>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Which level/Grade/Semester are you in?
                            </label>
                            <select
                              class="
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
                              <option value={formData.level}>
                                {formData.level}
                              </option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Education you are pursuing
                            </label>
                            <select
                              class="
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
                              <option value={formData.pursuingEducation}>
                                {formData.pursuingEducation}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Institution/School Email
                            </label>
                            <input
                              class="
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
                              value={formData.intitutionEmail}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Institution/School Phone
                            </label>
                            <input
                              class="
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
                              value={formData.intitutionPhone}
                            />
                          </div>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Institution/School Joining Date
                            </label>
                            <input
                              class="
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
                              value={formData.intitutionJoinDate}
                            />
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Institution/School Address
                            </label>
                            <input
                              class="
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
                              value={formData.intitutionAddress}
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
                                onClick={() => changeIdCardPhoto()}
                              >
                                Check Image
                              </button>
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
                                onClick={() =>
                                  changeAdmissionReceiptCopyPhoto()
                                }
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                        </div>

                        <hr class="mt-5 border" />
                        {/* <!-- FEES --> */}
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Required Fees
                          </label>
                          <input
                            class="
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
                            value={formData.requiredFees}
                          />
                        </div>
                        <hr class="mt-5 border" />
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
                            />
                          </div>
                        </div>
                        <hr className="mt-5 border" />
                        {/* <!-- bank account --> */}
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Bank Account
                          </label>
                          <select
                            class="
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
                            <option value={formData.accNumber}>
                              {formData.accNumber}
                            </option>
                          </select>
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Bank
                            </label>
                            <select
                              class="
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
                              <option value={formData.bank}>
                                {formData.bank}
                              </option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Branch Name
                            </label>
                            <input
                              class="
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
                              value={formData.branchName}
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account Title
                          </label>
                          <input
                            class="
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
                            value={formData.accTitle}
                          />
                        </div>
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account Number
                          </label>
                          <input
                            class="
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
                            value={formData.accNumber}
                          />
                        </div>
                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label
                            class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                    "
                          >
                            Account IBAN
                          </label>
                          <input
                            class="
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
                            value={formData.accIban}
                          />
                        </div>
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
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
                                onClick={() => changeCopyCheqPhoto()}
                              >
                                Check Image
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Admin --> */}
                        <hr class="mt-5 border" />
                        <div
                          class="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                        >
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Application Status
                            </label>
                            <select
                              class="
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
                              name="status"
                              onChange={(e) => onChange(e)}
                              value={formData.status}
                            >
                              <option value="Approved">Approved</option>
                              <option value="Denied">Denied</option>
                              <option value="Pending">Pending</option>
                            </select>
                          </div>
                          <div class="grid grid-cols-1">
                            <label
                              class="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                            >
                              Notes for student
                            </label>
                            <input
                              class="
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
                              name="adminNotes"
                              value={formData.adminNotes}
                              onChange={(e) => onChange(e)}
                              placeholder="This are notes for the student so he/she can impprove their application"
                            />
                          </div>
                        </div>
                        {/* <!-- buttons --> */}
                        <hr class="mt-5 border" />
                        <div
                          class="
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
                            class="
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
                            onClick={(e) => changeAppPop(e)}
                          >
                            Cancel
                          </button>
                          <button
                            class="
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
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end of student info pop up */}
              </div>
            </div>
          </div>
        </main>
        {/* start of images pop ups */}
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white fixed centerHorizontal usm:h-1/3 border ${cnicFrontPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayCnicFront() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeCnicFrontPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white fixed centerHorizontal usm:h-1/3 border ${cnicBackPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayCnicBack() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeCnicBackPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white fixed centerHorizontal usm:h-1/3 border ${studentPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayStudentPhoto() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeStudentPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1CnicFrontPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1CnicFront() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1CnicFrontPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1CnicBackPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1CnicBack() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1CnicBackPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1SalarySlipPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1SalarySlip() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1SalarySlipPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1QualiDocPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1QualiDoc() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1QualiDocPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1UtilityOnePhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1UtilityOne() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1UtilityOnePhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1UtilitySecPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1UtilitySec() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1UtilitySecPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par1FormBPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar1FormB() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar1FormBPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2CnicFrontPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2CnicFront() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2CnicFrontPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2CnicBackPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2CnicBack() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2CnicBackPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2SalarySlipPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2SalarySlip() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2SalarySlipPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2QualiDocPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2QualiDoc() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2QualiDocPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2UtilityOnePhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2UtilityOne() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2UtilityOnePhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2UtilitySecPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2UtilitySec() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2UtilitySecPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${par2FormBPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayPar2FormB() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changePar2FormBPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${idCardPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayIdCard() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeIdCardPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${admissionReceiptCopyPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayAdmissionReceipt() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeAdmissionReceiptCopyPhoto()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-2/5 h-2/5 bg-white absolute centerHorizontal usm:h-1/3 border ${copyCheqPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src={formData !== null ? displayCheck() : " "}
              className="w-full h-full bg-cover"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeCopyCheqPhoto()}
              type="button"
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

Applications.propTypes = {
  getFullScho: PropTypes.func.isRequired,
  updateScho: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  fullScho: state.fullScho,
});

export default connect(mapStateToProps, { getFullScho, updateScho, setAlert })(
  Applications
);
