require("dotenv").config();
const { mongoose } = require("mongoose");
const { DB_URI } = require("../../utils/config");
const { model } = require("../../db/model");

// /* Connecting to the database before each test. */
// beforeEach(async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
// });

// /* Closing database connection after each test. */
// afterEach(async () => {
//   await mongoose.connection.close();
// });

