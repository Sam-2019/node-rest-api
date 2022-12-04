require("dotenv").config();
const { getInfo } = require("../../utils/telegraf/switch");

test("saved action", async () => {
  const result = await getInfo("saved");
  expect(result.text).toBe("Saved");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  expect(() => result.model()).toThrow(Error);
});

test("failed action", async () => {
  const result = await getInfo("failed");
  expect(result.text).toBe("Failed");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  expect(() => result.model()).toThrow(Error);
});

test("timeout action", async () => {
  const result = await getInfo("timeout");
  expect(result.text).toBe("");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeFalsy();
  expect(() => result.model()).toThrow(Error);
});

test("get_remaining action", async () => {
  const result = await getInfo("rawIDs");
  expect(result.text).toBe("Untouched");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  expect(() => result.model()).toThrow(Error);
});

test("hellio action", async () => {});

test("app ping", async () => {
  const result = await getInfo();
  expect(result.text).toBe("app pinged");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  expect(() => result.model()).toThrow(Error);
});
