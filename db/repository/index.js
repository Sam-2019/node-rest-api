const { MESSAGE, justBankIDs } = require("../../utils/constants");
const { model } = require("../model");
const Model = model("number");

const getSaved = async () => {
  return await Model.find({
    bank_id: {
      $in: justBankIDs,
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
  return await Model.find({ message: MESSAGE, is_momo_active: false });
};

const getMomoStatus = async (data) => {
  return await Model.find({ is_momo_active: data });
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
  const data = await getMomoStatus(false);
  if (data) return;

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
  const data = await getMomoStatus(true);
  if (data) return;

  const res = await Model.updateMany(
    {
      bank_id: {
        $in: justBankIDs,
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

const updateValidNumber = async (body, newInfo) => {
  await Model.findByIdAndUpdate(
    newInfo[0].id,
    {
      $set: {
        name: body.data.account_name,
        account_number: body.data.account_number,
        bank_id: body.data.bank_id,
        is_momo_active: true,
      },
    },
    {
      new: false,
    }
  );
};

const updateInvalidNumber = async (error, newInfo) => {
  await Model.findByIdAndUpdate(
    newInfo[0].id,
    {
      $set: {
        message: error.error.message,
        is_momo_active: false,
      },
    },
    {
      new: false,
    }
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
  updateValidNumber,
  updateInvalidNumber,
  Model,
};
