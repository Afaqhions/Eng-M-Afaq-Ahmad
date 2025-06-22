import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing Components
import Education from "./components/education";
import Skills from "./components/skills";
import Work from "./components/work";
import Stack from "./components/stacks";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Service from "./components/service";
const App = () => {
  return (
    <Router>
      <div className="bg-[#111] text-2xl text-red-500">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path='/' element={<>
              <About />
              <Education />
              <Skills />
              <Stack/>
              <Work />
              <Service />
              <Contact />
            </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
