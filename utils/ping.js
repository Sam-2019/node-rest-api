const axios = require("axios");
const { slackNotify } = require("./slack");
const { SET_INTERVAL } = require("./config");
const { HELIOSDOWN, HELIOSUP, HELIOSURL } = require("./constants");

async function pingHellio() {
  try {
    const response = await axios.get(HELIOSURL);
    if (response) {
      return HELIOSUP;
    }
  } catch (error) {
    return HELIOSDOWN;
  }
}

function ping() {
  setInterval(async function () {
    axios
      .get(HELIOSURL)
      .then((res) => {
        console.log({ res: res.status });
        console.log(HELIOSUP);
        return;
      })
      .catch((error) => {
        console.log(HELIOSDOWN);
        slackNotify("HellioSMS", error);
        return;
      });
  }, SET_INTERVAL);
}

ping();

module.exports = {
  ping,
  pingHellio,
};
