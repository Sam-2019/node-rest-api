const { model } = require("../../db/model");

it("should return Attendee model", async () => {
  const result = model("attendee");
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).toBeTruthy();
});

it("should return Numbers model", async () => {
  const result = model("number");
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).toBeTruthy();
});

it("should return Identity model", async () => {
  const result = model("identity");
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).toBeTruthy();
});

it("should return empty model", async () => {
  const result = model();
  expect(result).toBeNull();
  expect(result).toBeDefined();
  expect(result).toBeFalsy();
});
