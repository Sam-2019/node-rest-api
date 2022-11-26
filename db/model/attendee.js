const mongoose = require("mongoose");
const { dataSchema } = require("../schema/attendee");

module.exports = mongoose.model("Attendees", dataSchema);