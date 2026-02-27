import React from "react";

// import { useState } from "react";
// import { verifyOtp } from "../../services/otpService";
// import Button from "../ui/Button";
// import Input from "../ui/Input";
// import { useNavigate } from "react-router-dom";

// export default function OtpVerification({ email, switchView }) {
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleVerify = async () => {
//     try {
//       setLoading(true);
//       await verifyOtp({ email, otp });

//       alert("OTP Verified Successfully");

//       // After verification → go to login
//       switchView("login");

//     } catch (err) {
//       alert(err.response?.data?.message || "Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h2 className="text-xl font-bold mb-6 text-center">
//         OTP Verification
//       </h2>

//       <div className="space-y-4">
//         <Input
//           placeholder="Enter 6-digit OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <Button full loading={loading} onClick={handleVerify}>
//           Verify OTP
//         </Button>

//         <p
//           onClick={() => switchView("login")}
//           className="text-sm text-[#c8f135] cursor-pointer text-center"
//         >
//           Back to Login
//         </p>
//       </div>
//     </>
//   );
// }

// import { useState, useContext } from "react";
// import { verifyOtp } from "../../services/otpService";
// import { loginUser } from "../../services/authService";
// import { AuthContext } from "../../context/AuthContext";
// import { ToastContext } from "../../context/ToastContext";
// import { useNavigate } from "react-router-dom";
// import Button from "../ui/Button";
// import Input from "../ui/Input";

// export default function OtpVerification({ email }) {
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { login } = useContext(AuthContext);
//   const { showToast } = useContext(ToastContext);

//   const navigate = useNavigate();

//   const handleVerify = async () => {
//     try {
//       setLoading(true);

//       // 1️⃣ Verify OTP
//       await verifyOtp({ email, otp });

//       showToast("Email verified successfully 🎉");

//       // 2️⃣ Auto login after verification
//       const res = await loginUser({
//         email,
//         password: localStorage.getItem("tempPassword")
//       });

//       login(res.data.token);

//       navigate("/dashboard");

//     } catch (err) {
//       showToast(
//         err.response?.data?.message || "Invalid OTP",
//         "error"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h2 className="text-xl font-bold mb-6 text-center">
//         Verify OTP
//       </h2>

//       <div className="space-y-4">
//         <Input
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <Button full loading={loading} onClick={handleVerify}>
//           Verify
//         </Button>
//       </div>
//     </>
//   );
// }

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