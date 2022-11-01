const { IncomingWebhook } = require("@slack/webhook");
const { SLACK_WEBHOOK } = require("../utils/config");

const webhook = new IncomingWebhook(SLACK_WEBHOOK);

const slackNotify = async (message, title, data = null) =>
  await webhook.send({
    text: String(message),
    attachments: [
      {
        fields: [{ title: String(title), value: data, short: false }],
      },
    ],
  });

module.exports = {
  slackNotify,
};
