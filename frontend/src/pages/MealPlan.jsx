import Footer from "../components/Footer";

function MealPlan() {

  const weeklyMeals = [

    {
      day: "Monday",
      breakfast: "Pancakes 🥞",
      lunch: "Veg Salad 🥗",
      dinner: "Creamy Pasta 🍝",
      calories: "1800 kcal",
    },

    {
      day: "Tuesday",
      breakfast: "Oats Bowl 🥣",
      lunch: "Rice & Curry 🍛",
      dinner: "Grilled Sandwich 🥪",
      calories: "2000 kcal",
    },

    {
      day: "Wednesday",
      breakfast: "Fruit Smoothie 🍓",
      lunch: "Paneer Wrap 🌯",
      dinner: "Pizza 🍕",
      calories: "2200 kcal",
    },

    {
      day: "Thursday",
      breakfast: "Toast & Eggs 🍞",
      lunch: "Pasta 🍝",
      dinner: "Soup 🍲",
      calories: "1700 kcal",
    },

    {
      day: "Friday",
      breakfast: "Protein Shake 💪",
      lunch: "Burger 🍔",
      dinner: "Tacos 🌮",
      calories: "2100 kcal",
    },

    {
      day: "Saturday",
      breakfast: "Croissant 🥐",
      lunch: "Fried Rice 🍚",
      dinner: "BBQ Chicken 🍗",
      calories: "2300 kcal",
    },

    {
      day: "Sunday",
      breakfast: "Waffles 🧇",
      lunch: "Biryani 🍲",
      dinner: "Ice Cream Dessert 🍨",
      calories: "2500 kcal",
    },

  ];

  return (

    <div className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center px-6 py-20">

        <h1 className="text-6xl font-bold mb-6">
          Smart Meal Planner 📅
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
          Organize your weekly meals with AI-powered personalized planning.
        </p>

      </div>

      {/* Meal Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20">

        {
          weeklyMeals.map((meal, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300 hover:scale-[1.02]"
            >

              <h2 className="text-3xl font-bold mb-6 text-orange-400">
                {meal.day}
              </h2>

              <div className="space-y-5 text-zinc-300">

                <div>
                  <h3 className="font-semibold text-white">
                    Breakfast
                  </h3>

                  <p>{meal.breakfast}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Lunch
                  </h3>

                  <p>{meal.lunch}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Dinner
                  </h3>

                  <p>{meal.dinner}</p>
                </div>

                <div className="pt-4 border-t border-zinc-700">

                  <p className="text-orange-400 font-bold">
                    🔥 {meal.calories}
                  </p>

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

export default MealPlan;