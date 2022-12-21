const { AUTH_KEY } = require("../utils/config");
const { getData } = require("../utils/constants");
const { stack, caller } = require("../utils/identity");
const { parsePhoneNumber } = require("awesome-phonenumber");
const { addIdentity, getIdentity } = require("../db/repository/identity");

const getID = async (req, res) => {
  const authorization = req.headers.authorization;

  if (authorization != AUTH_KEY) {
    return res.json({ message: "Konnichiwa" });
  }

  let countryCode = "GH";
  const number = req.params.id;
  const pn = parsePhoneNumber(number, countryCode);
  const phone = pn.getNumber("significant"); // -> '707123456'
  const updated = `0${phone}`;

  const localSearch = await getIdentity(updated);

  if (localSearch) {
    return res.json(localSearch);
  }

  const accountCode = getData(updated);
  const paystack = await stack(updated, accountCode, res);
  const info = await caller(pn, res);
  const transformer = JSON.parse(info);
  const truecaller = transformer.data;

  const output = {
    name: paystack.account_name ? paystack.account_name : null,
    account_number: paystack.account_number ? paystack.account_number : null,
    bank_id: paystack.bank_id ? paystack.bank_id : null,
    other_name: truecaller[0].name === null ? null : truecaller[0].name,
    email:
      truecaller[0].internetAddresses.length === 0
        ? null
        : truecaller[0].internetAddresses[0].id,
    image: truecaller[0].image === null ? null : truecaller[0].image,
    gender: truecaller[0].gender === null ? null : truecaller[0].gender,
    score: truecaller[0].score === null ? null : truecaller[0].score,
    e164Format:
      truecaller[0].phones.length === 0
        ? null
        : truecaller[0].phones[0].e164Format,
    numberType:
      truecaller[0].phones.length === 0
        ? null
        : truecaller[0].phones[0].numberType,
    countryCode:
      truecaller[0].phones.length === 0
        ? null
        : truecaller[0].phones[0].countryCode,
    carrier:
      truecaller[0].phones.length === 0
        ? null
        : truecaller[0].phones[0].carrier,
  };

  addIdentity(output);

  return res.json(output);
};

module.exports = { getID };
