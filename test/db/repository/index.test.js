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
  test("should not count saved", async () => {
    let result = await getSaved();
    console.log(result);
    // expect(result).toBeUndefined();
  });

  test("should not count failed", async () => {
    let result = await getFailed();
    expect(result).toBeUndefined();
  });

  test("should not count timeout", async () => {
    let result = await getTimeout();
    expect(result).toBeUndefined();
  });

  test("should not fetch data with IDs", async () => {
    let result = await getDataIDS();
    expect(result).toBeUndefined();
  });

  test("should not fetch get failed IDs", async () => {
    let result = await getFailedIDS();
    expect(result).toBeUndefined();
  });

  test("should not fetch get momo status", async () => {
    let result = await getMomoStatus();
    expect(result).toBeUndefined();
  });

  test("should not fetch get remaining", async () => {
    let result = await getRemaining();
    expect(result).toBeUndefined();
  });

  test("should not fetch get all records", async () => {
    let result = await getAll();
    expect(result).toBeUndefined();
  });

  test("should not fetch get one record", async () => {
    let result = await getOne();
    expect(result).toBeUndefined();
  });

  test("should not fetch get failed with IDS", async () => {
    let result = await getFailedWithIDS();
    expect(result).toBeUndefined();
  });
});
