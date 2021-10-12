const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const app = express();
const bodyParser = require("body-parser");
const Scholarships = require("../../models/Scholarships");
const User = require("../../models/Users");
const Applicants = require("../../models/Applicants");
const BankAccount = require("../../models/BankAccount");
app.use(
  bodyParser.json({
    extended: true,
    limit: "500mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "500mb",
  })
);
//app.use(bodyParser.urlencoded({ limit: "500MB", extended: true }));

//@route GET api/scholarships
//@desc give us the req.user object back
//@access private

router.get("/:userId", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      let scholarships = await Scholarships.find();
      let userScho = scholarships.map((scho) =>
        scho.scholarships.find((scholarship) => {
          if (scholarship.applicant == req.params.userId) {
            return scholarship;
          }
        })
      );
      res.send(userScho === undefined ? null : userScho);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});
//@route GET api/scholarships
//@desc get all the scholarships
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      let scholarships = await Scholarships.find();
      let applicants = await Applicants.find();
      let banks = await BankAccount.find();
      let newScho = [];
      const check = async () => {
        scholarships.map((scho) => {
          let z = {
            user: scho.user,
            scholarships: [],
          };
          scho.scholarships.map((scho2) => {
            applicants.map((app) => {
              app.applicants.map((appFinal) => {
                if (String(appFinal._id) === String(scho2.applicant)) {
                  banks.map((bank) => {
                    bank.banks.map((bankFinal) => {
                      if (String(bankFinal._id) === String(scho2.bankAccount)) {
                        let y = {
                          studentId: appFinal._id,
                          cnic: appFinal.cnic,
                          name: appFinal.name,
                          requiredFees: scho2.requiredFees,
                          bankName: bankFinal.bank,
                          bankAcc: bankFinal.accNumber,
                        };

                        z.scholarships.push(y);
                      }
                    });
                  });
                }
              });
            });
          });
          newScho.push(z);
        });
      };
      await check();
      //console.log(scholarships[0].scholarships);
      // console.log(newScho);
      res.send(newScho);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
//613a61042ec69d5e6cd584a3
