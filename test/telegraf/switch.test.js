const { getInfo } = require("../../utils/telegraf/switch");

test("saved action", async () => {
  const result = await getInfo("saved");
  expect(result.text).toBe("Saved");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  //   expect(result.model)
});

test("failed action", async () => {
  const result = await getInfo("failed");
  expect(result.text).toBe("Failed");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  //   expect(result.model)
});

test("timeout action", async () => {
  const result = await getInfo("timeout");
  expect(result.text).toBe("");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  //   expect(result.model)
});

test("get_remaining action", async () => {
  const result = await getInfo("rawIDs");
  expect(result.text).toBe("Untouched");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  //   expect(result.model)
});

test("hellio action", async () => {
  //   const result = await getInfo("hellio");
  //   expect(result.text).toBe("");
  //   expect(result.text).not.toBeNull();
  //   expect(result.text).toBeDefined();
  //   expect(result.text).toBeTruthy();
  //   expect(result.model)
});

test("app ping", async () => {
  const result = await getInfo();
  expect(result.text).toBe("app pinged");
  expect(result.text).not.toBeNull();
  expect(result.text).toBeDefined();
  expect(result.text).toBeTruthy();
  //   expect(result.model)
});
