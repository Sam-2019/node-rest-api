const DB_URI = process.env.DB_URI;
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const NIMBLE = process.env.NIMBLE;
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;
const SET_INTERVAL = process.env.SET_INTERVAL;

module.exports = {
  DB_URI,
  NODE_ENV,
  NIMBLE,
  PORT,
  SLACK_WEBHOOK,
  SET_INTERVAL,
};
