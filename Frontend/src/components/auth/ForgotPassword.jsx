import React from "react";

import { useState } from "react";
import { resetPassword } from "../../services/authService";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function ForgotPassword({ switchView }) {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await resetPassword(form);
      alert("Password updated");
      switchView("login");
    } catch {
      alert("Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">
        Reset Password
      </h2>

      <div className="space-y-4">
        <Input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="New Password"
          onChange={(e) =>
            setForm({ ...form, newPassword: e.target.value })
          }
        />

        <Button full loading={loading} onClick={handleSubmit}>
          Reset
        </Button>
      </div>
    </>
  );
}