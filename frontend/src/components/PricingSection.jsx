const PricingSection = () => {
  return (
    <section className="relative bg-zinc-950 py-32 px-6 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/10 blur-3xl rounded-full"></div>

      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm font-semibold tracking-[2px]">
            FLEXIBLE PRICING
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-8">
            Choose Your Perfect Plan
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            Unlock smarter cooking, AI-powered meal planning,
            and personalized recipe generation with KitchenGPT.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {/* Starter Plan */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden hover:border-orange-400/30 transition duration-300">

            <div className="absolute -top-20 -left-20 w-56 h-56 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-semibold">
                STARTER
              </span>

              <h2 className="text-3xl font-bold text-white mt-8">
                Free Plan
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Perfect for beginners exploring AI-powered cooking.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold text-white">
                  $0
                </h3>

                <p className="text-zinc-400 mt-2">
                  Forever free
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-zinc-300">

                <li>✓ Basic AI recipe generation</li>

                <li>✓ Limited daily generations</li>

                <li>✓ Save favorite recipes</li>

                <li>✓ Smart ingredient suggestions</li>

              </ul>

              <button className="w-full mt-12 bg-zinc-800 hover:bg-zinc-700 transition duration-300 text-white py-4 rounded-2xl font-semibold">
                Get Started
              </button>

            </div>

          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-br from-orange-500/20 to-orange-900/20 border border-orange-400/30 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden scale-105 shadow-2xl shadow-orange-500/10">

            <div className="absolute -top-20 right-0 w-56 h-56 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              {/* Popular Badge */}
              <div className="flex justify-between items-center">

                <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold">
                  MOST POPULAR
                </span>

                <span className="text-orange-300 font-semibold">
                  PRO AI
                </span>

              </div>

              <h2 className="text-3xl font-bold text-white mt-8">
                KitchenGPT Pro
              </h2>

              <p className="text-orange-100/80 mt-4 leading-relaxed">
                Unlock the full power of AI cooking assistance.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold text-white">
                  $9.99
                </h3>

                <p className="text-orange-200 mt-2">
                  per month
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-orange-50">

                <li>✓ Unlimited AI recipes</li>

                <li>✓ AI cooking assistant</li>

                <li>✓ Personalized meal planner</li>

                <li>✓ Nutrition tracking</li>

                <li>✓ Priority AI responses</li>

              </ul>

              <button className="w-full mt-12 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-orange-500/20">
                Upgrade to Pro
              </button>

            </div>

          </div>

          {/* Business Plan */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 overflow-hidden hover:border-orange-400/30 transition duration-300">

            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-amber-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-semibold">
                BUSINESS
              </span>

              <h2 className="text-3xl font-bold text-white mt-8">
                Power Users
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Advanced tools for creators, chefs, and businesses.
              </p>

              <div className="mt-10">

                <h3 className="text-5xl font-bold text-white">
                  $24.99
                </h3>

                <p className="text-zinc-400 mt-2">
                  per month
                </p>

              </div>

              <ul className="space-y-5 mt-10 text-zinc-300">

                <li>✓ Commercial recipe usage</li>

                <li>✓ Advanced AI tools</li>

                <li>✓ Team collaboration</li>

                <li>✓ API integrations</li>

                <li>✓ Everything in Pro</li>

              </ul>

              <button className="w-full mt-12 bg-zinc-800 hover:bg-zinc-700 transition duration-300 text-white py-4 rounded-2xl font-semibold">
                Contact Sales
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PricingSection;