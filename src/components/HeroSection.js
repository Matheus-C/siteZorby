import React from "react";
import logo from "../images/logo.png"; // Logo do ZorbyApp
import doctors from "../images/doctors.png"; // Imagem dos doutores
import iphone from "../images/appstore.svg"; // Imagem dos doutores
import android from "../images/googleplay.png"; // Imagem dos doutores
//import phoneLeft from "../images/Generic phone mock-up.png"; // Tela de app esquerda
import phoneRight from "../images/Generic phone mock-up.png"; // Tela de app direita
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Tela do app à esquerda */}
      {/*<img src={phoneLeft} alt="Tela do app 1" className="app-screen left" />*/}

      {/* Conteúdo central */}
      <div className="hero-center">
     
        <i><p className="hero-text">Cuide da sua saúde,<br /> economize seu tempo.</p></i>
        <img src={doctors} alt="Médicos ilustrados" className="doctors-img" />
      </div>

      {/* Tela do app à direita */}
      <div className="phone-mockup">
        <img src={phoneRight} alt="Tela do app 2" className="app-screen right" />
        <section className="downloads">
          <img src={iphone} alt="Download at appstore" className="appstore-button" />
          <img src={android} alt="Download at googpleplay" className="googleplay-button" />
        </section>
      </div>
    </section>
  );
}

export default HeroSection;
