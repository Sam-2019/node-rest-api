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
} = require("../../../db/repository");

describe("On db connection failure", () => {
  test("count saved", async () => {
    return getSaved().catch(e => expect(e).toMatch('error'));
  });

  test("count failed", async () => {
    return getFailed().catch(e => expect(e).toMatch('error'));
  });

  test("count timeout", async () => {
    return getTimeout().catch(e => expect(e).toMatch('error'));
  });

  test("fetch data with IDs", async () => {
    return getDataIDS().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get failed IDs", async () => {
    return getFailedIDS().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get momo status", async () => {
    return getMomoStatus().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get remaining", async () => {
    return getRemaining().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get all records", async () => {
    return getAll().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get one record", async () => {
    return getOne().catch(e => expect(e).toMatch('error'));
  });

  test("fetch get failed with IDS", async () => {
    return getFailedWithIDS().catch(e => expect(e).toMatch('error'));
  });
});
