const MESSAGE =
  "Could not resolve account name. Check parameters or try again.";
const ID = "28";
const HELIOSMS1 = "⚠ ⚠ ⚠ Issues With Message Delivery ⚠ ⚠ ⚠";
const HELIOSMS2 =
  "Our apologies for the issues currently being faced with delivery of messages";
const HELIOSDOWN = "HellioSMS: server is down";
const HELIOSUP = "HellioSMS: server is up";
const HELIOSURL = "https://helliomessaging.com"
// const prefixMTN = [024, 054, 055, 059, 025];
// const prefixVODAFONE = [020, 050];
// const networkcodeAIRRTELTIGO = [027, 057, 026, 056];

function sliceNumber(data) {
 if (!data) return "No data!";
 return data.slice(0, 3);
}

const networkCodes = [
 { mtn: ["024", "054", "055", "059", "025"] },
 { vodafone: ["020", "050"] },
 { airteltigo: ["027", "057", "026", "056"] },
];

const bank_ids = { mtn: 28, vodafone: 66, airteltigo: 29 };
function getData(data) {
 if (!data) {
  return "No data";
 }

 if (networkCodes[0].mtn.includes(sliceNumber(data))) {
  return bank_ids.mtn;
 }

 if (networkCodes[1].vodafone.includes(sliceNumber(data))) {
  return bank_ids.vodafone;
 }

 if (networkCodes[2].airteltigo.includes(sliceNumber(data))) {
  return bank_ids.airteltigo;
 }

 return;
}

// const info = getData(number);
// console.log({ info });


module.exports = {
  MESSAGE,
  ID,
  HELIOSMS1,
  HELIOSMS2,
  HELIOSDOWN,
  HELIOSUP,
  HELIOSURL
};
