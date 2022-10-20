const paystack = require("paystack-api")(process.env.NIMBLE);
const Numbers = require("../db/numbers");
const Attendees = require("../db/attendees");
const { ping } = require("./ping");
const { SET_INTERVAL } = require("./config");
const { getDataIDS, getFailedIDS } = require("../db/attendee_repositories");
const { getData } = require("./constants");
const { shuffle } = require("./shuffle");

async function shuffleRunner() {
  let newInfo;

  try {
    const data = await getDataIDS();
//     console.log({data})

    if (data.length === 0) {
      return;
    }

    newInfo = data;
  } catch (error) {
    console.log(error.message);
  }

  setInterval(async function () {
    if (!newInfo) {
      return;
    }

    shuffle(newInfo);

    // if (newInfo[0].name && newInfo[0].momo_active) {
    //   return;
    // }

    // if (newInfo[0].message) {
    //   return;
    // }

    const result = getData(newInfo[0].number);
    console.log({result})

    paystack.verification
      .resolveAccount({
        account_number: `${newInfo[0].number}`,
        bank_code: result,
      })
      .then(async function (body) {
        await Attendees.findByIdAndUpdate(
          newInfo[0].id,
          {
            $set: {
              name: body.data.account_name,
              account_number: body.data.account_number,
              bank_id: body.data.bank_id,
              momo_active: body.data.momo_active,
            },
          },
          {
            new: false,
          }
        );
      })
      .catch(async function (error) {
        if (error.error.message === "getaddrinfo ENOTFOUND api.paystack.co") {
          return;
        }

        if (error.error.message === "Endpoint request timed out") {
          return;
        }

        await Attendees.findByIdAndUpdate(
          newInfo[0].id,
          {
            $set: {
              message: error.error.message,
            },
          },
          {
            new: false,
          }
        );
        console.log("No data");
      });
  }, SET_INTERVAL);
}

module.exports = {
  shuffle,
  shuffleRunner,
  ping,
};
