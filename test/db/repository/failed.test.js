const {
  getSaved,
  getFailed,
  getTimeout,
  getDataIDS,
  getFailedIDS,
  getMomoStatus,
  getRemaining,
  getAll,
  getOne,
  getFailedWithIDS,
  clearMessage,
  addMomoActiveForInactiveNumbers,
  addMomoActiveForActiveNumbers,
  updateValidNumber,
  updateInvalidNumber,
  timeoutCleanup,
} = require("../../../db/repository");

describe("On db connection failure", () => {
  test("count saved", async () => {
    return getSaved().catch((e) => expect(e).toMatch("error"));
  });

  test("count failed", async () => {
    return getFailed().catch((e) => expect(e).toMatch("error"));
  });

  test("count timeout", async () => {
    return getTimeout().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch data with IDs", async () => {
    return getDataIDS().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get failed IDs", async () => {
    return getFailedIDS().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get momo status", async () => {
    return getMomoStatus().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get remaining", async () => {
    return getRemaining().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get all records", async () => {
    return getAll().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get one record", async () => {
    return getOne().catch((e) => expect(e).toMatch("error"));
  });

  test("fetch get failed with IDS", async () => {
    return getFailedWithIDS().catch((e) => expect(e).toMatch("error"));
  });

  test("clear message field", async () => {
    return clearMessage().catch((e) => expect(e).toMatch("error"));
  });

  test("add momo_active field for active number", async () => {
    return addMomoActiveForInactiveNumbers().catch((e) =>
      expect(e).toMatch("error")
    );
  });

  test("add momo_active field for inactive number", async () => {
    return addMomoActiveForActiveNumbers().catch((e) =>
      expect(e).toMatch("error")
    );
  });

  test("update valid numbers", async () => {
    return updateValidNumber().catch((e) => expect(e).toMatch("error"));
  });

  test("update invalid numbers", async () => {
    return updateInvalidNumber().catch((e) => expect(e).toMatch("error"));
  });

  test("clean timeout message", async () => {
    return timeoutCleanup().catch((e) => expect(e).toMatch("error"));
  });
});
