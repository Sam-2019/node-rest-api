const mongoose = require("mongoose");
const { DB_URI } = require("../utils/config");

var dbConn = mongoose.connection;
dbConn.on("connected", function () {
  // console.log("Mongoose connected");
});

const connectDB = () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  });
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
