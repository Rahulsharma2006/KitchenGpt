import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {

  return (

    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-1">

        {/* Left Side */}
        <div className="lg:w-1/2 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold mb-8 leading-tight text-black">
            Join <br /> KitchenGPT 🍳
          </h1>

          <p className="text-black/80 text-lg leading-8 mb-10 max-w-xl">
            Create your account and unlock AI-powered cooking,
            personalized recipes, and smarter meal planning.
          </p>

          {/* Features */}
          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="text-4xl">🍔</div>

              <div>
                <h2 className="text-2xl font-bold text-black">
                  Smart AI Recipes
                </h2>

                <p className="text-black/70 mt-2">
                  Discover recipes based on ingredients you already have.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="text-4xl">🥘</div>

              <div>
                <h2 className="text-2xl font-bold text-black">
                  Personalized Meals
                </h2>

                <p className="text-black/70 mt-2">
                  AI recommends meals based on your preferences.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="text-4xl">⚡</div>

              <div>
                <h2 className="text-2xl font-bold text-black">
                  Faster Cooking
                </h2>

                <p className="text-black/70 mt-2">
                  Save time with quick step-by-step AI cooking guidance.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side Signup */}
        <div className="lg:w-1/2 flex items-center justify-center bg-[#0d0d0d] px-6 py-12">

          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl shadow-orange-500/10">

            <h1 className="text-4xl font-bold text-center mb-3">
              Create Account
            </h1>

            <p className="text-zinc-400 text-center mb-10">
              Start your AI cooking journey today.
            </p>

            {/* Inputs */}
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

            </div>

            {/* Signup Button */}
            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-xl transition duration-300 hover:scale-[1.02]">
              Create Account
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
              Already have an account?{" "}
              <Link to="/login">
              <span className="text-orange-400 cursor-pointer hover:text-orange-300">
                Login
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

export default Signup;