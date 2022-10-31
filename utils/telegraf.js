const { Telegraf } = require("telegraf");
const { TOKEN } = require("./config");
const { getInfo } = require("./command_switch");
const bot = new Telegraf(TOKEN);

async function run_comand(command) {
  let { model, text } = await getInfo(command);

  bot.command(command, async (ctx) => {
    if (model === null) {
      return ctx.reply(text);
    }

    ctx.reply(`${text} ${model}`);
  });
}

run_comand("ping");
run_comand("saved");
run_comand("failed");
run_comand("rawIDs");
run_comand("hellio");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = {
  bot,
};
