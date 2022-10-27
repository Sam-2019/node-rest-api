const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  mobile_number: {
    type: String,
  },
  number: {
    type: String,
  },
  name: {
    type: String,
  },
  account_number: {
    type: String,
  },
  bank_id: {
    type: String,
  },
  momo_active: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = {
  dataSchema,
};
