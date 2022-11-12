const { Telegraf } = require("telegraf");
const { TOKEN } = require("../config");
const bot = new Telegraf(TOKEN);

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = {
  bot,
};
