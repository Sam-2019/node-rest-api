require("dotenv").config();
const { ACTIVE_MODEL } = require("../../utils/config");
const { model } = require("../../db/model");
const Model = model(ACTIVE_MODEL);
const { mock_data } = require("../../utils/mock_data");
const { connectDB, disconnectDB } = require("../../db");

describe("Connection", () => {
  beforeAll(async () => {
    connectDB();
  });

  afterAll(async () => {
    disconnectDB();
  });

  test("Retrieve attendee by Id", async () => {
    const new_attendee = await new Model(mock_data).save();

    const attendee = await Model.findById(new_attendee.id);
    expect(attendee.id).toBe(new_attendee.id);
    expect(attendee.mobile_number).toBe(mock_data.mobile_number);
    expect(attendee.number).toBe(mock_data.number);
    expect(attendee.message).toBeNull();
    expect(attendee.account_number).toBe(mock_data.account_number);
    expect(attendee.bank_id).toBe(mock_data.bank_id);
    expect(attendee.is_momo_active).toBeTruthy();
    expect(attendee.name).toBe(mock_data.name);
  });
});
