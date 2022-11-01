const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  other_name: {
    type: String,
  },
  phone: {
    type: String,
  },
  bank_id: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: Boolean,
  },
  gender: {
    type: String,
  },
  score: {
    type: String,
  },
  e164Format: {
    type: String,
  },
  numberType: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  carrier: {
    type: String,
  },
});

module.exports = {
  dataSchema,
};
