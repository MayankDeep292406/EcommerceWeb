import { useState } from "react";

function SocialLogin() {
  const [loading, setLoading] = useState("");

  const handleSocialLogin = (provider) => {
    setLoading(provider);

    // redirect to backend OAuth route
    window.location.href = `http://localhost:5000/api/auth/${provider}`;
  };

  return (
    <div className="mt-5 space-y-3">

      {/* GOOGLE */}
      <button
        onClick={() => handleSocialLogin("google")}
        className="w-full border py-2 rounded hover:bg-gray-100"
      >
        {loading === "google" ? "Connecting..." : "Continue with Google"}
      </button>

      {/* FACEBOOK */}
      <button
        onClick={() => handleSocialLogin("facebook")}
        className="w-full border py-2 rounded hover:bg-gray-100"
      >
        {loading === "facebook" ? "Connecting..." : "Continue with Facebook"}
      </button>

      {/* TWITTER */}
      <button
        onClick={() => handleSocialLogin("twitter")}
        className="w-full border py-2 rounded hover:bg-gray-100"
      >
        {loading === "twitter" ? "Connecting..." : "Continue with Twitter"}
      </button>

    </div>
  );
}

export default SocialLogin;