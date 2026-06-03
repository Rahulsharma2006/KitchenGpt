import Footer from "../components/Footer";

function Explore() {

  const recipes = [

    {
      title: "Cheesy Pizza 🍕",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      time: "20 mins",
      calories: "500 kcal",
    },

    {
      title: "Healthy Salad 🥗",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      time: "10 mins",
      calories: "250 kcal",
    },

    {
      title: "Creamy Pasta 🍝",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
      time: "25 mins",
      calories: "650 kcal",
    },

    {
      title: "Chocolate Dessert 🍰",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      time: "15 mins",
      calories: "450 kcal",
    },

    {
      title: "Burger Combo 🍔",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      time: "18 mins",
      calories: "700 kcal",
    },

    {
      title: "Indian Biryani 🍛",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      time: "40 mins",
      calories: "800 kcal",
    },

  ];

  return (

    <div className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center px-6 py-20">

        <h1 className="text-6xl font-bold mb-6">
          Explore Recipes 🌎
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
          Discover trending dishes, healthy meals, and AI-curated food inspirations.
        </p>

      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 px-6 mb-16">

        <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold">
          Italian 🍝
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-700 transition">
          Indian 🍛
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-700 transition">
          Healthy 🥗
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-700 transition">
          Desserts 🍰
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-700 transition">
          Fast Food 🍔
        </button>

      </div>

      {/* Recipe Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20">

        {
          recipes.map((recipe, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300 hover:scale-[1.02]"
            >

              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-4">
                  {recipe.title}
                </h2>

                <div className="flex justify-between text-zinc-400">

                  <span>⏱ {recipe.time}</span>

                  <span>🔥 {recipe.calories}</span>

                </div>

              </div>

            </div>

          ))
        }

      </div>

      <Footer />

    </div>

  );

}

export default Explore;