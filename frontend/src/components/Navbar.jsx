function Navbar(){
    return(
    <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800 bg-black">

        {/* Logo */}

        <div className="text-2xl font-bold text-orange-500">
        KitchenGPT 🍳
      </div>

      <div className="flex gap-8 text-zinc-300">
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer">My Recipes</a>
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer"> My Pantry</a>
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer">AI Chef</a>
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer">Meal Plan</a>
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer">Explore</a>
        <a className="hover:text-orange-500 transition duration-300 cursor-pointer">Premium</a>
      <a className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition duration-300 cursor-pointer">
  Business
</a>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-white hover:text-orange-500 transition duration-300">Sign In</button>
        <button className="bg-orange-500 hover:bg-white hover:text-orange-500 px-5 py-2 rounded-full font-semibold transition duration-300">Get Started</button>
      </div>
    
    </nav>
    )
}
export default Navbar;