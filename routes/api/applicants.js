const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
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

//@route GET api/applicants
//@desc give us the req.user object back
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let applicants = await Applicants.findOne({ user: req.user.id });
    res.json(applicants);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//@route POST api/applicants
//@desc create a new applicant
//@access private

router.post(
  "/",
  [
    auth,
    [
      check("name", "Please enter a valid name")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("gender", "Please enter a valid gender").isIn(["female", "male"]),
      check("dateOfBirth", "Please enter a valid birthday")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("cnic", "Please enter a valid cnic")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .isLength({ max: 15, min: 15 }),
      check("email", "Please enter a valid email").isEmail().normalizeEmail(),
      check("mobile", "Please enter a  valid mobile phone")
        .not()
        .isEmpty()
        .isLength({ max: 12, min: 12 })
        .trim()
        .escape(),
      check("phone", "Please enter a valid phone number")
        .optional()
        .not()
        .isEmpty()
        .isLength({ max: 12, min: 12 })
        .trim()
        .escape(),
      check("cnicFront").not().isEmpty(),
      check("cnicBack").not().isEmpty(),
      check("studentPhoto").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      gender,
      dateOfBirth,
      cnic,
      email,
      mobile,
      phone,
      cnicFront,
      cnicBack,
      studentPhoto,
    } = req.body;
    const userId = req.user.id;
    const newApplicant = {
      name,
      gender,
      dateOfBirth,
      cnic,
      email,
      mobile,
      phone,
      cnicFrontImg: "",
      cnicFrontImgType: "",
      cnicBackImg: "",
      cnicBackImgType: "",
      studentImg: "",
      studentImgType: "",
    };
    if (cnicFront !== null) {
      const newImg = JSON.parse(cnicFront);
      if (newImg !== null) {
        newApplicant.cnicFrontImg = new Buffer.from(newImg.data, "base64");
        newApplicant.cnicFrontImgType = newImg.type;
      }
    }
    if (cnicBack !== null) {
      const newImg = JSON.parse(cnicBack);
      if (newImg !== null) {
        newApplicant.cnicBackImg = new Buffer.from(newImg.data, "base64");
        newApplicant.cnicBackImgType = newImg.type;
      }
    }
    if (studentPhoto !== null) {
      const newImg = JSON.parse(studentPhoto);
      if (newImg !== null) {
        newApplicant.studentImg = new Buffer.from(newImg.data, "base64");
        newApplicant.studentImgType = newImg.type;
      }
    }
    let userApplicants = await Applicants.findOne({ user: userId });
    let checkCnic = 0;
    let applicants = await Applicants.find();
    const test = applicants.map((app) =>
      app.applicants.map((app1) => {
        if (app1.cnic === cnic) {
          checkCnic++;
        }
      })
    );

    // .map((app2) => console.log(app2.cnic));
    // .find((app1) => app1.cnic === cnic);
    if (checkCnic > 0) {
      res.status(500).json({ errors: [{ msg: "Cnic already registered" }] });
    }
    if (userApplicants === null) {
      try {
        const ApplicantsUser = new Applicants({
          user: req.user.id,
          applicants: [newApplicant],
        });
        await ApplicantsUser.save();
        res.redirect("/api/applicants");
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ errors: [{ msg: "Error, please contact support 1" }] });
      }
    } else {
      try {
        // let applicants = await Applicants.find();
        // if (
        //   userApplicants.applicants.find((element) => element.cnic === cnic)
        // ) {
        //   return res
        //     .status(400)
        //     .json({ errors: [{ msg: "Cnic number already registered" }] });
        // }

        userApplicants.applicants.push(newApplicant);
        await userApplicants.save();
        res.redirect("/api/applicants");
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ errors: [{ msg: "Error, please contact support 2" }] });
      }
    }
  }
);

//@route POST api/applicants/edit/:appId
//@desc edit existing parent route
//@access private

router.post(
  "/edit/:applicationId",
  [
    auth,
    [
      check("name", "Please enter a valid name")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("gender", "Please enter a valid gender").isIn(["female", "male"]),
      check("dateOfBirth", "Please enter a valid birthday")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check("cnic", "Please enter a valid cnic")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .isLength({ max: 15, min: 15 }),
      check("email", "Please enter a valid email").isEmail().normalizeEmail(),
      check("mobile", "Please enter a  valid mobile phone")
        .not()
        .isEmpty()
        .isLength({ max: 12, min: 12 })
        .trim()
        .escape(),
      check("phone", "Please enter a valid phone number")
        .optional()
        .not()
        .isEmpty()
        .isLength({ max: 12, min: 12 })
        .trim()
        .escape(),
      check("cnicFront").not().isEmpty(),
      check("cnicBack").not().isEmpty(),
      check("studentPhoto").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      gender,
      dateOfBirth,
      cnic,
      email,
      mobile,
      phone,
      cnicFront,
      cnicBack,
      studentPhoto,
    } = req.body;
    const userId = req.user.id;
    const newApplicant = {
      name,
      gender,
      dateOfBirth,
      cnic,
      email,
      mobile,
      phone,
      cnicFrontImg: "",
      cnicFrontImgType: "",
      cnicBackImg: "",
      cnicBackImgType: "",
      studentImg: "",
      studentImgType: "",
    };
    if (cnicFront !== null) {
      const newImg =
        typeof cnicFront === "string" ? JSON.parse(cnicFront) : cnicFront;
      console.log(typeof cnicFront);
      console.log("hello");
      if (newImg !== null) {
        newApplicant.cnicFrontImg = new Buffer.from(newImg.data, "base64");
        newApplicant.cnicFrontImgType = newImg.type;
      }
    }
    if (cnicBack !== null) {
      const newImg =
        typeof cnicBack === "string" ? JSON.parse(cnicBack) : cnicBack;
      if (newImg !== null) {
        newApplicant.cnicBackImg = new Buffer.from(newImg.data, "base64");
        newApplicant.cnicBackImgType = newImg.type;
      }
    }
    if (studentPhoto !== null) {
      const newImg =
        typeof studentPhoto === "string"
          ? JSON.parse(studentPhoto)
          : studentPhoto;
      if (newImg !== null) {
        newApplicant.studentImg = new Buffer.from(newImg.data, "base64");
        newApplicant.studentImgType = newImg.type;
      }
    }

    try {
      const userApplication = await Applicants.findOne({ user: userId });

      if (
        userApplication.applicants.find(
          (element) => element.id === req.params.applicationId
        ) === undefined
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Application doesnt exists" }] });
      }
      // if (userApplication.parents.find((element) => element.cnic === cnic)) {
      //     return res
      //         .status(400)
      //         .json({ errors: [{ msg: "Parent cnic already registered" }] });
      // } else {
      const indexToUpdate = userApplication.applicants
        .map((element) => element.id)
        .indexOf(req.params.applicationId);
      userApplication.applicants[indexToUpdate] = newApplicant;
      await userApplication.save();
      res.redirect("/api/applicants");
      // }
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ errors: [{ msg: "Error, please contact support" }] });
    }
  }
);

module.exports = router;
