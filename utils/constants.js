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
const SERVERURL = "https://name-node-rest-api.herokuapp.com";
const SERVERDOWN = "server is down";
const SERVERUP = "server is up";

const telco = {
  mtn: {
    id: 28,
    bankcode: "MTN",
    prefix: ["024", "054", "055", "059", "025"],
  },
  vodafone: {
    id: 66,
    bankcode: "VOD",
    prefix: ["020", "050"],
  },
  airteltigo: {
    id: 29,
    bankcode: "ATL",
    prefix: ["027", "057", "026", "056"],
  },
};

const justBankIDs = [
  String(telco.mtn.id),
  String(telco.airteltigo.id),
  String(telco.vodafone.id),
];

const getData = (data) => {
  const slicedPhone = data.slice(0, 3);

  if (telco.mtn.prefix.includes(slicedPhone)) {
    return telco.mtn.bankcode;
  }

  if (telco.vodafone.prefix.includes(slicedPhone)) {
    return telco.vodafone.bankcode;
  }

  return telco.airteltigo.bankcode;
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
  SERVERURL,
  SERVERDOWN,
  SERVERUP,
  telco,
  justBankIDs,
  getData,
};
