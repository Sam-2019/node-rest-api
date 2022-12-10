require("dotenv").config();
const mongoose = require("mongoose");
const { DB_URI } = require("../../../utils/config");
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
const { mock_data } = require("../../../utils/mock_data.js");

describe("On db connection success", () => {
  beforeAll(async () => {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  test("get saved", async () => {
    let result = await getSaved();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("get failed", async () => {
    let result = await getFailed();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
  });

  test("get timeout", async () => {
    let result = await getTimeout();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
  });

  test("fetch data with IDs", async () => {
    let result = await getDataIDS();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("fetch failed IDs", async () => {
    let result = await getFailedIDS();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("fetch momo status", async () => {
    let result = await getMomoStatus();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result).toEqual(expect.arrayContaining([]));
  });

  test("fetch momo status with false value", async () => {
    let result = await getMomoStatus(false);
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result).toEqual(expect.arrayContaining(result));
  });

  test("fetch momo status with true value", async () => {
    let result = await getMomoStatus(true);
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result).toEqual(expect.arrayContaining(result));
  });

  test("fetch remaining", async () => {
    let result = await getRemaining();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
  });

  test("fetch all records", async () => {
    let result = await getAll();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("dont fetch one record without a number", async () => {
    let result = await getOne();
    expect(result).toBeNull();
    expect(result).toBeFalsy();
  });

  test("fetch one record with a valid number", async () => {
    let result = await getOne(mock_data.number);
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("fetch one record with an invalid valid number", async () => {
    let invalid_number = "0240586043";
    let result = await getOne(invalid_number);
    expect(result).toBeNull();
    expect(result).toBeFalsy();
  });

  test("fetch failed with IDS", async () => {
    let result = await getFailedWithIDS();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("clear message field", async () => {
    let result = await clearMessage();
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  test("add momo_active field for active number", async () => {
    let result = await addMomoActiveForActiveNumbers();
    expect(result).not.toBeNull();
  });

  test("add momo_active field for inactive number", async () => {
    let result = await addMomoActiveForInactiveNumbers();
    expect(result).not.toBeNull();
  });

  test("update valid numbers", async () => {
    let result = await updateValidNumber();
    expect(result).not.toBeNull();
  });

  test("update invalid numbers", async () => {
    let result = await updateInvalidNumber();
    expect(result).not.toBeNull();
  });

  test("clean timeout message", async () => {
    let result = await timeoutCleanup();
    expect(result).not.toBeNull();
  });
});
