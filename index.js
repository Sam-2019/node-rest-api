require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { PORT, NODE_ENV } = require("./utils/config");
const { shuffleRunner, slackNotify, ping } = require("./utils/runner");

require("./db/index");

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);
shuffleRunner();
slackNotify();
ping();

const port = PORT || 4000;

app.listen(port, () => {
  console.log(
    NODE_ENV === "production"
      ? `server live`
      : `server live on http://localhost:${port}`
  );
});
