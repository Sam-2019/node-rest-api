const { getOne } = require("../db/repository");

const getName = async (req, res) => {
  try {
    //     const data = await getOne(req.params.id);
    //     if (data.name) {
    //      res.json(data);
    //     }

    res.json({ message: "Konnichiwa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getName };
