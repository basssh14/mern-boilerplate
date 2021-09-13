const mongoose = require("mongoose");

const applicantsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    applicants: [{
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            require: true,
        },
        cnic: {
            type: String,
            require: true,
            unique: true,
        },
        dateOfBirth: {
            type: String,
            require: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        cnicFrontImg: {
            type: Buffer,
        },
        cnicFrontImgType: {
            type: String,
        },
        cnicBackImg: {
            type: Buffer,
        },
        cnicBackImgType: {
            type: String,
        },
        studentImg: {
            type: Buffer,
        },
        studentImgType: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
});

module.exports = applicants = mongoose.model("applicants", applicantsSchema);