import "./App.css";
import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import WhyChooseUs from "./Components/WhyChooseUs";
import PlatformShowcase from "./Components/PlatformShowcase";
import HowItWorks from "./Components/HowItWorks";
import TrustSecurity from "./Components/TrustSecurity";
import Chatbot from "./Components/Chatbot";
import URLScanner from "./Components/URLScanner";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import FinalCTA from "./Components/FinalCTA";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // refresh par top par le jao
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-slate-950 min-h-screen text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <WhyChooseUs />
      <PlatformShowcase />
      <HowItWorks />
      <TrustSecurity />
      <Chatbot />
      <URLScanner />
      <Testimonials />
      <ContactForm />
      <FinalCTA/>
      <Footer />
    </div>
  );
}

export default App;
