// src/pages/Register.jsx

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  Upload,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Register() {

  const navigate =
    useNavigate();

  const [form,
    setForm] =
    useState({
      fullName: "",
      username: "",
      email: "",
      gender: "Male",
      mobile: "",
      dob: "",
      role: "user",
      address: "",
      password: "",
      confirmPassword: "",
    });

  const [profilePhoto,
    setProfilePhoto] =
    useState(null);

  const [preview,
    setPreview] =
    useState(null);

  const [message,
    setMessage] =
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
  // INPUT CHANGE
  // =========================
  const handleChange = (
    e
  ) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // =========================
  // PHOTO UPLOAD
  // =========================
  const handlePhotoChange =
    (e) => {

      const file =
        e.target.files[0];

      if (!file)
        return;

      if (
        file.size <
          20 * 1024 ||
        file.size >
          2 * 1024 * 1024
      ) {

        setMessage(
          "❌ File size must be between 20KB and 2MB"
        );

        return;
      }

      setProfilePhoto(
        file
      );

      setPreview(
        URL.createObjectURL(
          file
        )
      );

      setMessage("");
    };

  // =========================
  // REGISTER
  // =========================
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setMessage("");

      if (
        form.password !==
        form.confirmPassword
      ) {

        setMessage(
          "❌ Passwords do not match"
        );

        return;
      }

      if (
        form.password.length <
        6
      ) {

        setMessage(
          "❌ Password must be at least 6 characters"
        );

        return;
      }

      try {

        setLoading(true);

        const formData =
          new FormData();

        Object.keys(
          form
        ).forEach(
          (key) => {

            formData.append(
              key,
              form[key]
            );
          }
        );

        if (
          profilePhoto
        ) {

          formData.append(
            "profilePhoto",
            profilePhoto
          );
        }

        // API
        const res =
          await fetch(
            "http://localhost:5000/api/auth/register",
            {
              method:
                "POST",
              body:
                formData,
            }
          );

        const data =
          await res.json();

        if (!res.ok) {

          setMessage(
            "❌ " +
            (
              data.message ||
              "Registration Failed"
            )
          );

          setLoading(false);

          return;
        }

        // SUCCESS
        setMessage(
          "✅ Registration Successful"
        );

        // RESET
        setForm({
          fullName: "",
          username: "",
          email: "",
          gender: "Male",
          mobile: "",
          dob: "",
          role: "user",
          address: "",
          password: "",
          confirmPassword: "",
        });

        setPreview(
          null
        );

        setProfilePhoto(
          null
        );

        setTimeout(
          () => {

            navigate(
              "/signup"
            );
          },
          1500
        );

      } catch (err) {

        console.log(
          err
        );

        setMessage(
          "❌ Server Error"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  return (

    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">

      {/* BG EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-12">

          <button
            onClick={() =>
              navigate(
                "/signup"
              )
            }
            className="flex items-center gap-2 mb-8 hover:translate-x-1 transition"
          >
            <ArrowLeft />
            Back
          </button>

          <h1 className="text-5xl font-extrabold leading-tight">
            Create
            <br />
            Your Account ✨
          </h1>

          <p className="mt-6 text-lg text-cyan-100 leading-8">
            Join Shop_Now today and
            explore premium shopping,
            fast checkout, wishlist,
            secure payments and more.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">
              <ShieldCheck />
              Secure Authentication
            </div>

            <div className="flex items-center gap-3">
              <Sparkles />
              Personalized Experience
            </div>

            <div className="flex items-center gap-3">
              <User />
              Easy User Dashboard
            </div>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="register"
            className="w-72 mt-10 mx-auto animate-bounce"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 lg:p-10 overflow-y-auto max-h-screen">

          <h2 className="text-4xl font-bold text-gray-800">
            Register Now
          </h2>

          <p className="text-gray-500 mt-2">
            Fill your details below
          </p>

          {/* PHOTO */}
          <div className="flex justify-center mt-8 mb-6">

            <label className="cursor-pointer relative group">

              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl bg-white flex items-center justify-center">

                {
                  preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Upload
                      className="text-gray-400"
                      size={40}
                    />
                  )
                }

              </div>

              <div className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition">
                Upload
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handlePhotoChange
                }
                className="hidden"
              />

            </label>

          </div>

          {/* FORM */}
          <form
            onSubmit={
              handleSubmit
            }
            className="grid md:grid-cols-2 gap-5"
          >

            {/* FULL NAME */}
            <InputField
              icon={<User />}
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={
                form.fullName
              }
              onChange={
                handleChange
              }
            />

            {/* USERNAME */}
            <InputField
              type="text"
              name="username"
              placeholder="Username"
              value={
                form.username
              }
              onChange={
                handleChange
              }
            />

            {/* EMAIL */}
            <InputField
              icon={<Mail />}
              type="email"
              name="email"
              placeholder="Email Address"
              value={
                form.email
              }
              onChange={
                handleChange
              }
            />

            {/* MOBILE */}
            <InputField
              icon={<Phone />}
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={
                form.mobile
              }
              onChange={
                handleChange
              }
            />

            {/* GENDER */}
            <select
              name="gender"
              value={
                form.gender
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option>
                Male
              </option>

              <option>
                Female
              </option>

              <option>
                Other
              </option>

            </select>

            {/* DOB */}
            <div className="relative">

              <Calendar
                className="absolute left-4 top-4 text-gray-400"
                size={18}
              />

              <input
                type="date"
                name="dob"
                value={
                  form.dob
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 p-3 pl-10 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

            </div>

            {/* ADDRESS */}
            <div className="relative md:col-span-2">

              <MapPin
                className="absolute left-4 top-4 text-gray-400"
                size={18}
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={
                  form.address
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 p-3 pl-10 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* PASSWORD */}
            <PasswordField
              icon={<Lock />}
              show={
                showPassword
              }
              setShow={
                setShowPassword
              }
              name="password"
              placeholder="Password"
              value={
                form.password
              }
              onChange={
                handleChange
              }
            />

            {/* CONFIRM */}
            <PasswordField
              icon={<Lock />}
              show={
                showConfirmPassword
              }
              setShow={
                setShowConfirmPassword
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                form.confirmPassword
              }
              onChange={
                handleChange
              }
            />

            {/* BUTTON */}
            <div className="md:col-span-2">

              <button
                type="submit"
                disabled={
                  loading
                }
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {
                  loading
                    ? "Creating Account..."
                    : "Register Now"
                }
              </button>

            </div>

          </form>

          {/* LOGIN */}
          <p className="text-center mt-8 text-gray-600">

            Already have an account?{" "}

            <Link
              to="/signup"
              className="text-cyan-600 font-bold hover:underline"
            >
              Login Here
            </Link>

          </p>

          {/* MESSAGE */}
          {
            message && (
              <div className="mt-5 text-center font-semibold">
                {message}
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

/* =========================
   INPUT FIELD
========================= */

const InputField = ({
  icon,
  type,
  ...props
}) => {

  return (

    <div className="relative">

      {
        icon && (
          <div className="absolute left-4 top-4 text-gray-400">
            {icon}
          </div>
        )
      }

      <input
        type={type}
        {...props}
        className={`w-full border border-gray-300 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400

        ${
          icon
            ? "pl-10"
            : ""
        }`}
        required
      />

    </div>
  );
};

/* =========================
   PASSWORD FIELD
========================= */

const PasswordField = ({
  icon,
  show,
  setShow,
  ...props
}) => {

  return (

    <div className="relative">

      <div className="absolute left-4 top-4 text-gray-400">
        {icon}
      </div>

      <input
        type={
          show
            ? "text"
            : "password"
        }
        {...props}
        className="w-full border border-gray-300 p-3 pl-10 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
        required
      />

      <button
        type="button"
        onClick={() =>
          setShow(!show)
        }
        className="absolute right-4 top-4 text-gray-500"
      >
        {
          show
            ? <EyeOff size={18} />
            : <Eye size={18} />
        }
      </button>

    </div>
  );
};

export default Register;