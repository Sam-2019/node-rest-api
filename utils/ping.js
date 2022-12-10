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

function pinger(callback, timer = SET_INTERVAL) {
  setInterval(async function () {
    await callback();
  }, timer);
}

function ping() {
  pinger(pingServer, 25 * 60 * 1000);
  pinger(pingHellio);
}

module.exports = {
  ping,
  pingHellio,
  pingServer,
  pinger,
};
