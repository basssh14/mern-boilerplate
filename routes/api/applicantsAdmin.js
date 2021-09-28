const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Applicants = require("../../models/Applicants");
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

//@route GET api/applicants
//@desc give us the req.user object back
//@access private

router.get("/", auth, async(req, res) => {
    try {
        let user = await User.findOne({ _id: req.user.id });
        if(user.tipo === "admin"){
            let students = await User.find({tipo: "student"});
            res.send(students);
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
});



module.exports = router;