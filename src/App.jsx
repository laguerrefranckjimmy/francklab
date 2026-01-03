import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import CurrencyConverter from "./components/CurrencyConverter";
import BreakingNews from "./components/BreakingNews";

function App() {
  const [activeTool, setActiveTool] = useState(null);

  const renderContent = () => {
    switch (activeTool) {
      case "currency":
        return <CurrencyConverter onBack={() => setActiveTool(null)} />;

      case "news":
        return <BreakingNews onBack={() => setActiveTool(null)} />;

      default:
        return (
          <>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </>
        );
    }
  };

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar setActiveTool={setActiveTool} />

        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </>
  );
}

export default App;