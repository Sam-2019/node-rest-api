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
    return "HellioSMS: server is down";
  }
}

function ping() {
  setInterval(async function () {
    axios
      .get("https://helliomessaging.com")
      .then((res) => {
      console.log({ res: res.status });
      console.log("HellioSMS: server is up");
      })
      .catch((error) => {
      console.log("HellioSMS: server is down");
      slackNotify("HellioSMS", error);
      console.log(error);
      });
  }, SET_INTERVAL);
}

ping();

module.exports = {
  ping,
  pingHellio,
};
