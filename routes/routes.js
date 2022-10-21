const express = require("express");
const { parsePhoneNumber } = require("awesome-phonenumber");
const { getOne, getAll } = require("../db/repositories");
const { getData } = require("../utils/constants");
const { stack, caller } = require("../utils/identity");
const router = express.Router();

//Get all Method
router.get("/get_names", async (req, res) => {
  try {
    // const data = await getAll();
    // res.json(data);
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/get_name/:id", async (req, res) => {
  try {
//     const data = await getOne(req.params.id);
//     if (!data.name) return;
//     res.json(data);
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/id/:id", async (req, res) => {
  // console.log(req.params.id);
  // res.json(`${req.params.id}`);
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

  // if (truecaller && !paystack) {
  //   return res.json([{ truecaller: truecaller }, { paystack: null }]);
  //   // return [{ truecaller: truecaller }, { paystack: null }];
  // }

  // if (paystack && !truecaller) {
  //   return res.json([{ paystack: paystack }, { truecaller: null }]);
  //   // return [{ paystack: paystack }, { truecaller: null }];
  // }

  // if (!paystack && !truecaller) {
  //   return res.json([{ truecaller: truecaller }, { paystack: null }]);
  //   // return [{ truecaller: truecaller }, { paystack: nul }];
  // }

  // return res.json([{ paystack: paystack }, { truecaller: truecaller }]);
  // // return [{ paystack: paystack }, { truecaller: truecaller }];

  const output = {
    name: paystack ? paystack.account_name : null,
    other_name: truecaller.data === null ? null : truecaller.name,
    gender: truecaller.data === null ? null : truecaller.gender,
    image: truecaller.data === null ? null : truecaller.image,
    email: truecaller.data === null ? null : truecaller.email,
    caption: truecaller.data === null ? null : truecaller.caption,
  };

  return res.json(output);
});
module.exports = router;
