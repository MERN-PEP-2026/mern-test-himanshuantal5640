import api from "./api";

export const sendOtp = (email) =>
  api.post("/otp/send", { email });

export const verifyOtp = (data) =>
  api.post("/otp/verify", data);