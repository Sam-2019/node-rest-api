const { shuffle } = require("./shuffle");
const { getFailedWithIDS, updateMany } = require("../db/repositories");
const { SET_INTERVAL } = require("./config");

const bankIDs = ["28", "29", "66"];

async function cleanup() {
  setInterval(async function () {
    shuffle(bankIDs);

    const results = await getFailedWithIDS(bankIDs[0]);
    if (!results) return;

    await updateMany(bankIDs[0]);
  }, SET_INTERVAL);
}

module.exports = {
  cleanup,
};
