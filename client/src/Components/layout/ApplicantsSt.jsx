import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";
import ApplicantsPopUp from "./ApplicantsPopUp";
import { setAlert } from "../../actions/alert";
import InputMask from "react-input-mask";
import Spinner from "./Spinner";
//filepond stuff
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
//redux stuff
import { connect } from "react-redux";
import {
  newApplicant,
  getApplicants,
  updateApplicant,
} from "../../actions/aplicants";
import BankPopUp from "./BankPopUp";
//filepond stuff
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

function ApplicantsSt({ getApplicants, newApplicant, applicants, setAlert }) {
  //handle images
  const [cnicFront, setCnciFront] = useState();
  const [cnicBack, setCnicBack] = useState();
  const [studentPhoto, setStudentPhoto] = useState();
  //---------------------------------
  const [applicantPopUP, setApplicantPopUp] = useState(false);
  const [newApplicantPop, setNewApplicantPop] = useState("hidden");
  const [applicantPop, setApplicantPop] = useState("hidden");
  const [appIdToPop, setAppIdToPop] = useState({
    id: undefined,
  });
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    cnic: "",
    dateOfBirth: "",
    mobile: "",
    phone: "",
    email: "",
  });
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const changePopUp = () => {
    setApplicantPopUp(!applicantPopUP);
  };
  const changeNewApplicant = () => {
    if (newApplicantPop === "hidden") {
      setNewApplicantPop(" ");
    } else {
      setNewApplicantPop("hidden");
    }
  };
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
  const updateStudentPhoto = async (e) => {
    const form = new FormData(e.target);
    const data = form.get("studentPhoto");
    return data;
  };
  //--------------------
  const changeApplicantPop = () => {
    applicantPop === "hidden"
      ? setApplicantPop(" ")
      : setApplicantPop("hidden");
  };
  const changeAppIdToPop = (e) => {
    setAppIdToPop({ ...appIdToPop, ["id"]: e.target.id });
    changePopUp();
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const cnicFronData = await updateCnicFrontImg(e);
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
      cnicFront: cnicFronData,
      cnicBack: cnicBackData,
      studentPhoto: studentPhotoData,
    };
    console.log(cnicFronData.size);
    if (
      cnicFronData.size === 0 ||
      cnicBackData.size === 0 ||
      studentPhotoData.size === 0
    ) {
      changeNewApplicant();
      setAlert("Please select the images", "error", 5000);
      return;
    }
    setAlert("Creating Applicant, Please Wait", "success", 5000);
    await newApplicant(newInfo).then(() => {
      getApplicants();
    });
    changeNewApplicant();
  };
  //get all the applicants on render
  useEffect(() => {
    getApplicants();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div
              className="
            w-full
            h-180/2
            centerSom
            bg-white
            lg1:bg-transparent
            overflow-y-auto
          "
            >
              {applicants.loading === true ? (
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
                      onClick={() => changeNewApplicant()}
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
                    {applicants.applicants !== null
                      ? applicants.applicants.applicants.map((applicant) => (
                          <div
                            id={applicant._id}
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
                            onClick={(e) => changeAppIdToPop(e)}
                          >
                            <div className="mr-4 bg-blue-500 text-white rounded-full pointer-events-none">
                              <img
                                className="rounded-full w-12 h-12"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="pointer-events-none">
                              <p className="mb-2 text-md font-medium text-gray-900">
                                {applicant.name}
                              </p>
                              <p className="text-sm font-normal text-gray-800">
                                Birth: {applicant.dateOfBirth}
                              </p>
                              <p className="text-sm font-normal text-gray-800">
                                CNIC: {applicant.cnic}
                              </p>
                            </div>
                          </div>
                        ))
                      : " "}
                    {/* <!-- Card 3 --> */}
                    {/* <div
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
                        Kashehi Abd Al-Rashid
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        Age: 11
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        CNIC: 1541245368325
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
                    {/* <!-- popup section new applicant --> */}
                    <div
                      className={`h-full w-full bg-white absolute top-0 left-0 ${newApplicantPop}`}
                    >
                      <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                          <div className="flex justify-center">
                            <div className="flex">
                              <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                                New Applicant
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
                                <option default>Select</option>
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
                                Student Photo
                              </label>
                              <div className="flex items-center justify-left w-full">
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
                              onClick={() => changeNewApplicant()}
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
                    {/* <!-- popup section applicant --> */}
                    {applicantPopUP && (
                      <ApplicantsPopUp
                        changeVisibility={changePopUp}
                        appId={appIdToPop}
                        applicants={applicants}
                      />
                    )}
                    {/* <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${applicantPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        Kabib Ashware
                      </h1>
                    </div>
                  </div> */}
                    {/* <!-- 1 row --> */}
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
                        value="Kabib Ashware"
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
                      >
                        <option>Male</option>
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
                        value="123452587459"
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
                        type="text"
                        value="12/10/2010"
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
                        value="+54-8956-896-896"
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
                        value="56984512"
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
                      value="test@student.com"
                    /> */}
                  </div>
                  {/* <!-- buttons --> */}
                  {/* <hr className="mt-5 border" />
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
                      onClick={() => changeApplicantPop()}
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
                      SAVE
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

ApplicantsSt.propTypes = {
  getApplicants: PropTypes.func.isRequired,
  updateApplicant: PropTypes.func.isRequired,
  newApplicant: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  applicants: state.aplicants,
});

export default connect(mapStateToProps, {
  setAlert,
  getApplicants,
  updateApplicant,
  newApplicant,
})(ApplicantsSt);
