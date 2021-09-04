import React, { Fragment, useState, useEffect, Profiler } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { newParent, updateParent, getParents } from "../../actions/parents";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import {uploadCnic, uploadQuali, uploadSalary} from "../../actions/parents";

function ParentPopUp({ updateParent, getParents, parents, changeVisibility, parentId, setAlert, uploadCnic, uploadQuali, uploadSalary }) {
  //take care of the data
  const [userParents, setUserParents] = useState([]);
  const [startParent, setStartParent] = useState();
  const [cnicPhoto, setCnicCopy] = useState("");
  const [ salaryPhoto, setSalaryPhoto] = useState("");
  const [ qualiPhoto, setQualiPhoto] = useState("");
  const onChangeCnic = (e) =>
    setCnicCopy(e.target.files[0]);
    const onChangeSalary = (e) =>
    setSalaryPhoto(e.target.files[0]);
    const onChangeQuali = (e) =>
    setQualiPhoto(e.target.files[0]);
  //console.log(parentId);
  const clickedParent = parents.parents !== null && parents.parents.parents.find((parent) => parent._id === parentId.id);
  //parents.parents.parents.map((parent) => console.log(parent._id + "=" + parentId.id));
  //console.log(clickedParent);
  const [formData, setFormData] = useState({
    type: clickedParent !== null  ? clickedParent.type : " ",
      gender: clickedParent !== null   ? clickedParent.gender : " ",
      name: clickedParent !== null   ? clickedParent.name : " ",
      cnic: clickedParent !== null   ? clickedParent.cnic : " ",
      email: clickedParent !== null   ? clickedParent.email : " ",
      mobile: clickedParent !== null   ? clickedParent.mobile : " ",
      phone: clickedParent !== null   ? clickedParent.phone : " ",
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  //0000000000000000000000000000000000000000000000000000000000000000000000000000
  //take care of the dinamic
  // const [parentPop, setParentPop] = useState("hidden");
  // const [newParentPop, setNewParentPop] = useState("hidden");
  const [imagePopCnic, setImagePopCnic] = useState("hidden");
  const [imagePopSalary, setImagePopSalary] = useState("hidden");
  const [imagePopQuali, setImagePopQuali] = useState("hidden");
  const changeImagePopCnic = () => {
    if (imagePopCnic === "hidden") {
      setImagePopCnic(" ");
    } else {
      setImagePopCnic("hidden");
    }
  };
  const changeImagePopSalary = () => {
    if (imagePopSalary === "hidden") {
      setImagePopSalary(" ");
    } else {
      setImagePopSalary("hidden");
    }
  };
  const changeImagePopQuali = () => {
    if (imagePopQuali === "hidden") {
      setImagePopQuali(" ");
    } else {
      setImagePopQuali("hidden");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    updateParent(formData, parentId.id);
    if(formData.cnic === ""){
      setAlert("please fill all the form", "error");
    } else {
        
        
        
        const fileName = formData.cnic + ".jpg";
        
        
        
        //cnicCopy.cnicCopy.name = "test22222.jpg";
        //cnicCopy.set("name", "newName.jpg");

        
        try {
          if(cnicPhoto !== ""){
            const cnicCopy = new FormData();
            cnicCopy.append('cnicCopy',cnicPhoto, fileName);
            uploadCnic(cnicCopy);
            // const res = await axios.post('/api/uploads/parents/cnicphotos', cnicCopy, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   },
            // });
          }
          if(salaryPhoto !== ""){
            const salarySlip = new FormData();
            salarySlip.append('salarySlip', salaryPhoto, fileName);
            uploadSalary(salarySlip);
            // const res2 = await axios.post('/api/uploads/parents/salaryphotos', salarySlip, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   },
            // });
          }
          if(qualiPhoto !== ""){
            const qualiDoc = new FormData();
            qualiDoc.append('qualiDoc', qualiPhoto, fileName);
            uploadQuali(qualiDoc);
            // const res3 = await axios.post('/api/uploads/parents/qualiDocphotos', qualiDoc, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   },
            // });
          }
        } catch (err) {
          if (err.response.status === 500) {
            console.log('There was a problem with the server');
          } else {
            console.log(err.response.data.msg);
          }
        }
    }
    getParents();
    changeVisibility();
  }
  //000000000000000000000000000000000000000000000000000000000000000000000000000000000
  // useEffect(() => {
  //   getParents();
  //   reloadDataforForm();
  // }, [clickedParent]);
  return (
    <Fragment>
      {/* start of new parent pop up */}
      <div
        className={`h-full w-full bg-white absolute top-0 left-0`}
      >
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
                <input
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
                  value={formData.cnic}
                onChange={(e) => onChange(e)}
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
                <input
                name="mobile"
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
                  value={formData.mobile}
                onChange={(e) => onChange(e)}
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
                name="phone"
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
                  value={formData.phone}
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
                        mb-1
                      "
                >
                  CNIC PHOTO
                </label>
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => changeImagePopCnic()}
                  >
                    Check Image
                  </button>
                </div>
                <div className="flex items-center justify-left w-full">
                <input type="file" className="" name="cnicCopy" onChange={(e) => onChangeCnic(e)}/>
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
                  <button className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500" type="button" onClick={() => changeImagePopSalary()}>
                    check img
                  </button>
                </div>
                <div className="flex items-center justify-left w-full">
                <input type="file" className="" name="salarySlip" onChange={(e) => onChangeSalary(e)}/>
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
                <button className="w-auto h-8 px-2 mb-3  bg-gray-100 usm:mb-3 border border-gray-500" type="button" onClick={() => changeImagePopQuali()}>
                  Check img
                </button>
              </div>
              <div className="flex items-center justify-left w-full">
              <input type="file" className="" name="qualiDoc" onChange={(e) => onChangeQuali(e)}/>
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
          {/* hangle images */}
          <div
            className={`w-1/5 h-1/2 bg-white centerSom usm:h-1/3 border ${imagePopSalary}`}
          >
            <div className="w-full h-full relative">
              <img
                src={`./img/parents/salary/${clickedParent.cnic}.jpg`}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
                onClick={() => changeImagePopSalary()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            className={`w-2/3 h-1/2 bg-white centerSom usm:h-1/3 border ${imagePopCnic}`}
          >
            <div className="w-full h-full relative">
              <img
                src={`./img/parents/cnic/${clickedParent.cnic}.jpg`}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
                onClick={() => changeImagePopCnic()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            className={`w-1/5 h-1/2 bg-white centerSom usm:h-1/3 border ${imagePopQuali}`}
          >
            <div className="w-full h-full relative">
              <img
                src={`./img/parents/quali/${clickedParent.cnic}.jpg`}
                className="w-full h-full bg-cover"
              />
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
                onClick={() => changeImagePopQuali()}
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
  parentId: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
  uploadSalary: PropTypes.func.isRequired,
  uploadQuali: PropTypes.func.isRequired,
  uploadCnic: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  parents: state.parents,
});

export default connect(mapStateToProps, {
  newParent,
  updateParent,
  getParents,
  uploadCnic,
  uploadQuali,
  uploadSalary
})(ParentPopUp);
