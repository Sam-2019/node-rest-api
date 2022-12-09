const axios = require("axios");
const { pingHellio, pingServer } = require("../../utils/ping");
const {
  HELIOSUP,
  HELIOSDOWN,
  SERVERUP,
  SERVERDOWN,
} = require("../../utils/constants");

jest.mock("axios");

describe("On pingHellio", () => {
  test("should pass", async () => {
    const resp = { data: HELIOSUP };
    axios.get.mockResolvedValue(resp);

    const data = await pingHellio();
    return expect(data).toEqual(HELIOSUP);
  });

  test("should fail", async () => {
    const resp = { data: HELIOSDOWN };
    axios.get.mockResolvedValue(resp);

    try {
      return await pingHellio();
    } catch (data) {
      return expect(data).toEqual(HELIOSDOWN);
    }
  });
});

describe("On pingServer", () => {
  test("should pass", async () => {
    const resp = { data: SERVERUP };
    axios.get.mockResolvedValue(resp);

    const data = await pingServer();
    return expect(data).toEqual(SERVERUP);
  });

  test("should fail", async () => {
    const resp = { data: SERVERDOWN };
    axios.get.mockResolvedValue(resp);

    try {
      return await pingServer();
    } catch (data) {
      return expect(data).toEqual(SERVERDOWN);
    }
  });
});
