const MESSAGE =
  "Could not resolve account name. Check parameters or try again.";
const HELIOSMS = "HellioSMS";
const HELIOSMS1 = "⚠ ⚠ ⚠ Issues With Message Delivery ⚠ ⚠ ⚠";
const HELIOSMS2 =
  "Our apologies for the issues currently being faced with delivery of messages";
const HELIOSDOWN = "HellioSMS: server is down";
const HELIOSUP = "HellioSMS: server is up";
const HELIOSURL = "https://helliomessaging.com";
const TIMEOUT = "Endpoint request timed out";
const ENOTFOUND = "getaddrinfo ENOTFOUND api.paystack.co";

const networkCodes = [
  { mtn: ["024", "054", "055", "059", "025"] },
  { vodafone: ["020", "050"] },
  { airteltigo: ["027", "057", "026", "056"] },
];

const bankIDs = {
  mtn: {
    id: 28,
    code: "MTN",
  },
  vodafone: {
    id: 66,
    code: "VOD",
  },
  airteltigo: {
    id: 29,
    code: "ATL",
  },
};

const justBankIDs = [
  String(bankIDs.mtn.id),
  String(bankIDs.airteltigo.id),
  String(bankIDs.vodafone.id),
];

const getData = (data) => {
  const slicedPhone = data.slice(0, 3);

  if (networkCodes[0].mtn.includes(slicedPhone)) {
    return bankIDs.mtn.code;
  }

  if (networkCodes[1].vodafone.includes(slicedPhone)) {
    return bankIDs.vodafone.code;
  }

  return bankIDs.airteltigo.code;
};

module.exports = {
  MESSAGE,
  HELIOSMS,
  HELIOSMS1,
  HELIOSMS2,
  HELIOSDOWN,
  HELIOSUP,
  HELIOSURL,
  TIMEOUT,
  ENOTFOUND,
  bankIDs,
  justBankIDs,
  getData,
};
