const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const app = express();
const bodyParser = require("body-parser");
const Scholarships = require("../../models/Scholarships");
const User = require("../../models/Users");
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

module.exports = router;
//613a61042ec69d5e6cd584a3
