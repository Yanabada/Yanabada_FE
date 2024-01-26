/* eslint-disable */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

admin.initializeApp();

const accountSid = "AC4fcb1e4f01c88548697a10bdd94af92f";
const authToken = import.meta.env.VITE_APP_TWILLIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

exports.sendVerificationCode = functions.https.onCall(async (data, context) => {
  const { phoneNumber } = data;

  try {
    const verification = await client.verify
      .services("VA955ef896e56fa33814bd1b2efff0f37e")
      .verifications.create({
        to: phoneNumber,
        channel: "sms"
      });

    return { success: true, verification };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
});

exports.checkVerificationCode = functions.https.onCall(async (data, context) => {
  const { phoneNumber, code } = data;

  try {
    const check = await client.verify
      .services("your_verify_service_sid")
      .verificationChecks.create({
        to: phoneNumber,
        code
      });

    return check.status === "approved" ? { success: true, check } : { success: false, check };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
});
