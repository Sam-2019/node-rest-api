require("dotenv").config();
const { ACTIVE_MODEL } = require("../../utils/config");
const { model } = require("../../db/model");
const Model = model(ACTIVE_MODEL);
const { data } = require("./mock_data");
const { connectDB, disconnectDB } = require("../../db");

describe("Connection", () => {
  beforeAll(async () => {
    connectDB();
  });

  afterAll(async () => {
    disconnectDB();
  });

  test("Retrieve attendee by Id", async () => {
    const attendee = await Model.findById(data.id);
    expect(attendee.id).toBe(data.id);
    expect(attendee.mobile_number).toBe(data.mobile_number);
    expect(attendee.number).toBe(data.number);
    expect(attendee.message).toBeNull();
    expect(attendee.account_number).toBe(data.account_number);
    expect(attendee.bank_id).toBe(data.bank_id);
    expect(attendee.is_momo_active).toBeTruthy();
    expect(attendee.name).toBe(data.name);
  });
});
