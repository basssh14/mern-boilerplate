const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    banks: [{
        bank: {
            type: String,
            required: true,
        },
        branchName: {
            type: String,
            require: true,
        },
        accTitle: {
            type: String,
            require: true,
        },
        accNumber: {
            type: String,
            require: true,
            unique: true,
        },
        accIban: {
            type: String,
            required: true,
        },
        checkImg: {
            type: Buffer,
        },
        checkImgType: {
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
bankAccountSchema.set("toObject", { virtuals: true });
bankAccountSchema.set("toJSON", { virtuals: true });
bankAccountSchema.virtual("coverImagePath").get(function() {
    // if (this.checkImg != null && this.checkImgType != null) {
    //     return `data: ${
    //   this.checkImgType
    // };charset=utf-8;base64,${this.checkImg.toString("base64")}`;
    // }
    return "this is working";
});

module.exports = bankAccount = mongoose.model("bankAccount", bankAccountSchema);