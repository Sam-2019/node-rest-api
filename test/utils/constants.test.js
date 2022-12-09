const {
  telco,
  justBankIDs,
  getData,
  SERVERDOWN,
  SERVERUP,
  SERVERURL,
} = require("../../utils/constants");

test("array items to match telco id", () => {
  expect(justBankIDs[0]).toBe(String(telco.mtn.id));
  expect(justBankIDs[1]).toBe(String(telco.airteltigo.id));
  expect(justBankIDs[2]).toBe(String(telco.vodafone.id));
});

test("return telco bankcode", () => {
  const mtn_number = "0242586043";
  const airteltigo_number = "0272586043";
  const vodafone_number = "0202586043";

  expect(getData(mtn_number)).toBe(telco.mtn.bankcode);
  expect(getData(airteltigo_number)).toBe(telco.airteltigo.bankcode);
  expect(getData(vodafone_number)).toBe(telco.vodafone.bankcode);
});

describe("check truthy", () => {
  test("server url", () => {
    expect(SERVERURL).not.toBeNull();
    expect(SERVERURL).toBeDefined();
    expect(SERVERURL).toBeTruthy();
  });

  test("server up", () => {
    expect(SERVERUP).not.toBeNull();
    expect(SERVERUP).toBeDefined();
    expect(SERVERUP).toBeTruthy();
  });

  test("server dwon", () => {
    expect(SERVERDOWN).not.toBeNull();
    expect(SERVERDOWN).toBeDefined();
    expect(SERVERDOWN).toBeTruthy();
  });
});
