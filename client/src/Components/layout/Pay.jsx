import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import Header from "../individual/Header";
import "@material-tailwind/react/Dropdown";
import { connect } from "react-redux";
import { getStudents } from "../../actions/students";
import { getAllScholarshipsAdmin } from "../../actions/scholarshipsAdmin";
import { getPayments, newPayment } from "../../actions/payments";
import Spinner from "./Spinner";
import Students from "./Students";
import StudentReportsAdmin from "./StudentReportsAdmin";
import { setAlert } from "../../actions/alert";

function Pay({
  getAllScholarshipsAdmin,
  scholarshipsInfo,
  newPayment,
  setAlert,
}) {
  const [formData, setFormData] = useState({
    cheqDate: "",
    cheqNumber: "",
    startMonth: "",
    endMonth: "",
    amount: "",
    dateOfApproval: "",
    approvedAmount: "",
    approvedTo: "",
    approvedFrom: "",
    status: "",
  });
  const [reportsPop, setReportsPop] = useState(false);
  const [payPop, setPayPop] = useState("hidden");
  const [reportId, setReportId] = useState(0);
  const [imgTop, setImgTop] = useState(0);
  const [studentId, setStudentId] = useState(0);
  const onChangeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  //getElementPosition
  const getPosition = (buttonName) => {
    setImgTop(window.scrollY + 100);
  };
  const changeReportPopClose = () => {
    setReportsPop(!reportsPop);
  };
  const changeReportsPop = (e) => {
    getPosition("something");
    setReportId(e.target.id);
    setReportsPop(!reportsPop);
  };
  const changePayPopClose = () => {
    if (payPop === "hidden") {
      setPayPop(" ");
    } else {
      setPayPop("hidden");
    }
  };
  const changePayPop = (e) => {
    setStudentId(e.target.id);
    if (payPop === "hidden") {
      setPayPop(" ");
    } else {
      setPayPop("hidden");
    }
  };
  const createPayment = (e) => {
    e.preventDefault();
    const data = {
      cheqDate: formData.cheqDate,
      cheqNumber: formData.cheqNumber,
      startMonth: formData.startMonth,
      endMonth: formData.endMonth,
      amount: formData.amount,
      dateOfApproval: formData.dateOfApproval,
      approvedAmount: formData.approvedAmount,
      approvalGivenBy: studentId,
      approvedTo: formData.approvedTo,
      approvedFrom: formData.approvedFrom,
      status: formData.status,
    };
    newPayment(data);
    changePayPopClose();
    setAlert("Creating payment, Please Wait", "success", 8000);
  };
  useEffect(() => {
    getAllScholarshipsAdmin();
  }, []);
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-full h-180/2 padding-12 sm2:p-5">
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
                    <option>Date</option>
                    <option>Bank</option>
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
                <div className="w-full lg3:overflow-x-auto">
                  <table className="w-full h-180/2">
                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">CNIC</th>
                        <th className="px-4 py-3">Student Name</th>
                        <th className="px-4 py-3">Student reports</th>
                        <th className="px-4 py-3">Bank</th>
                        <th className="px-4 py-3">Account Number</th>
                        <th className="px-4 py-3">Approved funds</th>
                        <th className="px-4 py-3">Pay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {scholarshipsInfo.scholarshipsInfo !== null ? (
                        scholarshipsInfo.scholarshipsInfo.map((scho1) =>
                          scho1.scholarships.map((schoFinal) => (
                            <tr className="text-gray-700">
                              <td className="px-2 py-2 border">1</td>
                              <td className="px-2 py-2 border">
                                {schoFinal.cnic}
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
                                      {schoFinal.name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td
                                id={schoFinal.studentId}
                                className="px-4 py-3 text-md font-semibold border cursor-pointer"
                                onClick={(e) => changeReportsPop(e)}
                              >
                                Student Reports
                              </td>
                              <td className="px-4 py-3 text-ms font-semibold border">
                                {schoFinal.bankName}
                              </td>
                              <td className="px-2 py-2 border">
                                {" "}
                                {schoFinal.bankAcc}
                              </td>
                              <td className="px-2 py-2 border">{`${schoFinal.requiredFees}$`}</td>
                              <td
                                id={schoFinal.studentId}
                                className="px-2 py-2 border cursor-pointer"
                                onClick={(e) => changePayPop(e)}
                              >
                                Pay
                              </td>
                            </tr>
                          ))
                        )
                      ) : (
                        <Spinner />
                      )}
                    </tbody>
                  </table>
                  {/* <!-- pop up section --> */}
                  {/* reports section */}
                  {reportsPop && (
                    <StudentReportsAdmin
                      imgTop={imgTop}
                      changeReportPopClose={changeReportPopClose}
                      reportId={reportId}
                    />
                  )}
                  {/* end of reports */}
                  {/* payment section */}
                  <div
                    className={`h-full w-full bg-white absolute top-0 left-0 ${payPop}`}
                  >
                    <form onSubmit={(e) => createPayment(e)}>
                      <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                        <div className="flex justify-center">
                          <div className="flex">
                            <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                              Pay Scholarship
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
                              Cheque Date
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
                              name="cheqDate"
                              value={formData.cheqDate}
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
                              Cheque #
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
                              name="cheqNumber"
                              value={formData.cheqNumber}
                              onChange={(e) => onChangeFormData(e)}
                              placeholder="Cheque #"
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
                              Starting Month
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
                              name="startMonth"
                              value={formData.startMonth}
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
                              Ending Month:
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
                              name="endMonth"
                              value={formData.endMonth}
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
                              Amount
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
                              placeholder="Amount"
                              name="amount"
                              value={formData.amount}
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
                              Date of Approval
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
                              name="dateOfApproval"
                              value={formData.dateOfApproval}
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
                              Approved Amount:{" "}
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
                              name="approvedAmount"
                              value={formData.approvedAmount}
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
                              STATUS
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
                              value={formData.status}
                              name="status"
                              onChange={(e) => onChangeFormData(e)}
                            >
                              <option defualt>Select</option>
                              <option value="approved">Approved</option>
                              <option value="denied">Denied</option>
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
                              Approved From:{" "}
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
                              name="approvedFrom"
                              value={formData.approvedFrom}
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
                              Approval to:{" "}
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
                              name="approvedTo"
                              value={formData.approvedTo}
                              onChange={(e) => onChangeFormData(e)}
                            />
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
                            onClick={() => changePayPop()}
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
                            PAY
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

Pay.propTypes = {
  getStudents: PropTypes.func.isRequired,
  getAllScholarshipsAdmin: PropTypes.func.isRequired,
  getPayments: PropTypes.func.isRequired,
  newPayment: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

Pay.propTypes = {};
const mapStateToProps = (state) => ({
  students: state.students,
  scholarshipsInfo: state.scholarshipsInfo,
  payments: state.payments,
});

export default connect(mapStateToProps, {
  getStudents,
  getAllScholarshipsAdmin,
  getPayments,
  newPayment,
  setAlert,
})(Pay);
