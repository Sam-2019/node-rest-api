require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { PORT, NODE_ENV } = require("./utils/config");
const { services } = require("./utils/services");

require("./db/index");

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

services();

const port = PORT || 4000;

app.listen(port, () => {
  console.log(
    NODE_ENV === "production"
      ? `server live`
      : `server live on http://localhost:${port}`
  );
});
