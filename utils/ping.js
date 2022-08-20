const axios = require("axios");
const dataCount = require("./slack");

function ping() {
  setInterval(async function () {
    axios
      .get("https://helliomessaging.com")
      .then((res) => {
        if (res.status != 200) {
          dataCount("HelioSMS", "server is down", 0);
          return;
        }

        const info = res.data;
        const find = info.includes("Hellio provides an API-first Caa");

        if (find === false) {
          dataCount("HelioSMS", "server is down", 0);
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1800000);
}

ping();

module.exports = {
  ping,
};
