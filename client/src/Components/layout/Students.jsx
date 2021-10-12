import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
//import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";
import { connect } from "react-redux";
import { getStudents } from "../../actions/students";
import { getScholarshipsAdmin } from "../../actions/scholarshipsAdmin";
import Spinner from "./Spinner";
import StudentReportsAdmin from "./StudentReportsAdmin";
import StudentsInfoAdmin from "./StudentsInfoAdmin";

function Students({
  getStudents,
  students,
  getScholarshipsAdmin,
  scholarshipsAdmin,
}) {
  const [paymentsPop, setPaymentsPop] = useState(false);
  const [reportsPop, setReportsPop] = useState(false);
  const [studentInfoPop, setStudentInfoPop] = useState(false);
  const [studentData, setStudentData] = useState();
  // const [studentInfoPop, setStudentInfoPop] = useState("hidden");
  const [cnPhoto, setCnPhoto] = useState("hidden");
  const [stPhoto, setStPhoto] = useState("hidden");
  const [prPhoto, setPrPhoto] = useState("hidden");
  const [idPhoto, setIdPhoto] = useState("hidden");
  const [bkPhoto, setBkPhoto] = useState("hidden");
  const [imgTop, setImgTop] = useState(0);
  const [reportId, setReportId] = useState(0);
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  const changeCnPhoto = () => {
    cnPhoto === "hidden" ? setCnPhoto(" ") : setCnPhoto("hidden");
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
  const changePaymentsPop = () => {
    getPosition("something");
    setPaymentsPop(!paymentsPop);
    //paymentsPop === "hidden" ? setPaymentsPop(" ") : setPaymentsPop("hidden");
  };
  // const updateData = (info) => {
  //   setStudentData(info);
  // }
  const changeReportPopClose = () => {
    setReportsPop(!reportsPop);
  };
  const changeReportsPop = (e) => {
    getPosition("something");
    setReportId(e.target.id);
    setReportsPop(!reportsPop);
    //paymentsPop === "hidden" ? setPaymentsPop(" ") : setPaymentsPop("hidden");
  };
  const changeStudentInfoPopClose = () => {
    setStudentInfoPop(!studentInfoPop);
  };
  const changeStudentInfoPop = (info) => {
    setStudentData(info);
    getPosition("something");
    setStudentInfoPop(!studentInfoPop);
  };
  useEffect(() => {
    getStudents();
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
                    <option>bank</option>
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
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Reports</th>
                        <th className="px-4 py-3">Cnic</th>
                      </tr>
                    </thead>
                    <tbody className="w-full bg-white">
                      {students.students !== null ? (
                        students.students.map((stu) =>
                          stu.applicants.map((student) => (
                            <tr className="text-gray-700">
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
                                    <p
                                      className="font-semibold text-black cursor-pointer"
                                      onClick={() =>
                                        changeStudentInfoPop(student)
                                      }
                                    >
                                      {student.name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td
                                id={student._id}
                                className="px-4 py-3 text-ms font-semibold border cursor-pointer"
                                onClick={(e) => changeReportsPop(e)}
                              >
                                Student Reports
                              </td>
                              <td className="px-4 py-3 text-sm border">
                                {student.cnic}
                              </td>
                            </tr>
                          ))
                        )
                      ) : (
                        <Spinner />
                      )}

                      {/* <tr className="h-auto bg-white hidden">
                        <td
                          colSpan="4"
                          className="col-span-4 bg-green-200 "
                        ></td>
                      </tr>
                      <tr className={`h-auto bg-white ${paymentsPop}`}>
                        <td colSpan="4" className="col-span-4">
                          <table className="w-full h-180/2">
                            <thead>
                              <tr
                                className="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-gray-900
                              bg-gray-100
                              uppercase
                              border-b border-gray-600
                            "
                              >
                                <th className="px-4 py-3">Number</th>
                                <th className="px-4 py-3">Payment</th>
                                <th className="px-4 py-3">Payment status</th>
                                <th className="px-4 py-3">Payment Date</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 1
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 2
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 3
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                                >
                                  Made
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 4
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                                >
                                  Pending
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Payment 5
                                </td>
                                <td
                                  className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                                >
                                  pending
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                       Students Reports
                      <tr className={`h-auto bg-white ${reportsPop}`}>
                        <td colSpan="4" className="col-span-4">
                          <table className="w-full h-180/2">
                            <thead>
                              <tr
                                className="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-gray-900
                              bg-gray-100
                              uppercase
                              border-b border-gray-600
                            "
                              >
                                <th className="px-4 py-3">Number</th>
                                <th className="px-4 py-3">Report</th>
                                <th className="px-4 py-3">Date</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        1
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 1
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        2
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 2
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        3
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 3
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        4
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 4
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div>
                                      <p className="font-semibold text-black">
                                        5
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                  Report 5
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  24/01/2021
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr> */}
                      {/* End of students  Reports */}
                    </tbody>
                  </table>
                </div>
                {/* reports student */}
                {reportsPop && (
                  <StudentReportsAdmin
                    imgTop={imgTop}
                    changeReportPopClose={changeReportPopClose}
                    reportId={reportId}
                  />
                )}
                {/* students payments */}
                {/* <div
                  style={{ top: imgTop }}
                  className={`w-2/3 h-1/2 bg-white fixed centerHorizontal usm:h-1/3 border ${paymentsPop}`}
                >
                  <div className="w-full h-full relative">
                    <table className="w-full h-180/2">
                      <thead>
                        <tr
                          className="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-gray-900
                              bg-gray-100
                              uppercase
                              border-b border-gray-600
                            "
                        >
                          <th className="px-4 py-3">Number</th>
                          <th className="px-4 py-3">Payment</th>
                          <th className="px-4 py-3">Payment status</th>
                          <th className="px-4 py-3">Payment Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">1</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            Payment 1
                          </td>
                          <td
                            className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                          >
                            Made
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            24/01/2021
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">1</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            Payment 2
                          </td>
                          <td
                            className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                          >
                            Made
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            24/01/2021
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">1</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            Payment 3
                          </td>
                          <td
                            className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-green-400
                              "
                          >
                            Made
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            24/01/2021
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">1</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            Payment 4
                          </td>
                          <td
                            className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                          >
                            Pending
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            24/01/2021
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">1</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            Payment 5
                          </td>
                          <td
                            className="
                                px-4
                                py-3
                                border
                                text-md
                                font-semibold
                                bg-gray-400
                              "
                          >
                            pending
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            24/01/2021
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
                      onClick={() => changePaymentsPop()}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                </div> */}
                {/* start of student info pop up */}
                {studentInfoPop && (
                  <StudentsInfoAdmin
                    changeStudentInfoPop={changeStudentInfoPop}
                    imgTop={imgTop}
                    studentData={studentData}
                  />
                )}

                {/* end of student info pop up */}
              </div>
            </div>
          </div>
        </main>
        {/* start of images pop ups */}
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${cnPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeCnPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/5 border ${stPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/graduate-member.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeStPhoto()}
            >
              X
            </button>
          </div>
        </div>

        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${prPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changePrPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${idPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeIdPhoto()}
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`w-2/5 h-2/5 bg-white fixed  top-1/2   left-1/2 transform -translate-y-1/2 -translate-x-1/2 usm:h-1/3 border ${bkPhoto}`}
        >
          <div className="w-full h-full relative">
            <img
              src="./img/MeezanBank_PK.jpg"
              className="w-full h-full bg-cover"
              alt="bank check"
            />
            <button
              className="w-10 h-10 absolute top-0 right-0 text-4xl text-black"
              onClick={() => changeBkPhoto()}
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

Students.propTypes = {
  getStudents: PropTypes.func.isRequired,
  getScholarshipsAdmin: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  students: state.students,
  scholarshipsAdmin: state.scholarshipsAdmin,
});

export default connect(mapStateToProps, { getStudents, getScholarshipsAdmin })(
  Students
);
