const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id_number: {
    type: Number,
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
  is_momo_active: {
    type: Boolean,
  },
  message: {
    type: String,
  },
});

module.exports = {
  dataSchema,
};
