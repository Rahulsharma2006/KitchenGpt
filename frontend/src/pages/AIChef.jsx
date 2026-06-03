import { useState } from "react";
import Footer from "../components/Footer";

function AIChef() {

  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(false);

  const [recipe, setRecipe] = useState(null);

  // Generate Fake AI Recipe
  const handleGenerateRecipe = () => {

    if (prompt.trim() === "") return;

    setLoading(true);

    setRecipe(null);

    setTimeout(() => {

      setRecipe({
        title: "Creamy Tomato Rice 🍚",
        time: "20 mins",
        calories: "450 kcal",

        ingredients: [
          "Rice",
          "Tomato",
          "Cheese",
          "Garlic",
          "Butter",
        ],

        instructions:
          "Cook rice until soft. Sauté garlic and tomatoes in butter. Mix rice with sauce and top with melted cheese.",

      });

      setLoading(false);

    }, 2000);

  };

  return (

    <div className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center px-6 py-20">

        <h1 className="text-6xl font-bold mb-6">
          AI Chef 👨‍🍳
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
          Enter ingredients, meal ideas, or dietary preferences and let AI create a delicious recipe instantly.
        </p>

      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-10 px-10 pb-20">

        {/* LEFT SIDE */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Enter Ingredients ✨
          </h2>

          <textarea
            rows="10"
            placeholder="Example: Rice, Tomato, Cheese..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl p-5 outline-none focus:border-orange-500 resize-none"
          />

          <button
            onClick={handleGenerateRecipe}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-black py-4 rounded-2xl font-bold text-lg transition hover:scale-[1.02]"
          >

            {
              loading
                ? "Generating Recipe..."
                : "Generate AI Recipe"
            }

          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          {
            recipe ? (

              <div>

                <h2 className="text-4xl font-bold mb-4 text-orange-400">
                  {recipe.title}
                </h2>

                <div className="flex gap-6 text-zinc-400 mb-8">

                  <span>⏱ {recipe.time}</span>

                  <span>🔥 {recipe.calories}</span>

                </div>

                {/* Ingredients */}
                <div className="mb-8">

                  <h3 className="text-2xl font-semibold mb-4">
                    Ingredients
                  </h3>

                  <ul className="space-y-3 text-zinc-300">

                    {
                      recipe.ingredients.map((item, index) => (

                        <li key={index}>
                          • {item}
                        </li>

                      ))
                    }

                  </ul>

                </div>

                {/* Instructions */}
                <div>

                  <h3 className="text-2xl font-semibold mb-4">
                    Instructions
                  </h3>

                  <p className="text-zinc-300 leading-8">
                    {recipe.instructions}
                  </p>

                </div>

              </div>

            ) : (

              <div className="h-full flex flex-col justify-center items-center text-center">

                <div className="text-7xl mb-6">
                  🍳
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  Your AI Recipe Will Appear Here
                </h2>

                <p className="text-zinc-500 max-w-md">
                  Enter ingredients and generate personalized recipes instantly with AI.
                </p>

              </div>

            )
          }

        </div>

      </div>

      <Footer />

    </div>

  );

}

export default AIChef;