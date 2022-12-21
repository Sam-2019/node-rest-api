require("dotenv").config();
const app = require('./app');
const { PORT, NODE_ENV } = require("./utils/config");
const { services } = require("./utils/services");

services();

const port = PORT || 4000;

app.listen(port, () => {
  console.log(
    NODE_ENV === "production"
      ? `server live`
      : `server live on http://localhost:${port}`
  );
});
