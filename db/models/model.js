const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    required: true,
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
});

module.exports = {
  dataSchema,
};
