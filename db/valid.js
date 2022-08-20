const mongoose = require("mongoose");
const { dataSchema } = require("./models/model");

module.exports = mongoose.model("ValidNumbers", dataSchema);
