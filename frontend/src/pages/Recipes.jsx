import Footer from "../components/Footer";

function Recipes() {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* Header */}
      <div className="px-10 py-20 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Discover Amazing Recipes 🍳
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
          Explore AI-generated recipes personalized to your taste and ingredients.
        </p>

      </div>

      {/* Search */}
      <div className="flex justify-center px-6">

        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
        />

      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">

        <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold">
          Breakfast
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full">
          Lunch
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full">
          Dinner
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full">
          Vegan
        </button>

      </div>

      {/* Recipe Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-10 py-20">

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-orange-500 transition">

          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt=""
            className="rounded-2xl mb-5 h-60 w-full object-cover"
          />

          <h2 className="text-2xl font-bold mb-3">
            Cheese Pizza 🍕
          </h2>

          <p className="text-zinc-400">
            Crispy cheesy pizza with fresh toppings.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Recipes;