const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 pt-10">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full mb-8">

          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>

          <p className="text-sm text-zinc-300">
            AI Powered Recipe Generator
          </p>

        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

          Cook Smarter <br />

          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            With KitchenGPT
          </span>

        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">

          Generate delicious recipes instantly using ingredients
          already available in your kitchen.

        </p>

        {/* Input Box */}
        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 md:p-7 shadow-2xl max-w-4xl mx-auto">

          <textarea
            placeholder="Enter ingredients like tomato, onion, cheese..."
            className="w-full bg-transparent outline-none resize-none text-lg text-white placeholder:text-zinc-500 min-h-[120px]"
          />

          {/* Bottom Area */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-6">

            {/* Tags */}
            <div className="flex flex-wrap gap-3">

              <button className="border border-orange-500 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300">
                Recipe Creator
              </button>

              <button className="border border-zinc-700 text-zinc-300 px-4 py-2 rounded-full hover:border-orange-500 transition duration-300">
                Meal Planner
              </button>

              <button className="border border-zinc-700 text-zinc-300 px-4 py-2 rounded-full hover:border-orange-500 transition duration-300">
                AI Chef
              </button>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">

              {/* Voice Button */}
              <button className="flex items-center gap-2 border border-zinc-700 bg-zinc-900/80 hover:border-orange-500 hover:bg-zinc-800 transition duration-300 px-6 py-3 rounded-2xl text-zinc-300 hover:text-white">

                <span className="text-lg animate-pulse">
                  🎤
                </span>

                Voice Chef

              </button>

              {/* Generate Button */}
              <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-orange-500/20">
                Generate →
              </button>

            </div>

          </div>

        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <div className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-full text-sm text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            🍝 Homemade Pasta
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-full text-sm text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            🥗 Healthy Salad Bowl
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-full text-sm text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            🍕 Cheese Burst Pizza
          </div>

        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">

          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-8">
            Trusted By Food Lovers
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 text-zinc-600 font-semibold text-lg">

            <h1 className="hover:text-orange-500 transition duration-300 cursor-pointer">
              FOODIFY
            </h1>

            <h1 className="hover:text-orange-500 transition duration-300 cursor-pointer">
              CHEF AI
            </h1>

            <h1 className="hover:text-orange-500 transition duration-300 cursor-pointer">
              MEALFLOW
            </h1>

            <h1 className="hover:text-orange-500 transition duration-300 cursor-pointer">
              TASTEBOT
            </h1>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-24 flex items-center justify-center gap-4">

          <div className="h-[1px] w-52 md:w-72 bg-zinc-800"></div>

          <div className="w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>

          <div className="h-[1px] w-52 md:w-72 bg-zinc-800"></div>

        </div>

      </div>

    </section>
  )
}

export default Hero