require("dotenv").config();
const {
  DB_URI,
  NODE_ENV,
  NIMBLE,
  PORT,
  SLACK_WEBHOOK,
  SET_INTERVAL,
  TOKEN,
  TRUECALLER,
  AUTH_KEY,
  ACTIVE_MODEL,
} = require("../../utils/config");

test("validates db_uri", () => {
  expect(DB_URI).not.toBeNull();
  expect(DB_URI).toBeDefined();
  expect(DB_URI).toBeTruthy();
});

test("validates node_env", () => {
  expect(NODE_ENV).not.toBeNull();
  expect(NODE_ENV).toBeDefined();
  expect(NODE_ENV).toBeTruthy();
});

test("validates nimble", () => {
  expect(NIMBLE).not.toBeNull();
  expect(NIMBLE).toBeDefined();
  expect(NIMBLE).toBeTruthy();
});

test("validates port", () => {
  expect(PORT).not.toBeNull();
  expect(PORT).toBeDefined();
  expect(PORT).toBeTruthy();
});

test("validates slack_webhook", () => {
  expect(SLACK_WEBHOOK).not.toBeNull();
  expect(SLACK_WEBHOOK).toBeDefined();
  expect(SLACK_WEBHOOK).toBeTruthy();
});

test("validates set_interval", () => {
  expect(SET_INTERVAL).not.toBeNull();
  expect(SET_INTERVAL).toBeDefined();
  expect(SET_INTERVAL).toBeTruthy();
});

test("validates token", () => {
  expect(TOKEN).not.toBeNull();
  expect(TOKEN).toBeDefined();
  expect(TOKEN).toBeTruthy();
});

test("validates true_caller", () => {
  expect(TRUECALLER).not.toBeNull();
  expect(TRUECALLER).toBeDefined();
  expect(TRUECALLER).toBeTruthy();
});

test("validates auth_key", () => {
  expect(AUTH_KEY).not.toBeNull();
  expect(AUTH_KEY).toBeDefined();
  expect(AUTH_KEY).toBeTruthy();
});

test("validates active_model", () => {
  expect(ACTIVE_MODEL).not.toBeNull();
  expect(ACTIVE_MODEL).toBeDefined();
  expect(ACTIVE_MODEL).toBeTruthy();
});
