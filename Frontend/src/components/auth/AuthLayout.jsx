import React from "react";
// import { useState } from "react";
// import LoginForm from "./LoginForm";
// import RegisterForm from "./RegisterForm";
// import ForgotPassword from "./ForgotPassword";

// export default function AuthLayout() {
//   const [view, setView] = useState("login");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#07080d]">
//       <div className="bg-[#10121a] p-8 rounded-xl border border-[#252838] w-96">
//         {view === "login" && <LoginForm switchView={setView} />}
//         {view === "register" && <RegisterForm switchView={setView} />}
//         {view === "forgot" && <ForgotPassword switchView={setView} />}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import OtpVerification from "./OtpVerification";

export default function AuthLayout() {
  const [view, setView] = useState("login");
  const [emailForOtp, setEmailForOtp] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07080d]">
      <div className="bg-[#10121a] p-8 rounded-xl border border-[#252838] w-96">
        {view === "login" && (
          <LoginForm switchView={setView} />
        )}

        {view === "register" && (
          <RegisterForm
            switchView={setView}
            setEmailForOtp={setEmailForOtp}
          />
        )}

        {view === "forgot" && (
          <ForgotPassword switchView={setView} />
        )}

        {view === "otp" && (
          <OtpVerification
            email={emailForOtp}
            switchView={setView}
          />
        )}
      </div>
    </div>
  );
}