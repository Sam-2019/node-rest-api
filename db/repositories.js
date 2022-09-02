const Numbers = require("./numbers");
const { MESSAGE } = require("../utils/constants");

const getSaved = async () => {
  return await Numbers.where("message", null).countDocuments();
};

const getFailed = async () => {
  return await Numbers.where("message", MESSAGE).countDocuments();
};

const getDataIDS = async () => {
  return await Numbers.find({ bank_id: null, message: null });
};

const getFailedIDS = async () => {
  return await Numbers.find({ message: MESSAGE });
};

const getRemaining = async () => {
  return await Numbers.find({ bank_id: null, message: null }).countDocuments();
};

const getAll = async () => {
  return await Numbers.find();
};

const getOne = async (phone) => {
  return await Numbers.findOne({ phone });
};

const getFailedWithIDS = async (data) => {
  return await Numbers.find({ bank_id: data, message: MESSAGE });
};

const updateMany = async (data) => {
  return await Numbers.updateMany(
    { bank_id: data, message: MESSAGE },
    { message: null }
  );
};

module.exports = {
  getSaved,
  getFailed,
  getDataIDS,
  getFailedIDS,
  getRemaining,
  getAll,
  getOne,
  getFailedWithIDS,
  updateMany,
};
