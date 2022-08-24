const Numbers = require("./numbers");
const { MESSAGE, ID } = require("../utils/constants");

const getSaved = async () => {
  return await Numbers.where("bank_id", ID).countDocuments();
};
const getFailed = async () => {
  return await Numbers.where("message", MESSAGE).countDocuments();
};
const getDataIDS = async () => {
  return await Numbers.find({ bank_id: null, message: null });
};
const getAll = async () => {
  return await Numbers.find();
};
const getOne = async (phone) => {
  return await Numbers.findOne({ phone });
};

module.exports = {
  getSaved,
  getFailed,
  getDataIDS,
  getAll,
  getOne,
};
