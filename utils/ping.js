const axios = require("axios");
const { slackNotify } = require("./slack");
const { SET_INTERVAL } = require("./config");
const { HELIOSMS1 } = require("./constants");

function ping() {
  setInterval(async function () {
    axios
      .get("https://helliomessaging.com")
      .then((res) => {
        console.log({ res: res.status });
        // if (res.status != 200) {
        slackNotify("HelioSMS", "server is up");
        console.log("HelioSMS: server is up");
        //   return;
        // }

        // const info = res.data;
        // const find = info.includes("Hellio provides an API-first Caa");

        // if (find === false) {
        //   slackNotify("HelioSMS", "server is down", 0);
        //   return;
        // }
      })
      .catch((error) => {
        // console.error(error);
        const deliveryIssues = error.includes(HELIOSMS1);

        if (deliveryIssues === true) {
          slackNotify("HelioSMS", "server is down");
        }
        console.log("HelioSMS: server is down");
      });
  }, SET_INTERVAL);
}

ping();

module.exports = {
  ping,
};
