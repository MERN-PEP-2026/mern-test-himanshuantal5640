import React from "react";
import { useState, useContext } from "react";
import { registerUser } from "../../services/authService";
import { sendOtp } from "../../services/otpService";
import { ToastContext } from "../../context/ToastContext";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function RegisterForm({ switchView, setEmailForOtp }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const { showToast } = useContext(ToastContext);

  const handleSubmit = async () => {
    try {
      setLoading(true);

     
      await registerUser(form);

    
      await sendOtp(form.email);

      showToast("OTP sent to your email");

      
      setEmailForOtp(form.email);


      switchView("otp");

    } catch (err) {
      showToast(
        err.response?.data?.message || "Registration failed",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">
        Register
      </h2>

      <div className="space-y-4">
        <Input
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <Input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <Button full loading={loading} onClick={handleSubmit}>
          Create Account
        </Button>

        <p
          onClick={() => switchView("login")}
          className="text-sm text-[#c8f135] cursor-pointer text-center"
        >
          Already have an account?
        </p>
      </div>
    </>
  );
}