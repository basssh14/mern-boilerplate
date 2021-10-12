const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Options = require("../../models/Options");
const User = require("../../models/Users");

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

//@route GET api/options
//@desc return all options
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let options = await Options.find();
    res.send(options);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/bankAccount
//@desc create a new bank account
//@access private

router.post(
  "/",
  [
    auth,
    [
      check("type", "Please select a type").not().isEmpty().trim().escape(),
      check("name", "Please select a name").not().isEmpty().trim().escape(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("entra1");
      return res.status(400).json({ errors: errors.array() });
    }
    const newBank = {
      type: req.body.type,
      name: req.body.name,
    };

    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      try {
        const option = new Options(newBank);
        await option.save();
        res.redirect("/api/options");
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
      }
    }
  }
);
module.exports = router;
