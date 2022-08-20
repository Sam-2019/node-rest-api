const paystack = require("paystack-api")(process.env.NIMBLE);
const ValidNumbers = require("../db/valid");
const InvalidNumbers = require("../db/invalid");
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

  setInterval(function () {
    shuffle(newInfo);

    console.log(newInfo[0].number);

    // paystack.verification
    //   .resolveAccount({
    //     account_number: `${newInfo[0].number}`,
    //     bank_code: "MTN",
    //   })
    //   .then(function (body) {
    //     const entry = ValidNumbers.findOne({ phone: newInfo[0].number });

    //     if (entry) {
    //       console.log("entry exits");
    //       return;
    //     }

    //     const data = new ValidNumbers({
    //       name: body.data.account_name,
    //       phone: body.data.account_number,
    //       account_number: body.data.account_number,
    //       bank_id: body.data.bank_id,
    //       momo_active: "yes",
    //     });

    //     data.save();
    //     console.log("data saved");
    //   })
    //   .catch(function (error) {
    //     const data = new InvalidNumbers({
    //       phone: newInfo[0].number,
    //       momo_active: "no",
    //     });
    //     data.save();
    //     console.log(error.error.message);
    //   });
  }, 1000);
}

module.exports = {
  shuffleRunner,
};
