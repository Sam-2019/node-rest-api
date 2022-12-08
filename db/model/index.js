const Attendees = require("../model/attendee");
const Numbers = require("../model/number");
const Identity = require("./identity");

const model = (type) => {
  let model;

  switch (type) {
    case "attendee":
      model = Attendees;
      break;

    case "number":
      model = Numbers;
      break;

    case "identity":
      model = Identity;
      break;

    default:
      model = null;
  }
  return model;
};

module.exports = {
  model,
};
