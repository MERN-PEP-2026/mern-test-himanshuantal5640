import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
      <BrowserRouter>
        <Routes>

          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;