import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './fonts.css'
import './App.css';
import TopBar from './components/TopBar';
import Homes from "./components/Homes";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HikeCalculator from "./components/HikeCalculator"
import PointerAnimation from "./components/subComponents/Pointer";

 
// function App() {
//   return (
//       <div> 

//         <PointerAnimation />
//         <TopBar />
//         <Homes className="section-height pt-6" id="homes" />
//         <About className="section-height pt-6 pb-5 pb-lg-0" id="about"/>
//         <Skills className="section-height pt-6" id="skills"/> 
//         <Experience className="section-height pt-6" id="experience"/>
//         <Contact className="section-height pt-6" id="contact"/>
//         <Footer />
//         <Routes>
//           <HikeCalculator className="section-height pt-6" id="HikeCalculator"/>
//         </Routes>
//       </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homes className="section-height pt-6" id="homes" />} />
          <Route path="about" element={<About className="section-height pt-6 pb-5 pb-lg-0" />} />
          <Route path="skills" element={<Skills className="section-height pt-6" />} />
          <Route path="experience" element={<Experience className="section-height pt-6" />} />
          <Route path="contact" element={<Contact className="section-height pt-6" />} />
        </Route>
        <Route path="/hike-calculator" element={<HikeCalculator className="section-height pt-6" />} />
      </Routes>
    </Router>
  );
};

// MainLayout Component to handle static components
const MainLayout = () => {
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
};

export default App;