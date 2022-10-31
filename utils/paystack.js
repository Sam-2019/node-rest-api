const paystack = require("paystack-api")(process.env.NIMBLE);
const { updateInvalidNumber, updateValidNumber } = require("../db/repository");

function resolveNumber(newInfo, result) {
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
}
module.exports = {
  resolveNumber,
};
