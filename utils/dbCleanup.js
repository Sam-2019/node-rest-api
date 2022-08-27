const { shuffle } = require("../utils/runner");
const { getFailedWithIDS, updateMany } = require("../db/repositories");

const bankIDs = ["28", "29", "66"];

async function cleanup() {
  setInterval(async function () {
    shuffle(bankIDs);

    const results = await getFailedWithIDS(bankIDs[0]);
    if (!results) return;

    await updateMany(bankIDs[0]);
  }, 10000);
}

module.exports = {
  cleanup,
};
