import React from "react";
import { useState, useContext } from "react";
import { verifyOtp } from "../../services/otpService";
import { ToastContext } from "../../context/ToastContext";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function OtpVerification({ email, switchView }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const { showToast } = useContext(ToastContext);

  const handleVerify = async () => {
    try {
      setLoading(true);

      await verifyOtp({ email, otp });

      showToast("Email verified successfully 🎉");

      // ✅ DO NOT auto login
      // Just go back to login screen
      switchView("login");

    } catch (err) {
      showToast(
        err.response?.data?.message || "Invalid or expired OTP",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">
        Verify OTP
      </h2>

      <div className="space-y-4">
        <Input
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <Button full loading={loading} onClick={handleVerify}>
          Verify
        </Button>
      </div>
    </>
  );
}