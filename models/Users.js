const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
        default: "0",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tipo: {
        type: String,
        default: "student",
    },
});

module.exports = users = mongoose.model("users", usersSchema);