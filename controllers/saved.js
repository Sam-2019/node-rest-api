const { getSaved } = require("../db/repository");

const getSave = async (req, res) => {
  try {
    //     const data = await getSaved();
    //      if (data) {
    //      res.json(data);
    //     }

    res.json({ message: "Konnichiwa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSave };
