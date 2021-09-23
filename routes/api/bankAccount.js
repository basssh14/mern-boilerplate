const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const BankAccount = require("../../models/BankAccount");

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

//@route GET api/bankAccount
//@desc give us the req.user object back
//@access private

router.get("/", auth, async(req, res) => {
    try {
        let bankAccount = await BankAccount.findOne({ user: req.user.id });
        res.json(bankAccount);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
});

//@route POST api/bankAccount
//@desc create a new bank account
//@access private

router.post(
    "/", [
        auth, [
            check("bank", "Please select a bank").not().isEmpty().trim().escape(),
            check("branchName", "Please enter a valid branch name")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accTitle", "Please enter a account title")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accNumber", "Please enter a valid account number")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accIban", "Please enter a valid account iban")
            .not()
            .isEmpty()
            .isLength({ max: 29, min: 29 })
            .trim()
            .escape(),
            check("imageToProcess", "Please upload image file").not().isEmpty(),
        ],
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("entra1");
            return res.status(400).json({ errors: errors.array() });
        }
        const { bank, branchName, accTitle, accNumber, accIban, imageToProcess } =
        req.body;
        const userId = req.user.id;
        const newBank = {
            bank,
            branchName,
            accTitle,
            accNumber,
            accIban,
            checkImg: "",
            checkImgType: "",
        };
        if (imageToProcess !== null) {
            const newImg = JSON.parse(imageToProcess);
            if (newImg !== null) {
                newBank.checkImg = new Buffer.from(newImg.data, "base64");
                newBank.checkImgType = newImg.type;
            }
        }
        let userBanks = await BankAccount.findOne({ user: userId });

        if (userBanks === null) {
            try {
                const bankUser = new BankAccount({
                    user: req.user.id,
                    banks: [newBank],
                });

                await bankUser.save();
                res.redirect("/api/bankAccount");
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server error bank account total");
            }
        } else {
            try {
                if (
                    userBanks.banks.find((element) => element.accNumber === accNumber)
                ) {
                    return res
                        .status(400)
                        .json({ errors: [{ msg: "Account number already registered" }] });
                }

                userBanks.banks.push(newBank);
                await userBanks.save();
                res.redirect("/api/bankAccount");
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Server Error bank account new");
            }
        }
    }
);

//@route POST api/parents/edit/:bankAccountId
//@desc edit existing parent route
//@access private

router.post(
    "/edit/:bankAccountId", [
        auth, [
            check("bank", "Please select a bank").not().isEmpty().trim().escape(),
            check("branchName", "Please enter a valid branch name")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accTitle", "Please enter a account title")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accNumber", "Please enter a valid account number")
            .not()
            .isEmpty()
            .trim()
            .escape(),
            check("accIban", "Please enter a valid account iban")
            .not()
            .isEmpty()
            .isLength({ max: 29, min: 29 })
            .trim()
            .escape(),
            check("imageToProcess", "Please upload image file").not().isEmpty(),
        ],
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { bank, branchName, accTitle, accNumber, accIban, imageToProcess } =
        req.body;
        const userId = req.user.id;
        const newBank = {
            bank,
            branchName,
            accTitle,
            accNumber,
            accIban,
            checkImg: "",
            checkImgType: "",
        };
        console.log(typeof imageToProcess);
        if (imageToProcess !== null) {
            const newImg =
                typeof imageToProcess === "string" ?
                JSON.parse(imageToProcess) :
                imageToProcess;
            if (newImg !== null) {
                newBank.checkImg = new Buffer.from(newImg.data, "base64");
                newBank.checkImgType = newImg.type;
            }
        }

        try {
            const userBank = await BankAccount.findOne({ user: userId });

            if (
                userBank.banks.find(
                    (element) => element.id === req.params.bankAccountId
                ) === undefined
            ) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Bank doesnt exists" }] });
            }
            // if (userBank.parents.find((element) => element.cnic === cnic)) {
            //     return res
            //         .status(400)
            //         .json({ errors: [{ msg: "Parent cnic already registered" }] });
            // } else {
            const indexToUpdate = userBank.banks
                .map((element) => element.id)
                .indexOf(req.params.bankAccountId);
            userBank.banks[indexToUpdate] = newBank;
            await userBank.save();
            res.redirect("/api/bankAccount");
            // }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;