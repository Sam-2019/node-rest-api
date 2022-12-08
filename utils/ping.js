const axios = require("axios");
const { SET_INTERVAL } = require("./config");
const { HELIOSDOWN, HELIOSUP, HELIOSURL } = require("./constants");

async function pingHellio() {
  axios
    .get(HELIOSURL)
    .then(() => {
      console.log(HELIOSUP);
    })
    .catch((error) => {
      console.log(HELIOSDOWN);
    });
}

async function pingServer() {
  axios
    .get('https://name-node-rest-api.herokuapp.com/')
    .then(() => {
      console.log('server running');
    })
    .catch((error) => {
      console.log('server down');
    });
}

function ping() {
  setInterval(async () => {
    pingServer()
  }, 25 * 60 * 1000);

  setInterval(async function () {
    await pingHellio();
  }, SET_INTERVAL);
}

module.exports = {
  ping,
  pingHellio,
};
