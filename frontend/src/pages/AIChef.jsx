import { useState } from "react";

function AIChef() {

  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [showActions, setShowActions] = useState(false);

  // Fake AI Generator
  const generateRecipe = () => {

    if (!ingredients) return;

    setLoading(true);

    setTimeout(() => {

      setRecipe({
        title: "Cheesy Veggie Pasta 🍝",
        time: "25 mins",
        calories: "420 kcal",
        ingredients: ingredients,
        steps: [
          "Boil pasta for 10 minutes.",
          "Cook vegetables in olive oil.",
          "Add cheese and sauce.",
          "Mix pasta properly and serve hot."
        ]
      });

      setLoading(false);

      setShowActions(true);

    }, 2000);

  };

  // Voice AI
  const speakRecipe = () => {

    if (!recipe) return;

    const text = `
      Recipe ${recipe.title}.
      Step 1 ${recipe.steps[0]}.
      Step 2 ${recipe.steps[1]}.
      Step 3 ${recipe.steps[2]}.
      Step 4 ${recipe.steps[3]}.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);

  };

  return (

    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-orange-500">
          AI Chef 👨‍🍳
        </h1>

        <p className="text-zinc-400 mt-6 text-lg leading-8">
          Enter your ingredients and let AI create a delicious recipe instantly.
        </p>

      </div>

      {/* Input Section */}
      <div className="max-w-3xl mx-auto mt-14">

        <textarea
          placeholder="Enter ingredients... (e.g. onion, tomato, cheese)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full h-40 bg-zinc-900 border border-zinc-700 rounded-3xl p-6 outline-none focus:border-orange-500 resize-none text-lg"
        />

        {/* Buttons */}
        {
          !showActions ? (

            <button
              onClick={generateRecipe}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-2xl transition duration-300 hover:scale-[1.02]"
            >

              {loading ? "Generating Recipe..." : "Generate AI Recipe"}

            </button>

          ) : (

            <div className="flex gap-4 mt-6">

              <button
                onClick={speakRecipe}
                className="flex-1 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-2xl transition duration-300"
              >
                🎙 Create Now
              </button>

              <button
                onClick={() => {

                  setRecipe(null);
                  setIngredients("");
                  setShowActions(false);

                }}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-2xl transition duration-300"
              >
                🔄 Try Next
              </button>

            </div>

          )
        }

      </div>

      {/* Recipe Card */}
      {
        recipe && (

          <div className="max-w-4xl mx-auto mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-xl shadow-orange-500/10">

            <h2 className="text-4xl font-bold text-orange-400">
              {recipe.title}
            </h2>

            <div className="flex gap-8 mt-6 text-zinc-400">

              <p>⏱ {recipe.time}</p>

              <p>🔥 {recipe.calories}</p>

            </div>

            {/* Ingredients */}
            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-4">
                Ingredients
              </h3>

              <p className="text-zinc-300 leading-8">
                {recipe.ingredients}
              </p>

            </div>

            {/* Steps */}
            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-6">
                Cooking Steps
              </h3>

              <div className="space-y-5">

                {
                  recipe.steps.map((step, index) => (

                    <div
                      key={index}
                      className="bg-black border border-zinc-800 rounded-2xl p-5"
                    >

                      <span className="text-orange-400 font-bold">
                        Step {index + 1}:
                      </span>

                      <p className="text-zinc-300 mt-2">
                        {step}
                      </p>

                    </div>

                  ))
                }

              </div>

            </div>

          </div>

        )
      }

    </div>

  );

}

export default AIChef;