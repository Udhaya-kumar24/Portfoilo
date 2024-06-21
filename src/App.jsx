import React from "react";
import './fonts.css'
import './App.css';
import TopBar from './components/TopBar';
import Homes from "./components/Homes";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PointerAnimation from "./components/subComponents/Pointer";

 
function App() {
  return (
      <div> 

        <PointerAnimation />
        <TopBar />
        <Homes className="section-height pt-6" id="homes" />
        <About className="section-height pt-6 pb-5 pb-lg-0" id="about"/>
        <Skills className="section-height pt-6" id="skills"/> 
        <Experience className="section-height pt-6" id="experience"/>
        <Contact className="section-height pt-6" id="contact"/>
        <Footer />
      </div>
  );
}

export default App;