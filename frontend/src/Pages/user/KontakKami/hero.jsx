import React from "react";
import "./hero.css";

const Hero = ({ className = "hero-KontakKami" }) => {
  return (
    <div className={`hero-container-KontakKami ${className}`}>
      <div className="hero-overlay-KontakKami">
        <div className="hero-content-KontakKami">
          <div className="hero-text-KontakKami">
            <h1>Siap Berangkat? Hubungi Kami Sekarang!</h1>
            <p>Tanyakan apa saja, kami siap memberikan solusi terbaik untuk Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
