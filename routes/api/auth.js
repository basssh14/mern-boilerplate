const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");
const passport = require("passport");
const User = require("../../models/Users");
//set the body parser (allow us to use the input from user)
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
});

//@route GET api/auth
//@desc give us the req.user object back
//@access private

router.get("/", auth, jsonParser, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//@route POST api/auth
//@desc Log in route
//@access public

router.post(
    "/",
    jsonParser, [
        check("email", "Email is required").isEmail(),
        check("password", "Password is required").not().isEmpty(),
    ],
    async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, password } = req.body;
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Invalid credential" }] });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Invalid credentials" }] });
            }
            //register the jwt
            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                config.get("secret"), { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }
    }
);

//play with google oauth
// router.get(
//     "/google",
//     passport.authenticate("google", {
//         scope: ["profile", "email"],
//     })
// );

// router.get(
//     "/google/redirect",
//     passport.authenticate("google", {
//         failureRedirect: "https://gentle-castle-34317.herokuapp.com/LoginFailure",
//         //failureRedirect: "http://localhost:3000/LoginFailure",
//     }),
//     function(req, res) {
//         res.redirect("/api/users/createDBS");
//     }
// );
//somethis
//@route GET api/auth/error_login
//@desc send us the error login route
//@access private

router.get("/error_login", (req, res) => {
    res.json({ errors: [{ msg: "Email or password invalid" }] });
});

//@route GET api/auth/logout
//@desc logout route
//@access private

router.get("/logout", auth, (req, res) => {
    req.logout();
    res.redirect("https://gentle-castle-34317.herokuapp.com");

    //res.json({ msg: "logged out" });
    //res.redirect("http://localhost:3000");
});

//@test route
router.get("/test", (req, res) => {
    res.redirect("http://localhost:3000/");
});

module.exports = router;