const { shuffleRunner } = require("./runner");
const { bot } = require("./telegraf");
const { ping } = require("./ping");
const { clearTimeout } = require("./dbCleanup");

function services() {
  shuffleRunner();
  ping();
  bot.launch();
  clearTimeout();
}

module.exports = {
  services,
};
