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
    var truecallerData = await truecallerjs.searchNumber({
      number: pn.getNumber(),
      countryCode: pn.getRegionCode(),
      installationId: TRUECALLER,
      output: "JSON",
    });

    const info = JSON.parse(truecallerData);
    const transformer = {
      id: info.data[0].id,
      name: info.data[0].name,
      image: info.data[0].image,
      gender: info.data[0].gender,
      internetAddresses: {
        email: info.data[0].internetAddresses[0].id,
        caption: info.data[0].internetAddresses[0].caption,
      },
    };
    return transformer;
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }
}

module.exports = {
  stack,
  caller,
};
