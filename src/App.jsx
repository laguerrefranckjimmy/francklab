import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>

      <Navbar />
      <Sidebar />

      <main className="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;