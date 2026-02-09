import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const [role, setRole] = useState("student"); // ✅ role state
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="mx-auto h-12 w-12 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <h1 className="text-2xl font-bold mt-3">AtEase</h1>
          <p className="text-gray-500 text-sm">Student Wellness Portal</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              mode === "login" ? "bg-white shadow" : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              mode === "signup" ? "bg-white shadow" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();

            // ✅ role-based redirect
            if (role === "student") navigate("/student");
            if (role === "counselor") navigate("/counselor");
            if (role === "admin") navigate("/admin");
          }}
        >
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          {/* ✅ ROLE DROPDOWN (LOGIN + SIGNUP) */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="student">Student</option>
            <option value="counselor">Counselor</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ✨ Your wellness journey starts here
        </p>
      </div>
    </div>
  );
}
