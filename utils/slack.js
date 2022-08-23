const { IncomingWebhook } = require("@slack/webhook");
const { SLACK_WEBHOOK } = require("../utils/config");

const webhook = new IncomingWebhook(SLACK_WEBHOOK);

const slackNotify = async (message, title, data = null) =>
  await webhook.send({
    text: `${message}`,
    attachments: [
      {
        fields: [{ title: `${title}`, value: data, short: true }],
      },
    ],
  });

module.exports = {
  slackNotify,
};
