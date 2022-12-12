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

  test("Retrieve user by Id", async () => {
    const new_user = await new Model(mock_data).save();

    const user = await Model.findById(new_user.id);
    expect(user.id).toBe(new_user.id);
    expect(user.mobile_number).toBe(mock_data.mobile_number);
    expect(user.number).toBe(mock_data.number);
    expect(user.message).toBeNull();
    expect(user.account_number).toBe(mock_data.account_number);
    expect(user.bank_id).toBe(mock_data.bank_id);
    expect(user.is_momo_active).toBeTruthy();
    expect(user.name).toBe(mock_data.name);
  });
});
