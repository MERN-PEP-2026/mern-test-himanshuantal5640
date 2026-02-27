import React from "react";

import { useState } from "react";
import { verifyOtp } from "../../services/otpService";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";

export default function OtpVerification({ email, switchView }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      setLoading(true);
      await verifyOtp({ email, otp });

      alert("OTP Verified Successfully");

      // After verification → go to login
      switchView("login");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">
        OTP Verification
      </h2>

      <div className="space-y-4">
        <Input
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <Button full loading={loading} onClick={handleVerify}>
          Verify OTP
        </Button>

        <p
          onClick={() => switchView("login")}
          className="text-sm text-[#c8f135] cursor-pointer text-center"
        >
          Back to Login
        </p>
      </div>
    </>
  );
}