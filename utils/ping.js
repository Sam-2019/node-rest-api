const https = require("node:https");
const axios = require("axios");
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
    });
}

function ping() {
  setInterval(() => {
//     https.get("https://node-rest-api-0p1t.onrender.com/", () => {
//       console.log("server running");
//     });
  }, 25 * 60 * 1000);

  setInterval(async function () {
    pingHellio();
  }, SET_INTERVAL);
}

module.exports = {
  ping,
  pingHellio,
};
