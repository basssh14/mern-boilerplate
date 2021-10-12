const mongoose = require("mongoose");
const paymentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "applicants",
  },
  payments: [
    {
      cheqDate: {
        type: String,
        required: true,
      },
      cheqNumber: {
        type: String,
        required: true,
      },
      startMonth: {
        type: String,
        required: true,
      },
      endMonth: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
      dateOfApproval: {
        type: String,
        required: true,
      },
      approvedAmount: {
        type: String,
        required: true,
      },
      approvalGivenBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      approvedTo: {
        type: String,
        required: true,
      },
      approvedFrom:{
        type: String,
        required: true,
      },
      status:{
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = payments = mongoose.model("payments", paymentsSchema);