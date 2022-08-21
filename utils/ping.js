const axios = require("axios");
const slackNotify = require("./slack");
const { SET_INTERVAL } = require("./config");

function ping() {
  setInterval(async function () {
    axios
      .get("https://helliomessaging.com")
      .then((res) => {
        if (res.status != 200) {
          slackNotify("HelioSMS", "server is down", 0);
          return;
        }

        const info = res.data;
        const find = info.includes("Hellio provides an API-first Caa");

        if (find === false) {
          slackNotify("HelioSMS", "server is down", 0);
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, SET_INTERVAL);
}

ping();

module.exports = {
  ping,
};
