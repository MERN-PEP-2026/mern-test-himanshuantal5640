
// import React from "react";
// import { useState, useContext } from "react";
// import { loginUser } from "../../services/authService";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     const res = await loginUser(form);
//     login(res.data.token);
//     navigate("/dashboard");
//   };

//   return (
//     <div className="space-y-4">
//       <input
//         className="w-full p-3 bg-[#10121a] border border-[#252838] rounded-lg"
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         type="password"
//         className="w-full p-3 bg-[#10121a] border border-[#252838] rounded-lg"
//         placeholder="Password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />

//       <button
//         onClick={handleSubmit}
//         className="w-full bg-[#c8f135] text-black py-3 rounded-lg font-bold"
//       >
//         Login
//       </button>
//     </div>
//   );
// }


import React from "react";
// import { useState, useContext } from "react";
// import { loginUser } from "../../services/authService";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Button from "../ui/Button";
// import Input from "../ui/Input";

// export default function LoginForm({ switchView }) {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const res = await loginUser(form);
//       login(res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

//       <div className="space-y-4">
//         <Input
//           placeholder="Email"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />

//         <Button full loading={loading} onClick={handleSubmit}>
//           Sign In
//         </Button>

//         <p
//           onClick={() => switchView("forgot")}
//           className="text-sm text-gray-400 cursor-pointer text-center"
//         >
//           Forgot password?
//         </p>

//         <p
//           onClick={() => switchView("register")}
//           className="text-sm text-[#c8f135] cursor-pointer text-center"
//         >
//           Create account
//         </p>
//       </div>
//     </>
//   );
// }

import { useState, useContext } from "react";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { ToastContext } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function LoginForm({ switchView }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await loginUser(form);

      login(res.data.token);
      showToast("Login Successful 🎉");

      navigate("/dashboard");
    } catch (err) {
      showToast(
        err.response?.data?.message || "Login failed",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

      <div className="space-y-4">
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
          Sign In
        </Button>

        <p
          onClick={() => switchView("forgot")}
          className="text-sm text-gray-400 cursor-pointer text-center"
        >
          Forgot password?
        </p>

        <p
          onClick={() => switchView("register")}
          className="text-sm text-[#c8f135] cursor-pointer text-center"
        >
          Create account
        </p>
      </div>
    </>
  );
}