const { getAll } = require("../db/repository");

const getNames = async (req, res) => {
  try {
    //     const data = await getAll();
    //     if (data) {
    //       return res.json(data);
    //     }

    res.json({ message: "Konnichiwa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getNames };
