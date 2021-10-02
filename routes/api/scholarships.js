const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const app = express();
const bodyParser = require("body-parser");
const Scholarships = require("../../models/Scholarships");
app.use(
  bodyParser.json({
    extended: true,
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
//app.use(bodyParser.urlencoded({ limit: "500MB", extended: true }));

//@route GET api/scholarships
//@desc give us the req.user object back
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let scholarships = await Scholarships.findOne({ user: req.user.id });
    res.json(scholarships);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/scholarships
//@desc create a new scholarship
//@access private

router.post(
  "/",
  [
    auth,
    [
      check("applicant", "Please select a valid applicant")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("parent1", "Please select a parent")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("parent2", "Please select a parent")
        .optional()
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionName", "Please enter a institution name")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionType", "Please enter a valid institution type")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("level", "Please enter a valid institution level")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("pursuingEducation", "Please enter a valid pursuing education")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionEmail", "Please enter a valid institution email")
        .isEmail()
        .normalizeEmail(),
      check("institutionPhone", "Please enter a valid institution phone")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionJoinDate", "Please enter a valid institution join date")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check(
        "scholarshipStartDate",
        "Please enter a valid scholarship start date"
      )
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("scholarshipEndDate", "Please enter a valid scholarship end date")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionAddress", "Please enter a valid institution address")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("idCard", "Please upload id card photo").not().isEmpty(),
      check("admissionReceipt", "Please upload admission receipt photo")
        .not()
        .isEmpty(),
      check("requiredFees", "Please enter a valid fee")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("reports", "Please enter a valid report")
        .optional()
        .not()
        .isEmpty(),
      check("bankAccount", "Please select a valid bank account")
        .not()
        .isEmpty()
        .trim()
        .escape(),
    ],
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("entra1");
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      applicant,
      parent1,
      parent2,
      institutionName,
      institutionType,
      level,
      pursuingEducation,
      institutionEmail,
      institutionPhone,
      institutionJoinDate,
      institutionAddress,
      idCard,
      admissionReceipt,
      requiredFees,
      reports,
      bankAccount,
      scholarshipEndDate,
      scholarshipStartDate,
    } = req.body;
    const userId = req.user.id;
    const newScholarship = {
      applicant,
      parent1,
      parent2,
      institutionName,
      institutionType,
      level,
      pursuingEducation,
      institutionEmail,
      institutionPhone,
      institutionJoinDate,
      institutionAddress,
      requiredFees,
      scholarshipEndDate,
      scholarshipStartDate,
      reports,
      bankAccount,
      idCardImg: "",
      idCardImgType: "",
      admissionReceiptImg: "",
      admissionReceiptImgType: "",
    };
    if (idCard !== null) {
      const newImg = JSON.parse(idCard);
      if (newImg !== null) {
        newScholarship.idCardImg = new Buffer.from(newImg.data, "base64");
        newScholarship.idCardImgType = newImg.type;
      }
    }
    if (admissionReceipt !== null) {
      const newImg = JSON.parse(admissionReceipt);
      if (newImg !== null) {
        newScholarship.admissionReceiptImg = new Buffer.from(
          newImg.data,
          "base64"
        );
        newScholarship.admissionReceiptImgType = newImg.type;
      }
    }
    // if (studentPhoto !== null) {
    //     const newImg = JSON.parse(studentPhoto);
    //     if (newImg !== null) {
    //         newApplicant.studentImg = new Buffer.from(newImg.data, "base64");
    //         newApplicant.studentImgType = newImg.type;
    //     }
    // }
    let userScholarships = await Scholarships.findOne({ user: userId });
    if (userScholarships === null) {
      try {
        const ScholarshipUser = new Scholarships({
          user: req.user.id,
          scholarships: [newScholarship],
        });
        await ScholarshipUser.save();
        res.redirect("/api/scholarships");
      } catch (err) {
        console.log(err.message);
        console.log("error 1");
        res.status(500).send("Server error bank account total");
      }
    } else {
      try {
        // if (
        //     userScholarships.scholarships.find((element) => element.cnic === cnic)
        // ) {
        //     console.log("error 2");
        //     return res
        //         .status(400)
        //         .json({ errors: [{ msg: "Cnic number already registered" }] });
        // }

        userScholarships.scholarships.push(newScholarship);
        await userScholarships.save();
        res.redirect("/api/scholarships");
      } catch (err) {
        console.log(err.message);
        console.log("error 3");
        res.status(500).send("Server Error bank account new");
      }
    }
  }
);

//@route POST api/scholarships/edit/:appId
//@desc edit existing parent route
//@access private

router.post(
  "/edit/:scholarshipId",
  [
    auth,
    [
      check("applicant", "Please select a valid applicant")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("parent1", "Please select a parent")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("parent2", "Please select a parent")
        .optional()
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionName", "Please enter a institution name")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionType", "Please enter a valid institution type")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("level", "Please enter a valid institution level")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("pursuingEducation", "Please enter a valid pursuing education")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionEmail", "Please enter a valid institution email")
        .isEmail()
        .normalizeEmail(),
      check("institutionPhone", "Please enter a valid institution phone")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionJoinDate", "Please enter a valid institution join date")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check(
        "scholarshipStartDate",
        "Please enter a valid scholarship start date"
      )
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("scholarshipEndDate", "Please enter a valid scholarship end date")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("institutionAddress", "Please enter a valid institution address")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("idCard", "Please upload id card photo").not().isEmpty(),
      check("admissionReceipt", "Please upload admission receipt photo")
        .not()
        .isEmpty(),
      check("requiredFees", "Please enter a valid fee")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("reports", "Please enter a valid report")
        .optional()
        .not()
        .isEmpty(),
      check("bankAccount", "Please select a valid bank account")
        .not()
        .isEmpty()
        .trim()
        .escape(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      applicant,
      parent1,
      parent2,
      institutionName,
      institutionType,
      level,
      pursuingEducation,
      institutionEmail,
      institutionPhone,
      institutionJoinDate,
      institutionAddress,
      idCard,
      admissionReceipt,
      requiredFees,
      reports,
      bankAccount,
      scholarshipEndDate,
      scholarshipStartDate,
    } = req.body;
    const userId = req.user.id;
    const newScholarship = {
      applicant,
      parent1,
      parent2,
      institutionName,
      institutionType,
      level,
      pursuingEducation,
      institutionEmail,
      institutionPhone,
      institutionJoinDate,
      institutionAddress,
      requiredFees,
      scholarshipEndDate,
      scholarshipStartDate,
      reports,
      bankAccount,
      idCardImg: "",
      idCardImgType: "",
      admissionReceiptImg: "",
      admissionReceiptImgType: "",
    };
    if (idCard !== null) {
      const newImg = typeof idCard === "string" ? JSON.parse(idCard) : idCard;
      if (newImg !== null) {
        newScholarship.idCardImg = new Buffer.from(newImg.data, "base64");
        newScholarship.idCardImgType = newImg.type;
      }
    }
    if (admissionReceipt !== null) {
      const newImg =
        typeof admissionReceipt === "string"
          ? JSON.parse(admissionReceipt)
          : admissionReceipt;
      if (newImg !== null) {
        newScholarship.admissionReceiptImg = new Buffer.from(
          newImg.data,
          "base64"
        );
        newScholarship.admissionReceiptImgType = newImg.type;
      }
    }
    // if (studentPhoto !== null) {
    //     const newImg = JSON.parse(studentPhoto);
    //     if (newImg !== null) {
    //         newApplicant.studentImg = new Buffer.from(newImg.data, "base64");
    //         newApplicant.studentImgType = newImg.type;
    //     }
    // }

    try {
      const userScholarships = await Scholarships.findOne({ user: userId });

      if (
        userScholarships.scholarships.find(
          (element) => element.id === req.params.scholarshipId
        ) === undefined
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Scholarship doesnt exists" }] });
      }
      // if (userScholarships.parents.find((element) => element.cnic === cnic)) {
      //     return res
      //         .status(400)
      //         .json({ errors: [{ msg: "Parent cnic already registered" }] });
      // } else {
      const indexToUpdate = userScholarships.scholarships
        .map((element) => element.id)
        .indexOf(req.params.scholarshipId);
      userScholarships.scholarships[indexToUpdate] = newScholarship;
      await userScholarships.save();
      res.redirect("/api/scholarships");
      // }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//@route POST api/scholarships/uploadReport
//@desc upload a new report
//@access private

router.post(
  "/uploadReport/:scholarshipId",
  [
    auth,
    [
      check("level", "Please select a valid level")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("grades", "Please enter a grade").not().isEmpty().trim().escape(),
      check("dateOfExam", "Please select a date of exam")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("dateOfResult", "Please select a date of result")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("resultReceivedOn", "Please select a Received on")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("examImg", "Please upload exam Photo").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      level,
      grades,
      dateOfExam,
      dateOfResult,
      resultReceivedOn,
      examImg,
    } = req.body;
    const userId = req.user.id;
    const newScholarship = {
      level,
      grades,
      dateOfExam,
      dateOfResult,
      resultReceivedOn,
      examImg: " ",
      examImgType: " ",
    };
    if (examImg !== null) {
      const newImg = JSON.parse(examImg);
      if (newImg !== null) {
        newScholarship.examImg = new Buffer.from(newImg.data, "base64");
        newScholarship.examImgType = newImg.type;
      }
    }
    // if (studentPhoto !== null) {
    //     const newImg = JSON.parse(studentPhoto);
    //     if (newImg !== null) {
    //         newApplicant.studentImg = new Buffer.from(newImg.data, "base64");
    //         newApplicant.studentImgType = newImg.type;
    //     }
    // }

    try {
      const userScholarships = await Scholarships.findOne({ user: userId });

      if (
        userScholarships.scholarships.find(
          (element) => element.id === req.params.scholarshipId
        ) === undefined
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Scholarship doesnt exists" }] });
      }
      // if (userScholarships.parents.find((element) => element.cnic === cnic)) {
      //     return res
      //         .status(400)
      //         .json({ errors: [{ msg: "Parent cnic already registered" }] });
      // } else {
      const indexToUpdate = userScholarships.scholarships
        .map((element) => element.id)
        .indexOf(req.params.scholarshipId);
      userScholarships.scholarships[indexToUpdate].reports.push(newScholarship);
      await userScholarships.save();
      res.redirect("/api/scholarships");
      // }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
