const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");


//test stuff

// enable files upload

///@route GET api/uploads/parents/cnicphotos
//@desc route to upload photos
//@access private
router.post('/parents/cnicphotos', auth, async(req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let cnicCopy = req.files.cnicCopy;

            //we might need to change this to __dirname in the future.

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            cnicCopy.mv(__dirname + '/img/parents/cnic/' + cnicCopy.name);

            //send response
            // res.send({
            //     status: true,
            //     message: 'File is uploaded',
            //     data: {
            //         name: cnicCopy.name,
            //         mimetype: cnicCopy.mimetype,
            //         size: cnicCopy.size
            //     }
            // });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
///@route GET api/uploads/parents/cnicphotos
//@desc route to upload photos
//@access private
router.post('/parents/salaryphotos', auth, async(req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let salarySlip = req.files.salarySlip;

            //we might need to change this to __dirname in the future.

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            salarySlip.mv('./img/parents/cnic/' + salarySlip.name);

            //send response
            // res.send({
            //     status: true,
            //     message: 'File is uploaded',
            //     data: {
            //         name: salarySlip.name,
            //         mimetype: salarySlip.mimetype,
            //         size: salarySlip.size
            //     }
            // });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
///@route GET api/uploads/parents/cnicphotos
//@desc route to upload photos
//@access private
router.post('/parents/qualiDocphotos', auth, async(req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let qualiDoc = req.files.qualiDoc;

            //we might need to change this to __dirname in the future.

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            qualiDoc.mv('img/parents/cnic/' + qualiDoc.name);

            //send response
            // res.send({
            //     status: true,
            //     message: 'File is uploaded',
            //     data: {
            //         name: qualiDoc.name,
            //         mimetype: qualiDoc.mimetype,
            //         size: qualiDoc.size
            //     }
            // });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;