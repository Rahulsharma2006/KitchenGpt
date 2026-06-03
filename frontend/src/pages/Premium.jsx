import Footer from "../components/Footer";

function Premium() {

  return (

    <div className="bg-black min-h-screen text-white">

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-orange-400/10 blur-3xl rounded-full"></div>

        {/* Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <p className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm font-semibold tracking-[2px]">
            PREMIUM EXPERIENCE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">

            Upgrade Your <br />

            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              AI Cooking Journey 🍳
            </span>

          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-8">

            Unlock unlimited AI recipes, personalized meal planning,
            nutrition tracking, smart pantry management,
            and premium AI cooking assistance.

          </p>

        </div>

      </section>

      {/* Pricing Cards */}
      <section className="relative px-6 pb-28">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Free */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden hover:border-orange-400/30 transition duration-300">

            <div className="absolute -top-20 -left-20 w-56 h-56 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-semibold">
                FREE
              </span>

              <h2 className="text-3xl font-bold mt-8">
                Starter Plan
              </h2>

              <p className="text-zinc-400 mt-4">
                Best for trying AI cooking features.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold">
                  ₹0
                </h3>

                <p className="text-zinc-500 mt-2">
                  Forever Free
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-zinc-300">

                <li>✓ 5 AI Recipes Daily</li>

                <li>✓ Basic Meal Planning</li>

                <li>✓ Save Favorite Recipes</li>

                <li>✓ Ingredient Suggestions</li>

              </ul>

              <button className="w-full mt-12 bg-zinc-800 hover:bg-zinc-700 transition duration-300 text-white py-4 rounded-2xl font-semibold">
                Current Plan
              </button>

            </div>

          </div>

          {/* PRO */}
          <div className="relative bg-gradient-to-br from-orange-500/20 to-orange-900/20 border border-orange-400/30 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden scale-105 shadow-2xl shadow-orange-500/10">

            <div className="absolute -top-20 right-0 w-56 h-56 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="flex justify-between items-center">

                <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold">
                  MOST POPULAR
                </span>

                <span className="text-orange-300 font-semibold">
                  PRO AI
                </span>

              </div>

              <h2 className="text-3xl font-bold mt-8">
                KitchenGPT Pro
              </h2>

              <p className="text-orange-100/80 mt-4">
                Full AI-powered cooking experience.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold">
                  ₹299
                </h3>

                <p className="text-orange-200 mt-2">
                  per month
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-orange-50">

                <li>✓ Unlimited AI Recipes</li>

                <li>✓ AI Chef Assistant</li>

                <li>✓ Smart Meal Planner</li>

                <li>✓ Pantry Intelligence</li>

                <li>✓ Nutrition Tracking</li>

                <li>✓ Faster AI Responses</li>

              </ul>

              <button className="w-full mt-12 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-orange-500/20">
                Upgrade Now
              </button>

            </div>

          </div>

          {/* Business */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden hover:border-orange-400/30 transition duration-300">

            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-amber-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-semibold">
                BUSINESS
              </span>

              <h2 className="text-3xl font-bold mt-8">
                Power Users
              </h2>

              <p className="text-zinc-400 mt-4">
                Perfect for creators & restaurants.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold">
                  ₹999
                </h3>

                <p className="text-zinc-400 mt-2">
                  per month
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-zinc-300">

                <li>✓ Team Collaboration</li>

                <li>✓ AI Food Analytics</li>

                <li>✓ Commercial Usage</li>

                <li>✓ API Access</li>

                <li>✓ Everything in Pro</li>

              </ul>

              <button className="w-full mt-12 bg-zinc-800 hover:bg-zinc-700 transition duration-300 text-white py-4 rounded-2xl font-semibold">
                Contact Sales
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Extra Features */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-12 text-center">

          <h2 className="text-5xl font-bold leading-tight">

            Why Users Love <br />

            <span className="text-orange-400">
              KitchenGPT Premium ❤️
            </span>

          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-4xl mx-auto mt-8">

            Thousands of food lovers use KitchenGPT Premium
            to create recipes faster, reduce food waste,
            plan meals smarter, and enjoy a personalized AI cooking experience.

          </p>

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default Premium;