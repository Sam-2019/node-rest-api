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
    let result = await getSaved();
    expect(result).toBeUndefined();
  });

  test("count failed", async () => {
    let result = await getFailed();
    expect(result).toBeUndefined();
  });

  test("count timeout", async () => {
    let result = await getTimeout();
    expect(result).toBeUndefined();
  });

  test("fetch data with IDs", async () => {
    let result = await getDataIDS();
    expect(result).toBeUndefined();
  });

  test("fetch get failed IDs", async () => {
    let result = await getFailedIDS();
    expect(result).toBeUndefined();
  });

  test("fetch get momo status", async () => {
    let result = await getMomoStatus();
    expect(result).toBeUndefined();
  });

  test("fetch get remaining", async () => {
    let result = await getRemaining();
    expect(result).toBeUndefined();
  });

  test("fetch get all records", async () => {
    let result = await getAll();
    expect(result).toBeUndefined();
  });

  test("fetch get one record", async () => {
    let result = await getOne();
    expect(result).toBeUndefined();
  });

  test("fetch get failed with IDS", async () => {
    let result = await getFailedWithIDS();
    expect(result).toBeUndefined();
  });
});
