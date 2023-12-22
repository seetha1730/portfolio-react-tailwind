
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home/Home.jsx";
import About from "./components/About";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageContextProvider from './context/lang-context';
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './components/Skills';
function App() {
  return (
    <>
    <Router>
     <LanguageContextProvider>
      <Header />
      <Home />
      <Skills/>
      <About />
      <Projects />
  
      <Contact />
      <Footer />
      </LanguageContextProvider>
      </Router>
    </>
  );
}
export default App;