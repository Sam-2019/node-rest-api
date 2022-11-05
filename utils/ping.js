const axios = require("axios");
const { slackNotify } = require("./slack");
const { SET_INTERVAL } = require("./config");
const { HELIOSDOWN, HELIOSUP, HELIOSURL, HELIOSMS } = require("./constants");

async function pingHellio() {
  axios
    .get(HELIOSURL)
    .then(() => {
      console.log(HELIOSUP);
    })
    .catch((error) => {
      console.log(HELIOSDOWN);
      slackNotify(HELIOSMS, error);
    });
}

function ping() {
  setInterval(async function () {
    pingHellio();
  }, SET_INTERVAL);
}

module.exports = {
  ping,
  pingHellio,
};
