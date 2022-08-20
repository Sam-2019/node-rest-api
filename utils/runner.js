const paystack = require("paystack-api")(process.env.NIMBLE);
const Numbers = require("../db/numbers");

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

async function shuffleRunner() {
  let newInfo;

  try {
    newInfo = await Numbers.find();
  } catch (error) {
    console.log(error.message);
  }

  setInterval(async function () {
    shuffle(newInfo);
    // console.log(newInfo[0]);

    if (newInfo[0].name && newInfo[0].momo_active) {
      return;
    }

    if (newInfo[0].message) {
      return;
    }

    paystack.verification
      .resolveAccount({
        account_number: `${newInfo[0].number}`,
        bank_code: "MTN",
      })
      .then(async function (body) {
        await Numbers.findByIdAndUpdate(
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
        console.log("data updated");
      })
      .catch(async function (error) {
        if (error.error.message === "getaddrinfo ENOTFOUND api.paystack.co") {
          return;
        }

        await Numbers.findByIdAndUpdate(
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
  }, 1000);
}

module.exports = {
  shuffleRunner,
};
