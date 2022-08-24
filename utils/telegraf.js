const { Telegraf } = require("telegraf");
const { TOKEN } = require("./config");
const { pingHellio } = require("./ping");
const { getSaved, getFailed, getDataIDS } = require("../db/repositories");
const bot = new Telegraf(TOKEN);

bot.command("ping", async (ctx) => {
  ctx.reply("app pinged!");
});

bot.command("saved", async (ctx) => {
  const data = await getSaved();
  ctx.reply(`Saved ${data}`);
});

bot.command("failed", async (ctx) => {
  const data = await getFailed();
  ctx.reply(`Failed ${data}`);
});

bot.command("rawIDs", async (ctx) => {
  const data = await getDataIDS();
  ctx.reply(`Untouched ${data}`);
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
