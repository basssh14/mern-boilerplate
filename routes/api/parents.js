const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Parents = require("../../models/Parents");

const app = express();
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
            check("cnicFront", "Please upload cnic front image").not().isEmpty(),
            check("cnicBack", "Please upload cnic back image").not().isEmpty(),
            check("salarySlip", "Please upload salary slip image").not().isEmpty(),
            check("qualiDoc", "Please upload qualification document image")
            .not()
            .isEmpty(),
            check("utilityOne", "Please upload utility image").not().isEmpty(),
            check("utilitySec", "Please upload utility image").not().isEmpty(),
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
            cnicFront,
            cnicBack,
            salarySlip,
            qualiDoc,
            utilityOne,
            utilitySec,
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
            cnicFrontImg: "",
            cnicFrontImgType: "",
            cnicBackImg: "",
            cnicBackImgType: "",
            salarySlipImg: "",
            salarySlipImgType: "",
            qualiDocImg: "",
            qualiDocImgType: "",
            utilityOneImg: "",
            utilityOneImgType: "",
            utilitySecImgType: "",
            utilitySecImg: "",
        };
        if (cnicFront !== null) {
            const newImg = JSON.parse(cnicFront);
            if (newImg !== null) {
                newParent.cnicFrontImg = new Buffer.from(newImg.data, "base64");
                newParent.cnicFrontImgType = newImg.type;
            }
        }
        if (cnicBack !== null) {
            const newImg = JSON.parse(cnicBack);
            if (newImg !== null) {
                newParent.cnicBackImg = new Buffer.from(newImg.data, "base64");
                newParent.cnicBackImgType = newImg.type;
            }
        }
        if (salarySlip !== null) {
            const newImg = JSON.parse(salarySlip);
            if (newImg !== null) {
                newParent.salarySlipImg = new Buffer.from(newImg.data, "base64");
                newParent.salarySlipImgType = newImg.type;
            }
        }
        if (qualiDoc !== null) {
            const newImg = JSON.parse(qualiDoc);
            if (newImg !== null) {
                newParent.qualiDocImg = new Buffer.from(newImg.data, "base64");
                newParent.qualiDocImgType = newImg.type;
            }
        }
        if (utilityOne !== null) {
            const newImg = JSON.parse(utilityOne);
            if (newImg !== null) {
                newParent.utilityOneImg = new Buffer.from(newImg.data, "base64");
                newParent.utilityOneImgType = newImg.type;
            }
        }
        if (utilitySec !== null) {
            const newImg = JSON.parse(utilitySec);
            if (newImg !== null) {
                newParent.utilitySecImg = new Buffer.from(newImg.data, "base64");
                newParent.utilitySecImgType = newImg.type;
            }
        }
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
            check("cnic", "Please enter a valid cnic")
            .not()
            .isEmpty()
            .trim()
            .escape()
            .isLength({ max: 15, min: 15 }),
            check("email", "Please enter a email").isEmail().normalizeEmail(),
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
            check("cnicFront", "Please upload cnic front image").not().isEmpty(),
            check("cnicBack", "Please upload cnic back image").not().isEmpty(),
            check("salarySlip", "Please upload salary slip image").not().isEmpty(),
            check("qualiDoc", "Please upload qualification document image")
            .not()
            .isEmpty(),
            check("utilityOne", "Please upload utility image").not().isEmpty(),
            check("utilitySec", "Please upload utility image").not().isEmpty(),
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
            cnicFront,
            cnicBack,
            salarySlip,
            qualiDoc,
            utilityOne,
            utilitySec,
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
            cnicFrontImg: "",
            cnicFrontImgType: "",
            cnicBackImg: "",
            cnicBackImgType: "",
            salarySlipImg: "",
            salarySlipImgType: "",
            qualiDocImg: "",
            qualiDocImgType: "",
            utilityOneImg: "",
            utilityOneImgType: "",
            utilitySecImg: "",
            utilitySecImgType: "",
        };
        if (cnicFront !== null) {
            const newImg =
                typeof cnicFront === "string" ? JSON.parse(cnicFront) : cnicFront;
            if (newImg !== null) {
                newParent.cnicFrontImg = new Buffer.from(newImg.data, "base64");
                newParent.cnicFrontImgType = newImg.type;
            }
        }
        if (cnicBack !== null) {
            const newImg =
                typeof cnicBack === "string" ? JSON.parse(cnicBack) : cnicBack;
            if (newImg !== null) {
                newParent.cnicBackImg = new Buffer.from(newImg.data, "base64");
                newParent.cnicBackImgType = newImg.type;
            }
        }
        if (salarySlip !== null) {
            const newImg =
                typeof salarySlip === "string" ? JSON.parse(salarySlip) : salarySlip;
            if (newImg !== null) {
                newParent.salarySlipImg = new Buffer.from(newImg.data, "base64");
                newParent.salarySlipImgType = newImg.type;
            }
        }
        if (qualiDoc !== null) {
            const newImg =
                typeof qualiDoc === "string" ? JSON.parse(qualiDoc) : qualiDoc;
            if (newImg !== null) {
                newParent.qualiDocImg = new Buffer.from(newImg.data, "base64");
                newParent.qualiDocImgType = newImg.type;
            }
        }
        if (utilityOne !== null) {
            const newImg =
                typeof utilityOne === "string" ? JSON.parse(utilityOne) : utilityOne;
            if (newImg !== null) {
                newParent.utilityOneImg = new Buffer.from(newImg.data, "base64");
                newParent.utilityOneImgType = newImg.type;
            }
        }
        if (utilitySec !== null) {
            const newImg =
                typeof utilitySec === "string" ? JSON.parse(utilitySec) : utilitySec;
            if (newImg !== null) {
                newParent.utilitySecImg = new Buffer.from(newImg.data, "base64");
                newParent.utilitySecImgType = newImg.type;
            }
        }
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