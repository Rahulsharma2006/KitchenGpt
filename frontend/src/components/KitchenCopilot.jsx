const ShowcaseSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black to-zinc-950 text-white">

      {/* Orange Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Small Badge */}
        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm font-semibold mb-6">
          OVER 50K+ RECIPES GENERATED
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

          Your Personalized AI <br />

          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Kitchen Copilot
          </span>

        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">

          Transform everyday ingredients into extraordinary meals
          with your personal AI kitchen assistant.

        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <div className="bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-full text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            Save Time
          </div>

          <div className="bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-full text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            Reduce Food Waste
          </div>

          <div className="bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-full text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            Eat Healthier
          </div>

          <div className="bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-full text-zinc-300 hover:border-orange-500 transition duration-300 cursor-pointer">
            Reach Your Goals
          </div>

        </div>

        {/* Demo Card */}
        <div className="relative max-w-5xl mx-auto group">

          {/* Glow Border */}
          <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-3xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

          {/* Main Card */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
              alt="KitchenGPT Demo"
              className="w-full h-[500px] object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Overlay Content */}
            <div className="absolute top-8 left-8 text-left">

              <h2 className="text-4xl font-bold mb-3">
                Your AI Kitchen Copilot
              </h2>

              <p className="text-zinc-300 text-lg">
                Generate recipes instantly with AI
              </p>

            </div>

            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:scale-110 transition duration-300 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30">

              <span className="text-3xl ml-1">
                ▶
              </span>

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ShowcaseSection;