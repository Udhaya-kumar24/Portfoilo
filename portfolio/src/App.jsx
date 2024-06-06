import React from "react";
import './fonts.css'
import './App.css';
import TopBar from './components/TopBar';
import Homes from "./components/Homes";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PointerAnimation from "./components/subComponents/Pointer";
// import ParticlesComponent from "./components/subComponents/Particles";
 
function App() {
  return (
      <div> 
        <PointerAnimation />
        <TopBar />
        <Homes className="section-height pt-6" id="homes" />
        <About className="section-height pt-6" id="about"/>
        <Skills className="section-height pt-6" id="skills"/>
        <Experience className="section-height pt-6" id="experience"/>
        <Contact className="section-height pt-6" id="contact"/>
      </div>
  );
}

export default App;