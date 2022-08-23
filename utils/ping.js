const axios = require("axios");
const { slackNotify } = require("./slack");
const { SET_INTERVAL } = require("./config");
const { HELIOSMS1 } = require("./constants");

async function pingHellio() {
  try {
    const response = await axios.get("https://helliomessaging.com");
    if (response) {
      return "HellioSMS: server is up";
    }
  } catch (error) {
    return "HellioSMS", "server is down";
  }
}

function ping() {
  setInterval(async function () {
    axios
      .get("https://helliomessaging.com")
      .then((res) => {
        console.log({ res: res.status });
        // if (res.status != 200) {
        slackNotify("HellioSMS", "server is up");
        console.log("HellioSMS: server is up");
        //   return;
        // }

        // const info = res.data;
        // const find = info.includes("Hellio provides an API-first Caa");

        // if (find === false) {
        //   slackNotify("HellioSMS", "server is down", 0);
        //   return;
        // }
      })
      .catch((error) => {
        // console.error(error);
        const deliveryIssues = error.includes(HELIOSMS1);

        if (deliveryIssues === true) {
          slackNotify("HellioSMS", "server is down");
        }
        console.log("HellioSMS: server is down");
      });
  }, SET_INTERVAL);
}

ping();

module.exports = {
  ping,
  pingHellio,
};
