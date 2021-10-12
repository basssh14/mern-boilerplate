const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Payments = require("../../models/Payments");
const User = require("../../models/Users");
const Applicants = require("../../models/Applicants");

const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    extended: true,
    limit: "5mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb",
  })
);
//app.use(bodyParser.urlencoded({ limit: "500MB", extended: true }));

//@route GET api/payments
//@desc give us the req.user object back
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      let newPayments = [];
      let payments = await Payments.find();
      let applicants = await Applicants.find();
      const check = async () => {
        payments.map((payment) => {
          applicants.map((app) => {
            app.applicants.map((appFinal) => {
              if (String(appFinal._id) === String(payment.user)) {
                payment.payments.map((payFinal) => {
                  let x = {
                    cheqDate: payFinal.cheqDate,
                    cheqNumber: payFinal.cheqNumber,
                    startMonth: payFinal.startMonth,
                    endMonth: payFinal.endMonth,
                    amount: payFinal.amount,
                    dateOfApproval: payFinal.dateOfApproval,
                    approvedAmount: payFinal.approvedAmount,
                    approvalGivenBy: payFinal.approvalGivenBy,
                    approvedTo: payFinal.approvedTo,
                    approvedFrom: payFinal.approvedFrom,
                    status: payFinal.status,
                    cnic: appFinal.cnic,
                    name: appFinal.name,
                  };
                  newPayments.push(x);
                });
              }
            });
          });
        });
      };
      await check();
      res.send(newPayments);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/payments
//@desc create a new applicant
//@access private

router.post(
  "/",
  [
    auth,
    [
      check("cheqDate", "Please enter a cheque date")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("cheqNumber", "Please enter a cheque number")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("startMonth", "Please enter a start month")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("endMonth", "Please enter a end month")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("amount", "Please enter a amount").not().isEmpty().trim().escape(),
      check("dateOfApproval", "Please enter a date of approval")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("approvedAmount", "Please enter a approved amount")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("approvalGivenBy", "Please enter a approval given by")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("approvedTo", "Please enter a approved to")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("approvedFrom", "Please enter a approved from")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("status", "Please enter a status").isIn(["approved", "denied"]),
    ],
  ],
  async (req, res) => {
    try {
      let user = await User.findOne({ _id: req.user.id });
      if (user.tipo === "admin") {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {
          cheqDate,
          cheqNumber,
          startMonth,
          endMonth,
          amount,
          dateOfApproval,
          approvedAmount,
          approvalGivenBy,
          approvedTo,
          approvedFrom,
          status,
        } = req.body;
        const userId = req.user.id;
        const newPayment = {
          cheqDate,
          cheqNumber,
          startMonth,
          endMonth,
          amount,
          dateOfApproval,
          approvedAmount,
          approvalGivenBy: userId,
          approvedTo,
          approvedFrom,
          status,
        };
        let userPayments = await Payments.findOne({ user: approvalGivenBy });
        if (userPayments === null) {
          try {
            const PaymentsUser = new Payments({
              user: approvalGivenBy,
              payments: [newPayment],
            });
            await PaymentsUser.save();
            res.redirect("/api/payments");
          } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
          }
        } else {
          try {
            userPayments.payments.push(newPayment);
            await userPayments.save();
            res.redirect("/api/payments");
          } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error bank account new");
          }
        }
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
