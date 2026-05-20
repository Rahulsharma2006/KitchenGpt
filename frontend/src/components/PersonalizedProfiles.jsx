const PersonalizedProfiles = () => {
  return (
    <section className="bg-zinc-950 py-32 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">
           
        {/* Main Card */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-zinc-900 via-black to-orange-950 border border-orange-500/10 p-10 md:p-16 overflow-hidden  z-10 max-w-7xl mx-auto">
       {/* Top Divider */}
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

          {/* Top Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">

            <p className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm md:text-base font-semibold tracking-[2px]">
              NOW WITH PERSONALIZED PROFILES
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">

              The AI-Powered Kitchen Coach Built for
              <span className="text-orange-400"> YOU</span>

            </h1>

            <p className="text-zinc-300 text-lg mt-8 leading-relaxed max-w-3xl mx-auto">

              KitchenGPT understands your taste, goals, and dietary needs
              to deliver smarter recipes, meal plans, and cooking guidance
              personalized just for you.

            </p>

          </div>

          {/* Bottom Layout */}
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center mt-20">

            {/* Left Image */}
            <div className="rounded-3xl overflow-hidden border border-orange-400/20 bg-white/5 backdrop-blur-xl p-4">

              <img
                src="https://www.dishgen.com/_next/image?url=%2Fimages%2Fhiw_profile.jpg&w=1080&q=75"
                alt="AI Profiles"
                className="rounded-2xl w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* Right Features */}
            <div className="space-y-10">

              {/* Feature 1 */}
              <div>

                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  Reach Your Goals
                </h3>

                <p className="text-zinc-300 mt-4 text-lg leading-relaxed">
                  Get meal recommendations tailored to your fitness,
                  health, and lifestyle goals instantly.
                </p>

              </div>

              {/* Feature 2 */}
              <div>

                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  Smarter AI Suggestions
                </h3>

                <p className="text-zinc-300 mt-4 text-lg leading-relaxed">
                  AI recommends recipes and meal plans based on your
                  personal preferences and cooking habits.
                </p>

              </div>

              {/* Feature 3 */}
              <div>

                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  Save Time Daily
                </h3>

                <p className="text-zinc-300 mt-4 text-lg leading-relaxed">
                  Skip endless searching and instantly discover recipes
                  that fit your needs perfectly.
                </p>

              </div>

              {/* Feature 4 */}
              <div>

                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  Reduce Food Waste
                </h3>

                <p className="text-zinc-300 mt-4 text-lg leading-relaxed">
                  Use ingredients already available in your kitchen
                  smarter with AI-powered recommendations.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PersonalizedProfiles;