const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Parents = require("../../models/Parents");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//@route GET api/parents
//@desc give us the req.user object back
//@access private

router.get("/", auth, async(req, res) => {
    try {
        let parents = await Parents.findOne({ user: req.user.id });
        res.json(parents);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
});


//@route POST api/parents
//@desc create a new parent
//@access private

router.post(
    "/", [
        auth, [
            check("type", "Please enter a valid type").isIn(["parent", "guardian"]),
            check("gender", "Please enter a valid gender").isIn(["female", "male"]),
            check("name", "Please enter a name").not().isEmpty().trim().escape(),
            check("cnic", "Please enter a cnic").not().isEmpty().trim().escape().isLength({ max: 13, min: 13 }),
            check("email", "Please enter a email").isEmail().normalizeEmail(),
            check("mobile", "Please enter a mobile phone")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("phone", "Please enter a phone number")
            .not()
            .isEmpty()
            .trim()
            .escape(),
        ],
    ],
    async(req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("entra1");
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            type,
            gender,
            name,
            cnic,
            email,
            mobile,
            phone,
        } = req.body;
        const userId = req.user.id;
        const newParent = {
            type,
            gender,
            name,
            cnic,
            email,
            mobile,
            phone,
        };
        let parentsUser = await Parents.findOne({ user: userId });
        if (parentsUser === null) {
            console.log("not working");
            try {
                const parentUser = new Parents({
                    user: req.user.id,
                    parents: [newParent],
                });
                await parentUser.save();
                res.redirect("/api/parents");
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server error 1");
            }
        } else {
            console.log("working");
            try {
                if (parentsUser.parents.find((element) => element.cnic === cnic)) {
                    return res
                        .status(400)
                        .json({ errors: [{ msg: "Parent cnic already registered" }] });
                }

                parentsUser.parents.push(newParent);
                await parentsUser.save();
                res.redirect("/api/parents");
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server Error 2");
            }
        }
    }
);

//@route POST api/parents/edit/:parentId
//@desc edit existing parent route
//@access private

router.post(
    "/edit/:parentId", [
        auth, [
            check("type", "Please enter a valid type").isIn(["parent", "guardian"]),
            check("gender", "Please enter a valid gender").isIn(["male", "female"]),
            check("name", "Please enter a name").not().isEmpty().trim().escape(),
            check("cnic", "Please enter a cnic").not().isEmpty().trim().escape(),
            check("email", "Please enter a email").isEmail().normalizeEmail(),
            check("mobile", "Please enter a mobile phone")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("phone", "Please enter a phone number")
            .not()
            .isEmpty()
            .trim()
            .escape(),
        ],
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            type,
            gender,
            name,
            cnic,
            email,
            mobile,
            phone,
            cnicCopy,
            salarySlip,
            qualiDoc,
        } = req.body;
        const userId = req.user.id;
        const newParent = {
            type,
            gender,
            name,
            cnic,
            email,
            mobile,
            phone,
            cnicCopy,
            salarySlip,
            qualiDoc,
        };

        try {
            const parentsUser = await Parents.findOne({ user: userId });

            if (
                parentsUser.parents.find(
                    (element) => element.id === req.params.parentId
                ) === undefined
            ) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Parent doesnt exists" }] });
            }
            // if (parentsUser.parents.find((element) => element.cnic === cnic)) {
            //     return res
            //         .status(400)
            //         .json({ errors: [{ msg: "Parent cnic already registered" }] });
            // } else {
            const indexToUpdate = parentsUser.parents
                .map((element) => element.id)
                .indexOf(req.params.parentId);
            parentsUser.parents[indexToUpdate] = newParent;
            await parentsUser.save();
            res.redirect("/api/parents");
            // }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;