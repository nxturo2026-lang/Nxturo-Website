import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import EventsShoot from "./components/EventsShoot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <EventsShoot />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;