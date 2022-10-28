const { MESSAGE, bankIDs } = require("../../utils/constants");
const { model } = require("../model");
const Model = model("number");

const getSaved = async () => {
  return await Model.find({
    bank_id: {
      $in: [bankIDs.mtn.code, bankIDs.airteltigo.code, bankIDs.vodafone.code],
    },
  }).countDocuments();
};

const getFailed = async () => {
  return await Model.where("message", MESSAGE).countDocuments();
};

const getDataIDS = async () => {
  return await Model.find({ bank_id: null, message: null });
};

const getFailedIDS = async () => {
  return await Model.find({ message: MESSAGE });
};

const getRemaining = async () => {
  return await Model.find({
    bank_id: null,
    message: null,
  }).countDocuments();
};

const getAll = async () => {
  return await Model.find();
};

const getOne = async (phone) => {
  return await Model.findOne({ number: phone });
};

const getFailedWithIDS = async (data) => {
  return await Model.find({ bank_id: data, message: MESSAGE });
};

const updateMany = async (data) => {
  return await Model.updateMany(
    { bank_id: data, message: MESSAGE },
    { message: null }
  );
};

module.exports = {
  getSaved,
  getFailed,
  getDataIDS,
  getRemaining,
  getAll,
  getOne,
  getFailedWithIDS,
  updateMany,
  Model,
};
