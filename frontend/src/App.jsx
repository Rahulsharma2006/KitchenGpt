import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import KitchenCopilot from "./components/KitchenCopilot"
import AIFeatures from "./components/AIFeatures"
import PersonalizedProfiles from "./components/PersonalizedProfiles"
import PricingSection from "./components/PricingSection"
import ZeroWasteAI from "./components/ZeroWasteAI"
import FeaturedRecipes from "./components/FeaturedRecipes"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
<Navbar />
  <Hero />
  <KitchenCopilot />
  <AIFeatures />    
  <PersonalizedProfiles />
  <PricingSection />
  <ZeroWasteAI />
    <FeaturedRecipes />
  <Footer />
    </div>
  
  )
}

export default App