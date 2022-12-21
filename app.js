require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/index");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

module.exports = app;
