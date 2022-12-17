require("dotenv").config();
const { identity_mock_data } = require("../../../../utils/mock_data");
const {
  getIdentity,
  addIdentity,
} = require("../../../../db/repository/identity");
const { connectDB, disconnectDB } = require("../../../../db/");

describe("Test Identity", () => {
  beforeAll(async () => {
    connectDB();
  });

  afterAll(async () => {
    disconnectDB();
  });

  test("save user", async () => {
    const user = await addIdentity(identity_mock_data);

    expect(user.id).not.toBeNull();
    expect(user.name).toBe(identity_mock_data.name);
    expect(user.other_name).toBe(identity_mock_data.other_name);
    expect(user.email).toBe(identity_mock_data.email);
    expect(user.gender).toBe(identity_mock_data.gender);
    expect(user.account_number).toBe(identity_mock_data.account_number);
    expect(user.bank_id).toBe(identity_mock_data.bank_id);
  });

  test("Retrieve user by account number", async () => {
    const user = await getIdentity(identity_mock_data.account_number);
    
    expect(user.id).not.toBeNull();
    expect(user.name).toBe(identity_mock_data.name);
    expect(user.other_name).toBe(identity_mock_data.other_name);
    expect(user.email).toBe(identity_mock_data.email);
    expect(user.gender).toBe(identity_mock_data.gender);
    expect(user.account_number).toBe(identity_mock_data.account_number);
    expect(user.bank_id).toBe(identity_mock_data.bank_id);
  });
});
