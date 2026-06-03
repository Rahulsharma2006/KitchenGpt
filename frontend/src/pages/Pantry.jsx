import { useState } from "react";
import Footer from "../components/Footer";

function Pantry() {

  const [ingredient, setIngredient] = useState("");

  const [pantryItems, setPantryItems] = useState([
    "Tomato 🍅",
    "Milk 🥛",
    "Cheese 🧀",
  ]);

  // Add Ingredient
  const handleAddIngredient = () => {

    if (ingredient.trim() === "") return;

    setPantryItems([...pantryItems, ingredient]);

    setIngredient("");

  };

  // Remove Ingredient
  const handleRemove = (index) => {

    const updatedItems = pantryItems.filter(
      (_, itemIndex) => itemIndex !== index
    );

    setPantryItems(updatedItems);

  };

  return (

    <div className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center px-6 py-20">

        <h1 className="text-6xl font-bold mb-6">
          My Pantry 🥫
        </h1>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Manage your ingredients and let AI create recipes from what you already have.
        </p>

      </div>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6">

        <input
          type="text"
          placeholder="Enter ingredient..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          className="w-full md:w-[500px] bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
        />

        <button
          onClick={handleAddIngredient}
          className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 rounded-2xl font-bold transition"
        >
          Add Ingredient
        </button>

      </div>

      {/* Pantry Items */}
      <div className="grid md:grid-cols-3 gap-8 px-10 py-20">

        {
          pantryItems.length > 0 ? (

            pantryItems.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex justify-between items-center hover:border-orange-500 transition"
              >

                <h2 className="text-2xl font-semibold">
                  {item}
                </h2>

                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl"
                >
                  Remove
                </button>

              </div>

            ))

          ) : (

            <div className="col-span-full text-center text-zinc-500 text-2xl">
              No ingredients added yet 🥲
            </div>

          )
        }

      </div>

      <Footer />

    </div>

  );

}

export default Pantry;