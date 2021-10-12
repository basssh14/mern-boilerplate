const mongoose = require("mongoose");
const optionsSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
module.exports = options = mongoose.model("options", optionsSchema);
