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

import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>

      <ToastContainer
    position="top-center"
     autoClose={3000}
      />

    </div>

  );

}

export default App;