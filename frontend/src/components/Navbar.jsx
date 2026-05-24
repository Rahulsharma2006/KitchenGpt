import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  // Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Effect
  const [scrolled, setScrolled] = useState(false);

  // Login State
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Scroll Effect
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

  // Logout Handler
  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    window.location.reload();

  };

  return (

    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b transition-all duration-300
      ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-orange-500/20 shadow-lg shadow-orange-500/10"
          : "bg-black border-zinc-800"
      }`}
    >

      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-orange-500 cursor-pointer">
          KitchenGPT 🍳
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-zinc-300">

        <a href="#Recipes" className="hover:text-orange-500 transition duration-300">
          My Recipes
        </a>

        <a href="#Pantry" className="hover:text-orange-500 transition duration-300">
          My Pantry
        </a>

        <a href="#AI-Chef" className="hover:text-orange-500 transition duration-300">
          AI Chef
        </a>

        <a href="#Meal-Plan" className="hover:text-orange-500 transition duration-300">
          Meal Plan
        </a>

        <a href="#Explore" className="hover:text-orange-500 transition duration-300">
          Explore
        </a>

        <a href="#Premium" className="hover:text-orange-500 transition duration-300">
          Premium
        </a>

      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 items-center">

        {isLoggedIn ? (

          <>
            <span className="text-orange-400 font-semibold">
              Welcome Chef 👨‍🍳
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-full font-semibold transition duration-300"
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <Link to="/login">
              <button className="text-white hover:text-orange-500 transition duration-300">
                Sign In
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-orange-500 hover:bg-white hover:text-orange-500 px-5 py-2 rounded-full font-semibold transition duration-300">
                Get Started
              </button>
            </Link>
          </>

        )}

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {
        menuOpen && (

          <div className="absolute top-20 left-0 w-full bg-black border-t border-zinc-800 flex flex-col items-center gap-6 py-10 text-zinc-300 md:hidden">

            <a href="#Recipes" className="hover:text-orange-500 transition duration-300">
              My Recipes
            </a>

            <a href="#Pantry" className="hover:text-orange-500 transition duration-300">
              My Pantry
            </a>

            <a href="#AI-Chef" className="hover:text-orange-500 transition duration-300">
              AI Chef
            </a>

            <a href="#Meal-Plan" className="hover:text-orange-500 transition duration-300">
              Meal Plan
            </a>

            <a href="#Explore" className="hover:text-orange-500 transition duration-300">
              Explore
            </a>

            <a href="#Premium" className="hover:text-orange-500 transition duration-300">
              Premium
            </a>

            {isLoggedIn ? (

              <>
                <span className="text-orange-400 font-semibold">
                  Welcome Chef 👨‍🍳
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Logout
                </button>
              </>

            ) : (

              <>
                <Link to="/login">
                  <button className="text-white hover:text-orange-500 transition duration-300">
                    Sign In
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="bg-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition">
                    Get Started
                  </button>
                </Link>
              </>

            )}

          </div>

        )
      }

    </nav>
  );
}

export default Navbar;