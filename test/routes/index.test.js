const request = require("supertest");
const app = require("../../app");

describe("Get api endpoints", () => {
  test("should return getNames", async () => {
    const res = await request(app).get("/api/names");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: "Konnichiwa",
    });
  });

  test("should return getName", async () => {
    const res = await request(app).get("/api/get_name/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: "Konnichiwa",
    });
  });

  test("should return getSaved", async () => {
    const res = await request(app).get("/api/get_saved");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: "Konnichiwa",
    });
  });

  test("should return getIdentity", async () => {});
});
