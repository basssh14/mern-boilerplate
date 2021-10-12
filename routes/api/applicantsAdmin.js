const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Applicants = require("../../models/Applicants");
const User = require("../../models/Users");
const Parents = require("../../models/Parents");
const BankAccount = require("../../models/BankAccount");
const Scholarships = require("../../models/Scholarships");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    extended: true,
    limit: "50000mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50000mb",
  })
);

//@route GET api/applicants
//@desc give us the req.user object back
//@access private

router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      let students = await Applicants.find();
      res.send(students);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});
//@route POST api/applicants
//@desc change status
//@access private

router.post(
  "/update",
  [
    auth,
    [
      check("status", "Please Select a status").not().isEmpty().trim().escape(),
      check("notes", "please enter some note").not().isEmpty().trim().escape(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("entra1");
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ _id: req.user.id });
      if (user.tipo === "admin") {
        let scholarships = await Scholarships.findOne({
          user: req.body.userId,
        });
        let target;
        let targetRight = scholarships.scholarships.map((scho) => {
          if (String(scho._id) === String(req.body.schoId)) {
            target = scho;
          }
        });
        const updateIndex = scholarships.scholarships
          .map((scho) => scho._id)
          .indexOf(String(req.body.schoId));
        target.status = req.body.status;
        target.adminNotes = req.body.notes;
        scholarships.scholarships[updateIndex] = target;
        await scholarships.save();
        res.redirect("/api/applicantsAdmin/scholarships");
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);
//@route GET api/applicants
//@desc give us the req.user object back
//@access private

router.get("/scholarships", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (user.tipo === "admin") {
      let newScholarships = [];
      let students = await Applicants.find();
      let scholarships = await Scholarships.find();
      let banks = await BankAccount.find();
      let parents = await Parents.find();
      const check = async () => {
        scholarships.map((scho) => {
          scho.scholarships.map((scho2) => {
            students.map((app) => {
              app.applicants.map((appFinal) => {
                if (String(appFinal._id) === String(scho2.applicant)) {
                  console.log("1");
                  banks.map((bank) => {
                    bank.banks.map((bankFinal) => {
                      if (String(bankFinal._id) === String(scho2.bankAccount)) {
                        console.log("2");
                        parents.map((par) => {
                          par.parents.map((parFinal) => {
                            if (
                              String(parFinal._id) === String(scho2.parent1)
                            ) {
                              console.log("3");
                              parents.map((par2) => {
                                par2.parents.map((par2Final) => {
                                  if (
                                    String(par2Final._id) ===
                                    String(scho2.parent2)
                                  ) {
                                    console.log("4");
                                    let x = {
                                      userId: scho.user,
                                      scholarshipId: scho2._id,
                                      status: scho2.status,
                                      adminNotes: scho2.adminNotes,
                                      institutionName: scho2.institutionName,
                                      intitutionType: scho2.institutionType,
                                      level: scho2.level,
                                      pursuingEducation:
                                        scho2.pursuingEducation,
                                      intitutionEmail: scho2.institutionEmail,
                                      intitutionPhone: scho2.institutionPhone,
                                      intitutionJoinDate:
                                        scho2.institutionJoinDate,
                                      scholarshipStartDate:
                                        scho2.scholarshipStartDate,
                                      scholarshipEndDate:
                                        scho2.scholarshipEndDate,
                                      intitutionAddress:
                                        scho2.institutionAddress,
                                      idCardImg: scho2.idCardImg,
                                      idCardImgType: scho2.idCardImgType,
                                      admissionReceiptImg:
                                        scho2.admissionReceiptImg,
                                      admissionReceiptImgType:
                                        scho2.admissionReceiptImgType,
                                      requiredFees: scho2.requiredFees,
                                      name: appFinal.name,
                                      gender: appFinal.gender,
                                      cnic: appFinal.cnic,
                                      dateOfBirth: appFinal.dateOfBirth,
                                      mobile: appFinal.mobile,
                                      phone: appFinal.phone,
                                      email: appFinal.email,
                                      cnicFrontImg: appFinal.cnicFrontImg,
                                      cnicFrontImgType:
                                        appFinal.cnicFrontImgType,
                                      cnicBackImg: appFinal.cnicBackImg,
                                      cnicBackImgType: appFinal.cnicBackImgType,
                                      studentImg: appFinal.studentImg,
                                      studentImgType: appFinal.studentImgType,
                                      par1Type: parFinal.type,
                                      par1Gender: parFinal.gender,
                                      par1Name: parFinal.name,
                                      par1Cnic: parFinal.cnic,
                                      par1Email: parFinal.email,
                                      par1Mobile: parFinal.mobile,
                                      par1Phone: parFinal.phone,
                                      par1CnicFrontImg: parFinal.cnicFrontImg,
                                      par1CnicFrontImgType:
                                        parFinal.cnicFrontImgType,
                                      par1CnicBackImg: parFinal.cnicBackImg,
                                      par1CnicBackImgType:
                                        parFinal.cnicBackImgType,
                                      par1SalarySlipImg: parFinal.salarySlipImg,
                                      par1SalarySlipImgType:
                                        parFinal.salarySlipImgType,
                                      par1QualiDocImg: parFinal.qualiDocImg,
                                      par1QualiDocImgType:
                                        parFinal.qualiDocImgType,
                                      par1UtilityOneImg: parFinal.utilityOneImg,
                                      par1UtilityOneImgType:
                                        parFinal.utilityOneImgType,
                                      par1UtilitySecImg: parFinal.utilitySecImg,
                                      par1UtilitySecImgType:
                                        parFinal.utilitySecImgType,
                                      par1FormBImg: parFinal.formBImg,
                                      par1FormBImgType: parFinal.formBImgType,
                                      par2Type: par2Final.type,
                                      par2Gender: par2Final.gender,
                                      par2Name: par2Final.name,
                                      par2Cnic: par2Final.cnic,
                                      par2Email: par2Final.email,
                                      par2Mobile: par2Final.mobile,
                                      par2Phone: par2Final.phone,
                                      par2CnicFrontImg: par2Final.cnicFrontImg,
                                      par2CnicFrontImgType:
                                        par2Final.cnicFrontImgType,
                                      par2CnicBackImg: par2Final.cnicBackImg,
                                      par2CnicBackImgType:
                                        par2Final.cnicBackImgType,
                                      par2SalarySlipImg:
                                        par2Final.salarySlipImg,
                                      par2SalarySlipImgType:
                                        par2Final.salarySlipImgType,
                                      par2QualiDocImg: par2Final.qualiDocImg,
                                      par2QualiDocImgType:
                                        par2Final.qualiDocImgType,
                                      par2UtilityOneImg:
                                        par2Final.utilityOneImg,
                                      par2UtilityOneImgType:
                                        par2Final.utilityOneImgType,
                                      par2UtilitySecImg:
                                        par2Final.utilitySecImg,
                                      par2UtilitySecImgType:
                                        par2Final.utilitySecImgType,
                                      par2FormBImg: par2Final.formBImg,
                                      par2FormBImgType: par2Final.formBImgType,
                                      bank: bankFinal.bank,
                                      branchName: bankFinal.branchName,
                                      accTitle: bankFinal.accTitle,
                                      accNumber: bankFinal.accNumber,
                                      accIban: bankFinal.accIban,
                                      checkImg: bankFinal.checkImg,
                                      checkImgType: bankFinal.checkImgType,
                                    };
                                    newScholarships.push(x);
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          });
        });
      };
      await check();
      res.send(newScholarships);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
