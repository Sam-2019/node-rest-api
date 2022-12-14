const {
  getSaved,
  getFailed,
  getRemaining,
  getTimeout,
} = require("../../db/repository");
const { pingHellio } = require("../ping");

const getInfo = async (action) => {
  let model;
  let text;

  switch (action) {
    case "saved":
      model = await getSaved();
      text = "Saved";
      break;
    case "failed":
      model = await getFailed();
      text = "Failed";
      break;
    case "timeout":
      model = await getTimeout();
      text = "";
      break;
    case "rawIDs":
      model = await getRemaining();
      text = "Untouched";
      break;
    case "hellio":
      model = await pingHellio();
      text = null;
      break;
    default:
      model = null;
      text = "app pinged";
  }

  return {
    model,
    text,
  };
};

module.exports = { getInfo };
