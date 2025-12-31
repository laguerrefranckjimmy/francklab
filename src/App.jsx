import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BreakingNews from "./components/BreakingNews";

function App() {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <>
      <Navbar />
      <Sidebar setActiveTool={setActiveTool} />

      <main className="main-content">
        {activeTool === "breakingnews" ? (
          <BreakingNews />
        ) : (
          <>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}

export default App;
