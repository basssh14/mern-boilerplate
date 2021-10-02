const mongoose = require("mongoose");

const scholarshipsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    scholarships: [
      {
        applicant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "applicants",
        },
        status: {
          type: String,
          default: "PENDING",
        },
        adminNotes: {
          type: String,
        },
        parent1: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "parents",
        },
        parent2: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "parents",
        },
        institutionName: {
          type: String,
          required: true,
        },
        institutionType: {
          type: String,
          required: true,
        },
        level: {
          type: String,
          required: true,
        },
        pursuingEducation: {
          type: String,
          required: true,
        },
        institutionEmail: {
          type: String,
          required: true,
        },
        institutionPhone: {
          type: String,
          required: true,
        },
        institutionJoinDate: {
          type: String,
          required: true,
        },
        scholarshipStartDate: {
          type: String,
          required: true,
        },
        scholarshipEndDate: {
          type: String,
          required: true,
        },
        institutionAddress: {
          type: String,
          required: true,
        },
        idCardImg: {
          type: Buffer,
        },
        idCardImgType: {
          type: String,
        },
        admissionReceiptImg: {
          type: Buffer,
        },
        admissionReceiptImgType: {
          type: String,
        },
        requiredFees: {
          type: String,
          required: true,
        },
        reports: [
          {
            level: {
              type: String,
              required: true,
            },
            grades: {
              type: String,
              required: true,
            },
            dateOfExam: {
              type: String,
              required: true,
            },
            dateOfResult: {
              type: String,
              required: true,
            },
            resultReceivedOn: {
              type: String,
              required: true,
            },
            examImg: {
              type: Buffer,
            },
            examImgType: {
              type: String,
            },
          },
        ],
        bankAccount: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "bankAccount",
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

module.exports = scholarships = mongoose.model(
  "scholarships",
  scholarshipsSchema
);
