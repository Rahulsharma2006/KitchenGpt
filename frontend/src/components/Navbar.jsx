import { useState, useEffect } from "react";

function Navbar() {

  // Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);
    // Scroll Effect
  const [scrolled, setScrolled] = useState(false);
   
  useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  return (

    <nav className="relative flex justify-between items-center px-8 py-5 border-b border-zinc-800 bg-black">
    
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500">
        KitchenGPT 🍳
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-zinc-300">

        <a href="#Recipes" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          My Recipes
        </a>

        <a href="Pantry" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          My Pantry
        </a>

        <a href="AI-Chef" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          AI Chef
        </a>

        <a href="#Meal-Plan" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          Meal Plan
        </a>

        <a href="#Explore" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          Explore
        </a>

        <a href="#Premium" className="hover:text-orange-500 transition duration-300 cursor-pointer">
          Premium
        </a>

        <a href="#Business" className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition duration-300 cursor-pointer">
          Business
        </a>

      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 items-center">

        <button className="text-white hover:text-orange-500 transition duration-300">
          Sign In
        </button>

        <button className="bg-orange-500 hover:bg-white hover:text-orange-500 px-5 py-2 rounded-full font-semibold transition duration-300">
          Get Started
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black border-t border-zinc-800 flex flex-col items-center gap-6 py-10 text-zinc-300 md:hidden">

            <a href ="#Recipes"className="hover:text-orange-500 transition duration-300b ">
              My Recipes
            </a>

            <a href ="#Pantry" className="hover:text-orange-500 transition duration-300">
              My Pantry
            </a>

            <a href ="#AI-Chef" className="hover:text-orange-500 transition duration-300">
              AI Chef
            </a>

            <a href ="#Meal-Plan" className="hover:text-orange-500 transition duration-300">
              Meal Plan
            </a>

            <a href ="#Explore" className="hover:text-orange-500 transition duration-300">
              Explore
            </a>

            <a href ="#Premium" className="hover:text-orange-500 transition duration-300">
              Premium
            </a>

            <button className="bg-orange-500 text-black px-6 py-3 rounded-full font-semibold">
              Get Started
            </button>

          </div>
        )
      }

    </nav>
  );
}

export default Navbar;