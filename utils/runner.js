const paystack = require("paystack-api")(process.env.NIMBLE);
const { SET_INTERVAL } = require("./config");
const { getDataIDS, Model } = require("../db/repository");
const { getData } = require("./constants");
const { shuffle } = require("./shuffle");

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

    paystack.verification
      .resolveAccount({
        account_number: `${newInfo[0].number}`,
        bank_code: result,
      })
      .then(async function (body) {
        await updateValidNumber(body, newInfo);
      })
      .catch(async function (error) {
        await updateInvalidNumber(error, newInfo);
        console.log("No data");
      });
  }, SET_INTERVAL);
}

module.exports = {
  shuffle,
  shuffleRunner,
};
