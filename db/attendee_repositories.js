const Attendees = require("./attendees");
const { MESSAGE } = require("../utils/constants");

const getSaved = async () => {
  return await Attendees.where("message", null).countDocuments();
};

const getFailed = async () => {
  return await Attendees.where("message", MESSAGE).countDocuments();
};

const getDataIDS = async () => {
  return await Attendees.find({ bank_id: null, message: null });
};

const getFailedIDS = async () => {
  return await Attendees.find({ message: MESSAGE });
};

const getRemaining = async () => {
  return await Attendees.find({ bank_id: null, message: null }).countDocuments();
};

const getAll = async () => {
  return await Attendees.find();
};

const getOne = async (phone) => {
  return await Attendees.findOne({ phone });
};

const getFailedWithIDS = async (data) => {
  return await Attendees.find({ bank_id: data, message: MESSAGE });
};

const updateMany = async (data) => {
  return await Attendees.updateMany(
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
