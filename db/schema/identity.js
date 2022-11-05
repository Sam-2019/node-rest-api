const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  other_name: {
    type: String
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  account_number: {
    type: String,
  },
  e164Format: {
    type: String,
  },
  numberType: {
    type: String,
  },
  bank_id: {
    type: String,
  },
  carrier: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  image: {
    type: String,
  },
  score: {
    type: Number,
  }
});

module.exports = {
  dataSchema,
};
