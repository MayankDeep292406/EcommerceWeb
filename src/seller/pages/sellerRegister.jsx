import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Store,
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  Landmark,
  CreditCard,
  Image as ImageIcon,
  ArrowLeft,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const SellerRegister = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    storeName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    businessType: "",
    gstNumber: "",
    panNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    shopLogo: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData({ ...formData, shopLogo: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const sellerData = new FormData();
      Object.keys(formData).forEach((key) => {
        sellerData.append(key, formData[key]);
      });

      const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const res = await fetch(
        `${BASE}/api/seller/register`,
        {
          method: "POST",
          body: sellerData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ " + data.message);
        return;
      }

      setMessage("✅ Seller Registered Successfully");

      setTimeout(() => navigate("/signup"), 1500);
    } catch (err) {
      setMessage("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/signup")}
        className="absolute top-5 left-5 flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl hover:bg-orange-50 transition z-50"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid lg:grid-cols-2 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-10 flex flex-col justify-center">
          <Store size={42} />
          <h1 className="text-4xl font-bold mt-4">Shop_Now</h1>

          <h2 className="text-2xl mt-4 font-semibold">
            Start Selling Online 🚀
          </h2>

          <p className="text-orange-100 mt-4">
            Manage your store, products, orders and grow your business.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck /> Secure Platform
            </div>
            <div className="flex items-center gap-2">
              <Building2 /> Business Tools
            </div>
            <div className="flex items-center gap-2">
              <Store /> Unlimited Products
            </div>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            className="w-64 mt-10 mx-auto animate-bounce"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 max-h-screen overflow-y-auto">

          <h2 className="text-3xl font-bold">Seller Registration</h2>
          <p className="text-gray-500 mb-6">
            Fill all details carefully
          </p>

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <label className="cursor-pointer">
              <div className="w-28 h-28 rounded-full border-4 border-orange-400 flex items-center justify-center overflow-hidden bg-gray-100">
                {preview ? (
                  <img src={preview} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="text-orange-400" />
                )}
              </div>
              <input type="file" hidden onChange={handleFileChange} />
            </label>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* PERSONAL */}
            <Section title="Personal Details" />
            <div className="grid md:grid-cols-2 gap-4">
              <Input icon={<User />} name="fullName" placeholder="Full Name" onChange={handleChange} />
              <Input icon={<Store />} name="storeName" placeholder="Store Name" onChange={handleChange} />
              <Input icon={<Mail />} name="email" placeholder="Email" onChange={handleChange} />
              <Input icon={<Phone />} name="mobile" placeholder="Mobile" onChange={handleChange} />
            </div>

            {/* SECURITY */}
            <Section title="Security" />
            <div className="grid md:grid-cols-2 gap-4">
              <Password
                icon={<Lock />}
                name="password"
                placeholder="Password"
                show={showPassword}
                setShow={setShowPassword}
                onChange={handleChange}
              />
              <Password
                icon={<Lock />}
                name="confirmPassword"
                placeholder="Confirm Password"
                show={showConfirmPassword}
                setShow={setShowConfirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* BUSINESS */}
            <Section title="Business Details" />
            <select
              name="businessType"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            >
              <option value="">Select Business Type</option>
              <option>Individual</option>
              <option>Company</option>
              <option>Partnership</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <Input icon={<Landmark />} name="gstNumber" placeholder="GST Number" onChange={handleChange} />
              <Input icon={<CreditCard />} name="panNumber" placeholder="PAN Number" onChange={handleChange} />
            </div>

            {/* ADDRESS */}
            <Section title="Address" />
            <div className="grid md:grid-cols-2 gap-4">
              <Input icon={<MapPin />} name="address" placeholder="Address" onChange={handleChange} />
              <Input icon={<MapPin />} name="city" placeholder="City" onChange={handleChange} />
              <Input icon={<MapPin />} name="state" placeholder="State" onChange={handleChange} />
              <Input icon={<MapPin />} name="pincode" placeholder="Pincode" onChange={handleChange} />
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition"
            >
              {loading ? "Creating Account..." : "Register Seller"}
            </button>

            {/* LOGIN */}
            <p className="text-center text-gray-600">
              Already have account?
              <Link className="text-orange-500 ml-2 font-bold" to="/Signup">
                Seller Login
              </Link>
            </p>

            {message && (
              <p className="text-center font-semibold">{message}</p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

/* COMPONENTS */

const Section = ({ title }) => (
  <h3 className="text-orange-500 font-bold border-l-4 border-orange-500 pl-3">
    {title}
  </h3>
);

const Input = ({ icon, ...props }) => (
  <div className="flex items-center gap-2 border p-3 rounded-xl">
    {icon}
    <input className="w-full outline-none" {...props} required />
  </div>
);

const Password = ({ icon, show, setShow, ...props }) => (
  <div className="flex items-center gap-2 border p-3 rounded-xl">
    {icon}
    <input
      type={show ? "text" : "password"}
      className="w-full outline-none"
      {...props}
      required
    />
    <button type="button" onClick={() => setShow(!show)}>
      {show ? <EyeOff /> : <Eye />}
    </button>
  </div>
);

export default SellerRegister;