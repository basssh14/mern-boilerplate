import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getScholarshipsAdmin,
  deleteReportData,
} from "../../actions/scholarshipsAdmin";
import Spinner from "./Spinner";

function StudentReportsAdmin({
  imgTop,
  changeReportPopClose,
  reportId,
  getScholarshipsAdmin,
  scholarshipsAdmin,
  deleteReportData,
}) {
  const [reportImg, setReportImg] = useState();
  const [reportImgType, setReportImgType] = useState();
  const [imagePopReport, setImagePopReport] = useState("hidden");
  const changeImageReport = () => {
    if (imagePopReport === "hidden") {
      setImagePopReport(" ");
    } else {
      setImagePopReport("hidden");
    }
  };
  const displayImgData = () => {
    if (reportImg != null && reportImgType != null) {
      return `data: ${reportImgType};charset=utf-8;base64,${Buffer.from(
        reportImg
      ).toString("base64")}`;
    }
  };
  const displayImgReport = (img, imgType) => {
    setReportImgType(imgType);
    setReportImg(img);
  };
  const closeReportWindow = () => {
    deleteReportData();
    changeReportPopClose();
  };
  useEffect(() => {
    getScholarshipsAdmin(reportId);
  }, []);
  return (
    <div
      style={{ top: imgTop }}
      className={`w-3/4 h-1/2 bg-white  fixed centerHorizontal usm:h-1/3 border`}
    >
      <div className="w-full h-4/5 relative overflow-y-auto">
        <table className="w-full h-auto">
          <thead className="w-full">
            <tr
              className="
                text-md
                font-semibold
                tracking-wide
                text-left text-gray-900
                bg-gray-100
                uppercase
                border-b border-gray-600
                w-full
              "
            >
              <th className="px-4 py-3 w-full">Level</th>
              <th className="px-4 py-3 w-full">Grade</th>
              <th className="px-4 py-3 w-full">Date Exam</th>
              <th className="px-4 py-3 w-full">Date Result</th>
              <th className="px-4 py-3 w-full">Exam</th>
            </tr>
          </thead>
          <tbody className="bg-white w-full h-auto">
            {scholarshipsAdmin.scholarshipsAdmin !== null ? (
              scholarshipsAdmin.scholarshipsAdmin[0] !== null ? (
                scholarshipsAdmin.scholarshipsAdmin.map((scho) =>
                  scho.reports.map((report) => (
                    <tr className="text-gray-700 w-full h-10">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold text-black">
                              {report.level}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-ms font-semibold border">
                        {report.grades}
                      </td>
                      <td className="px-4 py-3 text-sm border">
                        {report.dateOfExam}
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {report.dateOfResult}
                      </td>
                      <td
                        className="px-4 py-3 border cursor-pointer"
                        onClick={() => {
                          displayImgReport(report.examImg, report.examImgType);
                          changeImageReport();
                        }}
                      >
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold text-black">Exam</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )
              ) : (
                "No records yet"
              )
            ) : (
              <Spinner />
            )}
          </tbody>
        </table>
      </div>
      <div
        className="
          w-full
          h-1/5
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
          onClick={() => closeReportWindow()}
        >
          Close
        </button>
      </div>
      {/* handle images */}
      <div
        style={{ top: imgTop }}
        className={`w-1/2 h-full bg-white fixed centerHorizontal usm:h-1/3 border ${imagePopReport}`}
      >
        <div className="w-full h-full relative">
          <img
            src={reportImg !== null ? displayImgData() : " "}
            className="w-full h-full bg-cover"
          />
          <button
            className="w-10 h-10 absolute top-0 right-0 text-4xl text-gray-400"
            onClick={() => changeImageReport()}
            type="button"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

StudentReportsAdmin.propTypes = {
  imgTop: PropTypes.number.isRequired,
  reportId: PropTypes.string.isRequired,
  changeReportPopClose: PropTypes.func.isRequired,
  getScholarshipsAdmin: PropTypes.func.isRequired,
  deleteReportData: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  scholarshipsAdmin: state.scholarshipsAdmin,
});

export default connect(mapStateToProps, {
  getScholarshipsAdmin,
  deleteReportData,
})(StudentReportsAdmin);
