const { SET_INTERVAL } = require("./config");
const { getDataIDS } = require("../db/repository");
const { getData } = require("./constants");
const { shuffle } = require("./shuffle");
const { resolveNumber } = require("./paystack");

async function shuffleRunner() {
  let newInfo;

  try {
    const data = await getDataIDS();

    if (data.length === 0) {
      return;
    }

    newInfo = data;
  } catch (error) {
    console.log(error.message);
  }

  setInterval(async function () {
    if (!newInfo) {
      return;
    }

    shuffle(newInfo);

    if (newInfo[0].name && newInfo[0].is_momo_active) {
      return;
    }

    if (newInfo[0].message) {
      return;
    }

    const result = getData(newInfo[0].number);

    resolveNumber(newInfo, result);
  }, SET_INTERVAL);
}

module.exports = {
  shuffle,
  shuffleRunner,
};
