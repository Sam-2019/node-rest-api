const express = require("express");
const { parsePhoneNumber } = require("awesome-phonenumber");
const { getOne, getAll, getSaved } = require("../db/repository");
const { getData } = require("../utils/constants");
const { stack, caller } = require("../utils/identity");
const router = express.Router();

//Get all Method
router.get("/get_names", async (req, res) => {
  try {
    //     const data = await getAll();
    //     res.json(data);
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/get_name/:id", async (req, res) => {
  console.log({ req: req.params.id });
  try {
    //     const data = await getOne(req.params.id);
    //    if (!data.name) {
    //      res.json({ message: "No data" });
    //    } else {
    //       res.json(data);
    //    }
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all Method
// router.get("/get_saved", async (req, res) => {
//   try {
//     const data = await getSaved();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/id/:id", async (req, res) => {
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
    name: paystack ? paystack.account_name : null,
    other_name: truecaller[0] === null ? null : truecaller[0].name,
    email: truecaller[0].internetAddresses === null ? null : truecaller[0].internetAddresses[0].id,
    image: truecaller[0] === null ? null : truecaller[0].image,
    gender: truecaller[0] === null ? null : truecaller[0].gender,
    score: truecaller[0] === null ? null : truecaller[0].score,
    e164Format: truecaller[0].phones === null ? null : truecaller[0].phones[0].e164Format,
    numberType: truecaller[0].phones === null ? null : truecaller[0].phones[0].numberType,
    countryCode: truecaller[0].phones === null ? null : truecaller[0].phones[0].countryCode,
    carrier: truecaller[0].phones === null ? null : truecaller[0].phones[0].carrier,
  };

  return res.json(output);
});
module.exports = router;
