const express = require("express");
const Numbers = require("../db/numbers");
const router = express.Router();

//Get all Method
router.get("/get_names", async (req, res) => {
  try {
    // const data = await Numbers.find();
    // res.json(data);
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/get_name/:id", async (req, res) => {
  try {
    // const data = await Numbers.findOne({ phone: req.params.id });
    // res.json(data);
    res.json("Konnichiwa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
