const express = require("express");
const ValidNumbers = require("../db/valid");
const router = express.Router();

//Post Method
// router.post('/post', async (req, res) => {
//     const data = new ValidNumbers({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

//Get all Method
router.get("/get_names", async (req, res) => {
  try {
    const data = await ValidNumbers.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/gwt_name/:id", async (req, res) => {
  try {
    const data = await ValidNumbers.findOne({ phone: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await ValidNumbers.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

module.exports = router;
