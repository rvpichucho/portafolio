import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LangProvider } from "./data/useLang";

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
