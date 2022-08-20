const mongoose = require("mongoose");
const { dataSchema } = require("./models/numbers");

module.exports = mongoose.model("Numbers", dataSchema);
