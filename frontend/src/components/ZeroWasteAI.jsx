const ZeroWasteAI = () => {
  return (
    <section className="relative bg-zinc-950 py-32 px-6 overflow-hidden">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm font-semibold tracking-[2px]">
            ZERO FOOD WASTE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 leading-tight">
            Turn Leftovers Into
            <span className="text-orange-400"> Delicious Meals</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-xl">
            Let AI analyze your leftover food and available ingredients
            to instantly suggest recipes you can cook right now.
            Save money, reduce waste, and discover creative meals effortlessly.
          </p>

          {/* Feature Points */}
          <div className="space-y-6 mt-12">

            <div className="flex items-start gap-4">

              <div className="w-3 h-3 bg-orange-400 rounded-full mt-2"></div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Smart Ingredient Analysis
                </h3>

                <p className="text-zinc-400 mt-2">
                  AI understands your ingredients and recommends the best meals instantly.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-3 h-3 bg-orange-400 rounded-full mt-2"></div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Reduce Food Waste
                </h3>

                <p className="text-zinc-400 mt-2">
                  Use leftover ingredients creatively instead of throwing them away.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-3 h-3 bg-orange-400 rounded-full mt-2"></div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  AI Recipe Suggestions
                </h3>

                <p className="text-zinc-400 mt-2">
                  Get instant recipe ideas tailored to your kitchen ingredients.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side AI Card */}
        <div className="relative bg-white/5 border border-orange-400/10 backdrop-blur-xl rounded-[32px] p-8 overflow-hidden">

          {/* Card Glow */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-3xl font-bold text-white">
              AI Ingredient Assistant
            </h2>

            <p className="text-zinc-400 mt-4">
              Enter your leftover ingredients and let AI suggest recipes.
            </p>

            {/* Input Box */}
            <div className="mt-8">

              <label className="text-zinc-300 text-sm">
                Available Ingredients
              </label>

              <textarea
                rows="5"
                placeholder="Rice, onion, tomato, bread, milk..."
                className="w-full mt-3 bg-zinc-900/80 border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-500 outline-none focus:border-orange-400 transition duration-300 resize-none"
              ></textarea>

            </div>

            {/* Ingredient Tags */}
            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm">
                Rice
              </span>

              <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm">
                Onion
              </span>

              <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm">
                Tomato
              </span>

              <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm">
                Bread
              </span>

            </div>

            {/* Generate Button */}
            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-orange-500/20">

              Generate AI Recipes

            </button>

            {/* AI Output */}
            <div className="mt-10 bg-black/30 border border-white/10 rounded-2xl p-6">

              <p className="text-orange-300 font-semibold mb-4">
                AI Suggested Recipes
              </p>

              <ul className="space-y-4 text-zinc-300">

                <li>🍚 Masala Fried Rice</li>

                <li>🥪 Crispy Bread Pizza</li>

                <li>🍅 Tomato Rice Bowl</li>

                <li>🥘 Leftover Veggie Stir Fry</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ZeroWasteAI;