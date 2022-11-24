const { Telegraf } = require("telegraf");
const { TOKEN } = require("../config");
const bot = new Telegraf(TOKEN);
const { getInfo } = require("./switch");

async function run_command(command) {
  let { model, text } = await getInfo(command);

  bot.command(command, async (ctx) => {
    if (model === null) {
      return ctx.reply(text);
    }
    ctx.reply(`${text} ${model}`);
  });
}

run_command("ping");
run_command("saved");
run_command("failed");
run_command("rawIDs");
run_command("hellio");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = {
  bot,
};
