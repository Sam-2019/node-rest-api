const mongoose = require("mongoose");
const { dataSchema } = require("../schema/identity");

module.exports = mongoose.model("Identity", dataSchema);