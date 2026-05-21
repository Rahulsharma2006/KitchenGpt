const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-28 pb-10 px-6 overflow-hidden">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Footer Content */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div>

            {/* Logo */}
            <h1 className="text-5xl font-bold">
              Kitchen<span className="text-orange-400">GPT</span>
            </h1>

            <p className="text-zinc-400 mt-8 leading-relaxed max-w-lg text-lg">
              KitchenGPT is your AI-powered cooking assistant that helps
              you generate recipes, reduce food waste, and discover
              smarter meal ideas instantly.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition duration-300 cursor-pointer">
                X
              </div>

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition duration-300 cursor-pointer">
                IG
              </div>

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition duration-300 cursor-pointer">
                YT
              </div>

            </div>

          </div>

          {/* Right Side Tags */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Trending Food Tags
            </h2>

            <div className="flex flex-wrap gap-4">

              {[
                "healthy",
                "easy",
                "chicken",
                "dessert",
                "breakfast",
                "vegan",
                "high-protein",
                "creamy",
                "gluten-free",
                "spicy",
                "comfort-food",
                "dinner",
                "quick-meals",
                "low-carb",
                "indian",
                "pasta",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 hover:bg-orange-500/10 transition duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Middle Divider */}
        <div className="w-full h-px bg-white/10 my-16"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 KitchenGPT. All rights reserved.
          </p>

          <div className="flex gap-8 text-zinc-500 text-sm">

            <a
              href="#"
              className="hover:text-orange-300 transition duration-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-orange-300 transition duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-orange-300 transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;