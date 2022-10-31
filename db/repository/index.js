const { MESSAGE, bankIDs } = require("../../utils/constants");
const { model } = require("../model");
const Model = model("attendee");

const getSaved = async () => {
  return await Model.find({
    bank_id: {
      $in: [
        `${bankIDs.mtn.id}`,
        `${bankIDs.airteltigo.id}`,
        `${bankIDs.vodafone.id}`,
      ],
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

const clearMessage = async (data) => {
  return await Model.updateMany(
    { bank_id: data, message: MESSAGE },
    { message: null }
  );
};

const addMomoActiveForInactiveNumbers = async () => {
  const res = await Model.updateMany(
    {
      message: MESSAGE,
    },
    { is_momo_active: false }
  );

  console.log("//INACTIVE");
  console.log(
    res.matchedCount,
    res.modifiedCount,
    res.acknowledged,
    res.upsertedId,
    res.upsertedCount
  );
};

const addMomoActiveForActiveNumbers = async () => {
  const res = await Model.updateMany(
    {
      bank_id: {
        $in: [
          `${bankIDs.mtn.id}`,
          `${bankIDs.airteltigo.id}`,
          `${bankIDs.vodafone.id}`,
        ],
      },
    },
    { is_momo_active: true }
  );
  console.log("//ACTIVE");
  console.log(
    res.matchedCount,
    res.modifiedCount,
    res.acknowledged,
    res.upsertedId,
    res.upsertedCount
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
  clearMessage,
  addMomoActiveForInactiveNumbers,
  addMomoActiveForActiveNumbers,
  Model,
};
