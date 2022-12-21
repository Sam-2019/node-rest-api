const axios = require("axios");
const { pingHellio, pingServer, ping } = require("../../utils/ping");
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

test("should run ping", async () => {
  expect(ping()).toBeUndefined();
});

jest.useFakeTimers();
it("calls the callback after 1 second via advanceTimersByTime", () => {
  const { pinger } = require("../../utils/ping");
  const callback = jest.fn();

  pinger(callback);
  expect(callback).not.toBeCalled();
  jest.advanceTimersByTime(1000);
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
