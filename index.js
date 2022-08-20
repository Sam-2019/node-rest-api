require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { shuffleRunner } = require("./utils/runner");

require("./db/index");

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);
shuffleRunner();

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
