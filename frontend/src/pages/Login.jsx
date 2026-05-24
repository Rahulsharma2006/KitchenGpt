import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {

  // Show Password State
  const [showPassword, setShowPassword] = useState(false);


  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error State
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  // Login Function
const handleLogin = () => {

  if (!email || !password) {
    setError("All fields are required");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  setError("");

  // Save User
  localStorage.setItem("isLoggedIn", "true");

  // Toast
  toast.success("Login Successful 🚀");
 setTimeout(() => {
  window.location.href = "/";
}, 1500);;

};

  return (

    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-1">

        {/* Left Side */}
        <div className="lg:w-1/2 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold mb-8 leading-tight text-black">
            Welcome To <br /> KitchenGPT 🍳
          </h1>

          <p className="text-black/80 text-lg leading-8 mb-10 max-w-xl">
            Turn leftover food into delicious meals with AI.
            Save food, save money, and discover amazing recipes instantly.
          </p>

          {/* Features */}
          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="text-4xl">🍕</div>

              <div>

                <h2 className="text-2xl font-bold text-black">
                  AI Recipe Generator
                </h2>

                <p className="text-black/70 mt-2">
                  Get smart recipe suggestions using ingredients available at home.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="text-4xl">🥗</div>

              <div>

                <h2 className="text-2xl font-bold text-black">
                  Zero Food Waste
                </h2>

                <p className="text-black/70 mt-2">
                  Reuse leftover food and reduce wastage with AI-powered cooking ideas.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="text-4xl">⚡</div>

              <div>

                <h2 className="text-2xl font-bold text-black">
                  Fast & Personalized
                </h2>

                <p className="text-black/70 mt-2">
                  Personalized meal recommendations according to your taste.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side Login */}
        <div className="lg:w-1/2 flex items-center justify-center bg-[#0d0d0d] px-6 py-12">

          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl shadow-orange-500/10">

            <h1 className="text-4xl font-bold text-center mb-3">
              Login
            </h1>

            <p className="text-zinc-400 text-center mb-10">
              Welcome back to KitchenGPT
            </p>

            {/* Inputs */}
            <div className="space-y-5">

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              {/* Password */}
              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
                />

                {/* Eye Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-orange-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mt-3">

              <button className="text-orange-400 hover:text-orange-300 text-sm">
                Forgot Password?
              </button>

            </div>

            {/* Error Message */}
            {
              error && (
                <p className="text-red-500 text-sm mt-4">
                  {error}
                </p>
              )
            }

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">

              <div className="h-[1px] bg-zinc-700 w-full"></div>

              <span className="text-zinc-500 text-sm">
                OR
              </span>

              <div className="h-[1px] bg-zinc-700 w-full"></div>

            </div>

            {/* Social Buttons */}
            <div className="space-y-4">

              <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">
                Continue with Google
              </button>

              <button className="w-full bg-zinc-800 py-4 rounded-xl font-semibold hover:bg-zinc-700 transition">
                Continue with GitHub
              </button>

            </div>

            {/* Bottom */}
            <p className="text-zinc-400 text-center mt-8">

              Don’t have an account?{" "}

              <Link to="/signup">

                <span className="text-orange-400 cursor-pointer hover:text-orange-300">
                  Sign Up
                </span>

              </Link>

            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6 text-center text-zinc-500 text-sm">

        © 2026 KitchenGPT • AI Powered Cooking Experience 🍳

      </footer>

    </div>

  );
}

export default Login;