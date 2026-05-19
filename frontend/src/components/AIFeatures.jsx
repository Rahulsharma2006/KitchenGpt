const AIFeatures = () => {
  return (
    <section className="relative bg-zinc-950 text-white py-32 px-6 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">

      <p className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm md:text-base font-semibold">
  SMART AI FEATURES
</p>

        <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
          Your AI Cooking Assistant
        </h1>

        <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
          Generate recipes, learn cooking step-by-step,
          and explore smarter meal planning with AI-powered guidance.
        </p>

      </div>

      {/* Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Feature Card 1 */}
        <div className="relative overflow-hidden bg-white/5 border border-orange-400/20 backdrop-blur-xl rounded-3xl p-10 hover:border-orange-400/40 transition duration-300">

          {/* Orange Glow */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-3xl font-bold">
              AI Recipe Generator
            </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              Turn your ingredients into delicious recipes instantly with the power of AI.
              Get personalized meal ideas based on your taste, goals, and available ingredients.
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>• Generate recipes in seconds</li>

              <li>• Smart ingredient suggestions</li>

              <li>• Reduce food waste easily</li>

              <li>• Personalized meal ideas</li>

            </ul>

          </div>

        </div>

        {/* Image Card 1 */}
        <div className="rounded-3xl overflow-hidden border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 p-4">

          <img
            src="https://www.dishgen.com/_next/image?url=%2Fimages%2Fhiw_recipe.jpg&w=1920&q=75"
            alt="AI Recipe Generator"
            className="rounded-2xl w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        {/* Image Card 2 */}
        <div className="rounded-3xl overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 p-4">

          <img
            src="https://www.dishgen.com/_next/image?url=%2Fimages%2Fhiw_meal.jpg&w=1920&q=75"
            alt="AI Cooking Guide"
            className="rounded-2xl w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        {/* Feature Card 2 */}
        <div className="relative overflow-hidden bg-white/5 border border-emerald-400/20 backdrop-blur-xl rounded-3xl p-10 hover:border-emerald-400/40 transition duration-300">

          {/* Emerald Glow */}
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-emerald-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-3xl font-bold">
              AI Cooking Guide
            </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              Cook confidently with step-by-step AI guidance.
              KitchenGPT helps you understand recipes, cooking techniques,
              and ingredient substitutions like a real chef.
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300">

              <li>• Step-by-step cooking help</li>

              <li>• Smart ingredient substitutes</li>

              <li>• Beginner-friendly explanations</li>

              <li>• Helpful cooking tips & tricks</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIFeatures;