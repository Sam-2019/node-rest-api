const { Telegraf } = require("telegraf");
const { TOKEN } = require("./config");
const Numbers = require("../db/numbers");
const { MESSAGE, ID } = require("./constants");
const { pingHellio } = require("./ping");
const bot = new Telegraf(TOKEN);

bot.command("ping", async (ctx) => {
  ctx.reply("app pinged!");
});

bot.command("saved", async (ctx) => {
  const data = await Numbers.where("bank_id", ID).countDocuments();
  ctx.reply(`Saved ${data}`);
});

bot.command("failed", async (ctx) => {
  const data = await Numbers.where("message", MESSAGE).countDocuments();
  ctx.reply(`Failed ${data}`);
});

bot.command("hellio", async (ctx) => {
  const data = await pingHellio();
  ctx.reply(`${data}`);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = {
  bot,
};
