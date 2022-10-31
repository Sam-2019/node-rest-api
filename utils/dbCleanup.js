const { shuffle } = require("./shuffle");
const {
  getFailedWithIDS,
  clearMessage,
  addMomoActiveForInactiveNumbers,
  addMomoActiveForActiveNumbers,
} = require("../db/repository");
const { SET_INTERVAL } = require("./config");

const bankIDs = ["28", "29", "66"];

async function messageCleanup() {
  setInterval(async function () {
    shuffle(bankIDs);

    const results = await getFailedWithIDS(bankIDs[0]);
    if (!results) return;

    await clearMessage(bankIDs[0]);
  }, SET_INTERVAL);
}

async function momoActive() {
  // addMomoActiveForActiveNumbers();
  addMomoActiveForInactiveNumbers();
}

module.exports = {
  messageCleanup,
  momoActive,
};
