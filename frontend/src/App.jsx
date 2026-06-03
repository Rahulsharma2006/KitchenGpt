import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KitchenCopilot from "./components/KitchenCopilot";
import AIFeatures from "./components/AIFeatures";
import PersonalizedProfiles from "./components/PersonalizedProfiles";
import PricingSection from "./components/PricingSection";
import ZeroWasteAI from "./components/ZeroWasteAI";
import FeaturedRecipes from "./components/FeaturedRecipes";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Recipes from "./pages/Recipes";
import Pantry from "./pages/Pantry";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AIChef from "./pages/AIChef";
import MealPlan from "./pages/MealPlan";
import Explore from "./pages/Explore";
import Premium from "./pages/Premium"; 
function App() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

<Routes>

  {/* Home Route */}
  <Route
    path="/"
    element={
      <>
        <Hero />
        <KitchenCopilot />
        <AIFeatures />
        <PersonalizedProfiles />
        <PricingSection />
        <ZeroWasteAI />
        <FeaturedRecipes />
        <Footer />
      </>
    }
  />

  {/* Recipes Route */}
  <Route path="/recipes" element={<Recipes />} />
{/* Pantry Route */}
 <Route path="/pantry" element={<Pantry />} />

  {/* AI Chef Route */}
  <Route path="/ai-chef" element={<AIChef />} />

  {/* Meal Plan Route */}
  <Route path="/meal-plan" element={<MealPlan />} />

  {/* Explore Route */}
  <Route path="/explore" element={<Explore />} />

  {/* Premium Route */}
  <Route path="/premium" element={<Premium />} />

  {/* Login Route */}
  <Route path="/login" element={<Login />} />

  {/* Signup Route */}
  <Route path="/signup" element={<Signup />} />


</Routes>

      <ToastContainer
    position="top-center"
     autoClose={3000}
      />

    </div>

  );

}

export default App;