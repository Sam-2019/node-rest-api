const express = require("express");
const router = express.Router();

const { getNames } = require("../controllers/names");
const { getName } = require("../controllers/name");
const { getSave } = require("../controllers/saved");
const { getID } = require("../controllers/identity");

router.get("/names", getNames);
router.get("/get_name/:id", getName);
router.get("/get_saved", getSave);
router.get("/id/:id", getID);

module.exports = router;