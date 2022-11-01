const { model } = require("../../model");
const Model = model("identity");

const getIdentity = async (phone) => {
  return await Model.findOne({ number: phone });
};

const addIdentity = async (data) => {
  return await Model.create(data);
};

module.exports = {
  getIdentity,
  addIdentity,
  Model,
};
