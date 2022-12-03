const { justBankIDs, telco } = require("../utils/constants");

test("first array item in justBanksIDs to be MTN(telco) id", () => {
  expect(justBankIDs[0]).toBe(String(telco.mtn.id));
});
