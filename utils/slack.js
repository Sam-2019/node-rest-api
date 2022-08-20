const { IncomingWebhook } = require("@slack/webhook");
const { SLACK_WEBHOOK } = require("../utils/config");

const webhook = new IncomingWebhook(SLACK_WEBHOOK);

const dataCount = async (data) =>
  await webhook.send({
    text: `Number saved`,
    attachments: [
      {
        fields: [{ title: "Save count", value: data, short: true }],
      },
    ],
  });

module.exports = {
  dataCount,
};
