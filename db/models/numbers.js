const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  number: {
    required: true,
    type: String,
  },
});

module.exports = {
  dataSchema,
};
