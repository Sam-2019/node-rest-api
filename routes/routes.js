const express = require("express");
const { parsePhoneNumber } = require("awesome-phonenumber");
const { getOne, getAll, getSaved } = require("../db/repository");
const { getData } = require("../utils/constants");
const { stack, caller } = require("../utils/identity");
const { AUTH_KEY } = require("../utils/config");
const router = express.Router();

//Get all Method
router.get("/get_names", async (req, res) => {
  try {
    // const data = await getAll();

    // if (!data) {
    //   res.json({ message: "Konnichiwa" });
    // } else {
    //   res.json(data);
    // }

    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/get_name/:id", async (req, res) => {
  try {
    // const data = await getOne(req.params.id);

    // if (!data.name) {
    //   res.json({ message: "Konnichiwa" });
    // } else {
    //   res.json(data);
    // }

    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all Method
router.get("/get_saved", async (req, res) => {
  try {
    // const data = await getSaved();

    // if (!data) {
    //   res.json({ message: "Konnichiwa" });
    // } else {
    //   res.json(data);
    // }

    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/id/:id", async (req, res) => {
  const authorization = req.headers.authorization;

  if (authorization != AUTH_KEY) {
    return res.json("Konnichiwa");
  }

  let countryCode = "GH";
  const number = req.params.id;
  const pn = parsePhoneNumber(number, countryCode);
  const phone = pn.getNumber("significant"); // -> '707123456'
  const updated = `0${phone}`;
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

  return res.json(output);
});
module.exports = router;
