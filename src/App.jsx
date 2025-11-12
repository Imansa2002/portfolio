import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    // ✅ Prevent horizontal scroll globally
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="max-w-screen overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Education />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
