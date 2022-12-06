const { MESSAGE, TIMEOUT, justBankIDs } = require("../../utils/constants");
const { model } = require("../model");
const { ACTIVE_MODEL } = require("../../utils/config");
const Model = model(ACTIVE_MODEL);

const getSaved = async () => {
  try {
    return await Model.find({ is_momo_active: true }).countDocuments();
  } catch (error) {}
};

const getFailed = async () => {
  try {
    return await Model.where("message", MESSAGE).countDocuments();
  } catch (error) {}
};

const getTimeout = async () => {
  try {
    return await Model.find({ message: TIMEOUT }).countDocuments();
  } catch (error) {}
};

const getDataIDS = async () => {
  try {
    return await Model.find({ bank_id: null, message: null });
  } catch (error) {}
};

const getFailedIDS = async () => {
  try {
    return await Model.find({ message: MESSAGE, is_momo_active: false });
  } catch (error) {}
};

const getMomoStatus = async (data) => {
  try {
    return await Model.find({ is_momo_active: data });
  } catch (error) {}
};

const getRemaining = async () => {
  try {
    return await Model.find({
      bank_id: null,
      message: null,
    }).countDocuments();
  } catch (error) {}
};

const getAll = async () => {
  try {
    return await Model.find();
  } catch (error) {}
};

const getOne = async (phone) => {
  try {
    return await Model.findOne({ number: phone });
  } catch (error) {}
};

const getFailedWithIDS = async (data) => {
  try {
    return await Model.find({ bank_id: data, message: MESSAGE });
  } catch (error) {}
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

const timeoutCleanup = async () => {
  const count = await getTimeout();
  if (count === 0) return;

  return await Model.updateMany(
    { message: TIMEOUT },
    { message: null, is_momo_active: null }
  );
};

module.exports = {
  getSaved,
  getFailed,
  getTimeout,
  getDataIDS,
  getFailedIDS,
  getMomoStatus,
  getRemaining,
  getAll,
  getOne,
  getFailedWithIDS,
  clearMessage,
  addMomoActiveForInactiveNumbers,
  addMomoActiveForActiveNumbers,
  updateValidNumber,
  updateInvalidNumber,
  timeoutCleanup,
  Model,
};
