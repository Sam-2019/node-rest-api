const paystack = require("paystack-api")(process.env.NIMBLE);
const truecallerjs = require("truecallerjs");
const { TRUECALLER } = require("../utils/config");

async function stack(phone, accountCode, res) {
  try {
    const paystackData = await paystack.verification.resolveAccount({
      account_number: phone,
      bank_code: accountCode,
    });

    return paystackData.data;
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }
}

async function caller(pn, res) {
  try {
    var truecallerData = truecallerjs.searchNumber({
      number: pn.getNumber(),
      countryCode: pn.getRegionCode(),
      installationId: TRUECALLER,
      output: "JSON",
    });

    return truecallerData;
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }
}

module.exports = {
  stack,
  caller,
};
