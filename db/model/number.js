const mongoose = require("mongoose");
const { dataSchema } = require("../schema/number");

module.exports = mongoose.model("Numbers", dataSchema);
