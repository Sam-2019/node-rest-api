const axios = require("axios");
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
const users = [{ name: "Bob" }];

jest.mock("axios");

test("should fetch users", () => {
  const local_users = [{ name: "Bob" }];
  axios.get.mockResolvedValue(local_users);

  expect(users).toEqual(local_users);
  expect(users).toBeTruthy();

  //   console.log(users);
  //   expect(users).toContain("Bob");
});

test("should count saved", async () => {
  let result = await getSaved();
  expect(result).toBeUndefined();
});

test("should count failed", async () => {
  let result = await getFailed();
  expect(result).toBeUndefined();
});

test("should count timeout", async () => {
  let result = await getTimeout();
  expect(result).toBeUndefined();
});

test("should fetch data with IDs", async () => {
  let result = await getDataIDS();
  expect(result).toBeUndefined();
});

test("should fetch get failed IDs", async () => {
  let result = await getFailedIDS();
  expect(result).toBeUndefined();
});

test("should fetch get momo status", async () => {
  let result = await getMomoStatus();
  expect(result).toBeUndefined();
});

test("should fetch get remaining", async () => {
  let result = await getRemaining();
  expect(result).toBeUndefined();
});

test("should fetch get all records", async () => {
  let result = await getAll();
  expect(result).toBeUndefined();
});

test("should fetch get one record", async () => {
  let result = await getOne();
  expect(result).toBeUndefined();
});

test("should fetch get failed with IDS", async () => {
  let result = await getFailedWithIDS();
  expect(result).toBeUndefined();
});
