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

const networkCodes = [
  {mtn: [024, 054, 055, 059, 025]},
  {vodefone: [020, 050]},
  {airteltigo: [027, 057, 026, 056]}
]

module.exports = {
  MESSAGE,
  ID,
  HELIOSMS1,
  HELIOSMS2,
  HELIOSDOWN,
  HELIOSUP,
  HELIOSURL
};
