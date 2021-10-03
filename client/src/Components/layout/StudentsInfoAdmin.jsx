import React, { useState } from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

function StudentsInfoAdmin({ imgTop, changeStudentInfoPop, studentData }) {
  const [cnicFront, setCnicFront] = useState(false);
  const [cnicBack, setCnicBack] = useState(false);
  const [studentPhoto, setStudentPhoto] = useState(false);
  const cnicFrontChange = () => {
    setCnicFront(!cnicFront);
  };
  const cnicBackChange = () => {
    setCnicBack(!cnicBack);
  };
  const studentPhotoChange = () => {
    setStudentPhoto(!studentPhoto);
  };
  return (
    <div
      style={{ top: imgTop + 10 }}
      className={`w-full h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border`}
    >
      <div className="w-full h-full relative">
        <div className={`h-full w-full bg-white absolute top-0 left-0`}>
          <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                  {studentData.name}
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
                  value={studentData.name}
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
                  value={studentData.gender}
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
                  value={studentData.cnic}
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
                  value={studentData.dateOfBirth}
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
                  value={studentData.mobile}
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
                  value={studentData.phone}
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
                value={studentData.email}
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
                    onClick={() => cnicFrontChange()}
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
                    onClick={() => cnicBackChange()}
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
                  Student Photo
                </label>
                <div className="flex items-center justify-left w-full">
                  <button
                    className="w-auto h-8 px-2 mb-0  bg-gray-100 usm:mb-3 border border-gray-500"
                    type="button"
                    onClick={() => studentPhotoChange()}
                  >
                    Check Image
                  </button>
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
                onClick={() => changeStudentInfoPop()}
              >
                Cancel
              </button>
            </div>
          </div>
          {/* handle images */}
          {cnicFront && (
            <div
              style={{ top: imgTop }}
              className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border`}
            >
              <div className="w-full h-full relative">
                <img
                  src={
                    studentData !== null
                      ? `data: ${
                          studentData.cnicFrontImgType
                        };charset=utf-8;base64,${Buffer.from(
                          studentData.cnicFrontImg
                        ).toString("base64")}`
                      : " "
                  }
                  className="w-full h-full bg-cover"
                  alt="cnic Front "
                />
                <button
                  className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                  onClick={() => cnicFrontChange()}
                  type="button"
                >
                  X
                </button>
              </div>
            </div>
          )}
          {cnicBack && (
            <div
              style={{ top: imgTop }}
              className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border`}
            >
              <div className="w-full h-full relative">
                <img
                  src={
                    studentData !== null
                      ? `data: ${
                          studentData.cnicBackImgType
                        };charset=utf-8;base64,${Buffer.from(
                          studentData.cnicBackImg
                        ).toString("base64")}`
                      : " "
                  }
                  className="w-full h-full bg-cover"
                  alt="cnic Back "
                />
                <button
                  className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                  onClick={() => cnicBackChange()}
                  type="button"
                >
                  X
                </button>
              </div>
            </div>
          )}
          {studentPhoto && (
            <div
              style={{ top: imgTop }}
              className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border`}
            >
              <div className="w-full h-full relative">
                <img
                  src={
                    studentData !== null
                      ? `data: ${
                          studentData.studentImgType
                        };charset=utf-8;base64,${Buffer.from(
                          studentData.studentImg
                        ).toString("base64")}`
                      : " "
                  }
                  className="w-full h-full bg-cover"
                  alt="cnic Front "
                />
                <button
                  className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                  onClick={() => studentPhotoChange()}
                  type="button"
                >
                  X
                </button>
              </div>
            </div>
          )}

          <div
            style={{ top: imgTop }}
            className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border hidden`}
          >
            <div className="w-full h-full relative">
              {/* <img
              src={clickedApplicant !== null ? displayCnicFront() : " "}
              className="w-full h-full bg-cover"
              alt="cnic front "
            /> */}
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                //   onClick={() => changeCnicFrontBox()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          <div
            style={{ top: imgTop }}
            className={`w-1/5 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border hidden`}
          >
            <div className="w-full h-full relative">
              {/* <img
              src={clickedApplicant !== null ? displayStudentPhoto() : " "}
              className="w-full h-full bg-cover"
              alt="student photo"
            /> */}
              <button
                className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                //   onClick={() => changeStudentImgBox()}
                type="button"
              >
                X
              </button>
            </div>
          </div>
          {/* end of images */}
        </div>
      </div>
    </div>
  );
}

StudentsInfoAdmin.propTypes = {
  imgTop: PropTypes.number.isRequired,
  changeStudentInfoPop: PropTypes.func.isRequired,
  studentData: PropTypes.object.isRequired,
};

export default StudentsInfoAdmin;
