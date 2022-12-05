const axios = require("axios");
const users = [{ name: "Bob" }];

jest.mock("axios");

test("should fetch users", () => {
  const local_users = [{ name: "Bob" }];
  axios.get.mockResolvedValue(local_users);

  expect(users).toEqual(local_users);
  expect(users).toBeTruthy();

  console.log(users);
  //   expect(users).toContain("Bob");
});
