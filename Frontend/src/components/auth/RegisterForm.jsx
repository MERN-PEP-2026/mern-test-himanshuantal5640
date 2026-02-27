import React from "react";
import { useState, useContext } from "react";
import { registerUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function RegisterForm({ switchView }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await registerUser(form);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">Register</h2>

      <div className="space-y-4">
        <Input
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
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