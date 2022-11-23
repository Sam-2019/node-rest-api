const { shuffle } = require("./shuffle");
const {
  getFailedWithIDS,
  clearMessage,
  addMomoActiveForInactiveNumbers,
  addMomoActiveForActiveNumbers,
  timeoutCleanup
} = require("../db/repository");
const { SET_INTERVAL } = require("./config");
const { justBankIDs } = require("./constants");

async function messageCleanup() {
  setInterval(async function () {
    shuffle(justBankIDs[0]);

    const results = await getFailedWithIDS(justBankIDs[0]);
    if (!results) return;

    await clearMessage(justBankIDs[0]);
  }, SET_INTERVAL);
}

async function momoActive() {
  addMomoActiveForActiveNumbers();
  addMomoActiveForInactiveNumbers();
}

async function clearTimeout() {
  timeoutCleanup()
}

module.exports = {
  messageCleanup,
  momoActive,
  clearTimeout
};
