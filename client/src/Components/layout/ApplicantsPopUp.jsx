import React, { useState } from "react";
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
import { getApplicants, updateApplicant } from "../../actions/aplicants";
//filepond
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function ApplicantsPopUp({
  applicants,
  changeVisibility,
  appId,
  setAlert,
  getApplicants,
  updateApplicant,
}) {
  //handle images
  const [cnicFront, setCnciFront] = useState();
  const [cnicBack, setCnicBack] = useState();
  const [studentPhoto, setStudentPhoto] = useState();
  //display image center of screen
  const [imgTop, setImgTop] = useState(0);
  //hide/unhide images boxes
  const [cnicFrontbox, setCnicFrontBox] = useState("hidden");
  const [cnicBackbox, setCnicBackBox] = useState("hidden");
  const [studentImgbox, setStudentImgBox] = useState("hidden");
  //take care of the id passed
  const clickedApplicant =
    applicants.applicants !== null &&
    applicants.applicants.applicants.find(
      (applicant) => applicant._id === appId.id
    );
  const reverseImg = (img) => {
    return Buffer.from(img).toString("base64");
  };
  console.log(clickedApplicant);
  const [formData, setFormData] = useState({
    name: clickedApplicant !== null ? clickedApplicant.name : " ",
    gender: clickedApplicant !== null ? clickedApplicant.gender : " ",
    cnic: clickedApplicant !== null ? clickedApplicant.cnic : " ",
    dateOfBirth: clickedApplicant !== null ? clickedApplicant.dateOfBirth : " ",
    mobile: clickedApplicant !== null ? clickedApplicant.mobile : " ",
    phone: clickedApplicant !== null ? clickedApplicant.phone : " ",
    email: clickedApplicant !== null ? clickedApplicant.email : " ",
    cnicFrontImg:
      clickedApplicant !== null
        ? reverseImg(clickedApplicant.cnicFrontImg)
        : " ",
    cnicFrontImgType:
      clickedApplicant !== null ? clickedApplicant.cnicFrontImgType : " ",
    cnicBackImg:
      clickedApplicant !== null
        ? reverseImg(clickedApplicant.cnicBackImg)
        : " ",
    cnicBackImgType:
      clickedApplicant !== null ? clickedApplicant.cnicBackImgType : " ",
    studentImg:
      clickedApplicant !== null ? reverseImg(clickedApplicant.studentImg) : " ",
    studentImgType:
      clickedApplicant !== null ? clickedApplicant.studentImgType : " ",
  });
  //handle images
  const updateCnicFrontImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("cnicFront");
    console.log(data.size);
    return data;
  };
  const updateCnicBackImg = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("cnicBack");
    console.log(data.size);
    return data;
  };
  const updateStudentPhoto = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("studentPhoto");
    return data;
  };
  const displayCnicFront = () => {
    if (
      clickedApplicant.cnicFrontImg != null &&
      clickedApplicant.cnicFrontImgType != null
    ) {
      return `data: ${
        clickedApplicant.cnicFrontImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedApplicant.cnicFrontImg
      ).toString("base64")}`;
    }
  };
  const displayCnicBack = () => {
    if (
      clickedApplicant.cnicBackImg != null &&
      clickedApplicant.cnicBackImgType != null
    ) {
      return `data: ${
        clickedApplicant.cnicBackImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedApplicant.cnicBackImg
      ).toString("base64")}`;
    }
  };
  const displayStudentPhoto = () => {
    if (
      clickedApplicant.studentImg != null &&
      clickedApplicant.studentImgType != null
    ) {
      return `data: ${
        clickedApplicant.studentImgType
      };charset=utf-8;base64,${Buffer.from(
        clickedApplicant.studentImg
      ).toString("base64")}`;
    }
  };
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  //hide/unhide image boxes
  const changeCnicFrontBox = () => {
    getPosition("something");
    cnicFrontbox === "hidden"
      ? setCnicFrontBox(" ")
      : setCnicFrontBox("hidden");
  };
  const changeCnicBackBox = () => {
    getPosition("something");
    cnicBackbox === "hidden" ? setCnicBackBox(" ") : setCnicBackBox("hidden");
  };
  const changeStudentImgBox = () => {
    getPosition("something");
    studentImgbox === "hidden"
      ? setStudentImgBox(" ")
      : setStudentImgBox("hidden");
  };
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const cnicFrontData = await updateCnicFrontImg(e);
    const cnicBackData = await updateCnicBackImg(e);
    const studentPhotoData = await updateStudentPhoto(e);

    const newInfo = {
      name: formData.name,
      gender: formData.gender,
      cnic: formData.cnic,
      dateOfBirth: formData.dateOfBirth,
      mobile: formData.mobile,
      phone: formData.phone,
      email: formData.email,
      cnicFront:
        cnicFrontData.size === 0
          ? { data: formData.cnicFrontImg, type: formData.cnicFrontImgType }
          : cnicFrontData,
      cnicBack:
        cnicBackData.size === 0
          ? { data: formData.cnicBackImg, type: formData.cnicBackImgType }
          : cnicBackData,
      studentPhoto:
        studentPhotoData.size === 0
          ? { data: formData.studentImg, type: formData.studentImgType }
          : studentPhotoData,
    };
    console.log(newInfo);
    updateApplicant(newInfo, appId.id);
    getApplicants();
    changeVisibility();
    setAlert("Updating applicant, please wait", "success", 7000);
  };
  return (
    <div className={`h-full w-full bg-white absolute top-0 left-0`}>
      <form
        onSubmit={(e) => {
          onSubmitForm(e);
        }}
      >
        <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
          <div className="flex justify-center">
            <div className="flex">
              <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                {formData.name}
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
                name="name"
                required
                value={formData.name}
                onChange={(e) => onChangeFormData(e)}
                type="text"
                placeholder="Name"
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
                type="text"
                mask="99999-9999999-9"
                placeholder="99999-9999999-9"
                name="cnic"
                required
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
                Date of Birth
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
                name="dateOfBirth"
                required
                value={formData.dateOfBirth}
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
                type="text"
                mask="9999-9999999"
                placeholder="9999-9999999"
                name="mobile"
                required
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
                type="text"
                mask="9999-9999999"
                placeholder="9999-9999999"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => onChangeFormData(e)}
              ></InputMask>
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
              name="email"
              required
              value={formData.email}
              onChange={(e) => onChangeFormData(e)}
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
                Cnic Front
              </label>
              <div className="flex items-center justify-left w-full">
                <button
                  className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                  type="button"
                  onClick={() => changeCnicFrontBox()}
                >
                  Check Image
                </button>
              </div>
              <div className="flex items-center -ml-2 justify-left w-full">
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
                  onClick={() => changeCnicBackBox()}
                >
                  Check Image
                </button>
              </div>
              <div className="flex items-center -ml-2 justify-left w-full">
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
                Student Photo
              </label>
              <div className="flex items-center justify-left w-full">
                <button
                  className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                  type="button"
                  onClick={() => changeStudentImgBox()}
                >
                  Check Image
                </button>
              </div>
              <div className="flex items-center -ml-2 justify-left w-full">
                <FilePond
                  files={studentPhoto}
                  allowMultiple={false}
                  allowFileEncode={true}
                  name="studentPhoto"
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  className="w-full h-auto "
                  allowImagePreview={false}
                >
                  {" "}
                </FilePond>
              </div>
            </div>
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
        </div>
        {/* handle images */}
        <div
          style={{ top: imgTop }}
          className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${cnicBackbox}`}
        >
          <div className="w-full h-full relative">
            <img
              src={clickedApplicant !== null ? displayCnicBack() : " "}
              className="w-full h-full bg-cover"
              alt="cnic Back "
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeCnicBackBox()}
              type="button"
            >
              X
            </button>
          </div>
        </div>

        <div
          style={{ top: imgTop }}
          className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${cnicFrontbox}`}
        >
          <div className="w-full h-full relative">
            <img
              src={clickedApplicant !== null ? displayCnicFront() : " "}
              className="w-full h-full bg-cover"
              alt="cnic front "
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeCnicFrontBox()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div
          style={{ top: imgTop }}
          className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${studentImgbox}`}
        >
          <div className="w-full h-full relative">
            <img
              src={clickedApplicant !== null ? displayStudentPhoto() : " "}
              className="w-full h-full bg-cover"
              alt="student photo"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
              onClick={() => changeStudentImgBox()}
              type="button"
            >
              X
            </button>
          </div>
        </div>
        {/* end of images */}
      </form>
    </div>
  );
}

ApplicantsPopUp.propTypes = {
  applicants: PropTypes.object.isRequired,
  changeVisibility: PropTypes.func.isRequired,
  appId: PropTypes.object.isRequired,
  getApplicants: PropTypes.func.isRequired,
  updateApplicant: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { getApplicants, updateApplicant, setAlert })(
  ApplicantsPopUp
);
