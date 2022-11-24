const { getSaved, getFailed, getRemaining } = require("../../db/repository");
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
    case "rawIDs":
      model = await getRemaining();
      text = "Untouched";
      break;
    case "hellio":
      model = await pingHellio();
      text = "";
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
