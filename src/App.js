import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
