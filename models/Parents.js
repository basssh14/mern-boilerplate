const mongoose = require("mongoose");

const parentsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    parents: [{
        type: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        cnic: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
});

module.exports = parents = mongoose.model("parents", parentsSchema);