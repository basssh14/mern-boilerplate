const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Flag = require("../../models/Flags");
const Note = require("../../models/Notes");
const Todo = require("../../models/Todos");
const { ensureAuthenticated } = require("../../config/auth");
const app = express();
//set the body parser (allow us to use the input from user)
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
});

//@route GET api/users
//@desc Test this route
//@access public

router.get("/", (req, res) => {
    res.json({ msg: "user route" });
});

//@route POST api/users
//@desc  register a new user
//@access public

router.post(
    "/",
    jsonParser, [
        //test everything
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 7,
        }),
    ],
    async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, name, password } = req.body;
        let tipo;
        let level;
        try {
            //check if user exists
            let user = await User.findOne({ email });
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Email is already registered" }] });
            }
            if (req.body.tipo !== null) {
                tipo = req.body.tipo;
                level = req.body.level;
                user = new User({
                    name,
                    email,
                    password,
                    tipo,
                    level,
                });
            } else {
                //register user
                user = new User({
                    name,
                    email,
                    password,
                });
            }

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
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
            res.status(500).send("Server Error");
        }
    }
);

//@route GET api/users/createDBS
//@desc  create flags and notes db for user
//@access private
router.get("/createDBS", [ensureAuthenticated], async(req, res) => {
    Note.findOne({ user: req.user.id }).then((currentUser) => {
        if (currentUser) {
            return res.redirect("https://gentle-castle-34317.herokuapp.com");
            //return res.redirect("http://localhost:3000/");
        } else {
            new Flag({
                    user: req.user.id,
                    tipo: "x",
                    color: "x",
                    title: "x",
                })
                .save()
                .then(
                    new Note({
                        user: req.user.id,
                        text: "x",
                    }).save()
                )
                .then(() => {
                    res.redirect("https://gentle-castle-34317.herokuapp.com/");
                    //res.redirect("http://localhost:3000/");
                });
        }
    });
});

//@route delete api/users/delete
//@desc  delete a user, notes, flags, todos
//@access private
router.delete("/delete", [ensureAuthenticated], async(req, res) => {
    try {
        await Todo.deleteMany({ user: req.user.id });
        await Note.findOneAndDelete({ user: req.user.id });
        await Flag.findOneAndDelete({ user: req.user.id });
        await User.findOneAndDelete({ _id: req.user.id });
        req.logout();
        res.send("User deleted");
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

//test route
router.post("/test", jsonParser, async(req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;