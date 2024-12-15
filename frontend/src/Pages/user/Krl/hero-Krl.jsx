import React from "react";
import "./hero-Krl.css";

const HeroKrl = ({ className = "hero-Krl" }) => {
  return (
    <div className={`hero-container-Krl ${className}`}>
      <div className="hero-overlay-Krl">
        <div className="hero-content-Krl">
          <div className="hero-text-Krl">
            <h1>Informasi seputar transportasi di Jakarta</h1>
            <p>
              Kami memberikan seputar informasi transportasi umum yang ada di DKI Jakarta, meliputi alamat serta foto
              tempat untuk memandu Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKrl;
