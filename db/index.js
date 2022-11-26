const mongoose = require("mongoose");
const { DB_URI } = require("../utils/config");

const mongoURI = DB_URI;

var dbConn = mongoose.connection;
dbConn.on("connected", function () {
  console.log("Mongoose connected");
});

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
});