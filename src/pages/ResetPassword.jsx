// src/pages/ResetPassword.jsx

import { useState } from "react";

import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

import {
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  Lock,
  KeyRound,
} from "lucide-react";

function ResetPassword() {

  const { token } =
    useParams();

  const navigate =
    useNavigate();

  const [password,
    setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [msg,
    setMsg] =
    useState("");

  const [strength,
    setStrength] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  // =========================
  // PASSWORD STRENGTH
  // =========================
  const checkStrength = (
    pass
  ) => {

    let score = 0;

    if (
      /[A-Z]/.test(pass)
    )
      score++;

    if (
      /[0-9]/.test(pass)
    )
      score++;

    if (
      /[!@#$%^&*]/.test(pass)
    )
      score++;

    if (
      pass.length >= 8
    )
      score++;

    if (score <= 2)
      return "Weak";

    if (score === 3)
      return "Medium";

    return "Strong";
  };

  // =========================
  // GENERATE PASSWORD
  // =========================
  const generatePassword =
    () => {

      const newPass =
        "A" +
        Math.random()
          .toString(36)
          .slice(2, 5) +
        "1@" +
        Math.random()
          .toString(36)
          .slice(2, 5);

      setPassword(
        newPass
      );

      setConfirmPassword(
        newPass
      );

      setStrength(
        checkStrength(
          newPass
        )
      );
    };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setMsg("");

      if (
        password !==
        confirmPassword
      ) {

        return setMsg(
          "❌ Passwords do not match"
        );
      }

      if (
        strength ===
        "Weak"
      ) {

        return setMsg(
          "❌ Please use stronger password"
        );
      }

      try {

        setLoading(true);

        const res =
          await fetch(
            `http://localhost:5000/api/auth/reset-password/${token}`,
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  password,
                }),
            }
          );

        const data =
          await res.json();

        if (res.ok) {

          setMsg(
            "✅ Password Updated Successfully"
          );

          setTimeout(
            () =>
              navigate(
                "/signup"
              ),
            1500
          );

        } else {

          setMsg(
            "❌ " +
            data.message
          );
        }

      } catch {

        setMsg(
          "❌ Network Error"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

      {/* BACK BUTTON */}
      <button
        onClick={() =>
          navigate("/signup")
        }
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-black hover:scale-105 transition z-20"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-10">

          <h1 className="text-5xl font-bold leading-tight">
            Reset
            <br />
            Password 🔐
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Create a new secure password
            to protect your account and
            continue shopping safely.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">
              <ShieldCheck />
              Secure Account Protection
            </div>

            <div className="flex items-center gap-3">
              <Lock />
              Strong Password Generator
            </div>

            <div className="flex items-center gap-3">
              <KeyRound />
              Easy Password Recovery
            </div>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="reset"
            className="w-72 mt-10 mx-auto animate-bounce"
          />
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Create New Password
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your new password below
          </p>

          {/* FORM */}
          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-5 mt-8"
          >

            {/* PASSWORD */}
            <div className="relative">

              <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 bg-white shadow-sm">

                <Lock className="text-gray-400" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="New Password"
                  value={
                    password
                  }
                  onChange={(e) => {

                    setPassword(
                      e.target.value
                    );

                    setStrength(
                      checkStrength(
                        e.target.value
                      )
                    );
                  }}
                  className="w-full ml-3 outline-none bg-transparent"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="text-gray-500"
                >
                  {
                    showPassword
                      ? <EyeOff />
                      : <Eye />
                  }
                </button>

              </div>

              {/* STRENGTH */}
              {
                password && (
                  <p
                    className={`mt-2 text-sm font-semibold

                    ${
                      strength ===
                        "Weak"
                        ? "text-red-500"
                        : strength ===
                          "Medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                    }`}
                  >
                    Password Strength:
                    {" "}
                    {strength}
                  </p>
                )
              }

            </div>

            {/* CONFIRM */}
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 bg-white shadow-sm">

              <Lock className="text-gray-400" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm Password"
                value={
                  confirmPassword
                }
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full ml-3 outline-none bg-transparent"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="text-gray-500"
              >
                {
                  showConfirmPassword
                    ? <EyeOff />
                    : <Eye />
                }
              </button>

            </div>

            {/* GENERATE */}
            <button
              type="button"
              onClick={
                generatePassword
              }
              className="text-blue-600 font-semibold hover:underline"
            >
              Generate Strong Password
            </button>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={
                loading
              }
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {
                loading
                  ? "Updating..."
                  : "Reset Password"
              }
            </button>

            {/* MESSAGE */}
            {
              msg && (
                <p className="text-center font-semibold">
                  {msg}
                </p>
              )
            }

          </form>

          {/* LOGIN LINK */}
          <p className="text-center mt-8 text-gray-600">

            Remember your password?{" "}

            <Link
              to="/signup"
              className="text-blue-600 font-bold hover:underline"
            >
              Login Here
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default ResetPassword;