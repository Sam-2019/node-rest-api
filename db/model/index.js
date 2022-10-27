const Attendees = require("../model/attendee");
const Numbers = require("../model/number");

const model = (type) => {
  let model;

  switch (type) {
    case "attendee":
      model = Attendees;
      break;

    case "number":
      model = Numbers;
      break;

    default:
      model = null;
  }
  return model;
};

module.exports = {
  model,
};
