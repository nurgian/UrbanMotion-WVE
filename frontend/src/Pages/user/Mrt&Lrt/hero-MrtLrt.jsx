import React from "react";
import "./hero-MrtLrt.css";

const HeroMrtLrt = ({ className = "hero-MrtLrt" }) => {
  return (
    <div className={`hero-container-MrtLrt ${className}`}>
      <div className="hero-overlay-MrtLrt">
        <div className="hero-content-MrtLrt">
          <div className="hero-text-MrtLrt">
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

export default HeroMrtLrt;
