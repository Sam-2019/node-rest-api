const axios = require("axios");
const { SET_INTERVAL } = require("./config");
const {
  HELIOSDOWN,
  HELIOSUP,
  HELIOSURL,
  SERVERDOWN,
  SERVERUP,
  SERVERURL,
} = require("./constants");

async function pingHellio() {
  return axios
    .get(HELIOSURL)
    .then((res) => HELIOSUP)
    .catch((error) => HELIOSDOWN);
}

async function pingServer() {
  return axios
    .get(SERVERURL)
    .then((res) => SERVERUP)
    .catch((error) => SERVERDOWN);
}

function ping() {
  setInterval(async () => {
    pingServer();
  }, 25 * 60 * 1000);

  setInterval(async function () {
    await pingHellio();
  }, SET_INTERVAL);
}

module.exports = {
  ping,
  pingHellio,
  pingServer,
};
