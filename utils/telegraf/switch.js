const { bot } = require(".");
const { getSaved, getFailed, getRemaining } = require("../../db/repository");
const { pingHellio } = require("../ping");

const getInfo = async (command) => {
  let model;
  let text;

  switch (command) {
    case "saved":
      model = await getSaved();
      text = "Saved";
      break;
    case "failed":
      model = await getFailed();
      text = "Failed";
      break;
    case "rawIDs":
      model = await getRemaining();
      text = "Untouched";
      break;
    case "hellio":
      model = await pingHellio();
      text = "";
      break;
    default:
      model = null;
      text = "app pinged";
  }

  return {
    model,
    text,
  };
};

async function run_comand(command) {
  let { model, text } = await getInfo(command);

  bot.command(command, async (ctx) => {
    if (model === null) {
      return ctx.reply(text);
    }

    ctx.reply(`${text} ${model}`);
  });
}

module.exports = { run_comand };