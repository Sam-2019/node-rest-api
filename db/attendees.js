const mongoose = require("mongoose");
const { dataSchema } = require("./models/attendees");

module.exports = mongoose.model("Attendees", dataSchema);
