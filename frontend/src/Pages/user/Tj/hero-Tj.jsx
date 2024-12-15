import React from "react";
import "./hero-Tj.css";

const HeroTj = ({ className = "hero-Tj" }) => {
  return (
    <div className={`hero-container-Tj ${className}`}>
      <div className="hero-overlay-Tj">
        <div className="hero-content-Tj">
          <div className="hero-text-Tj">
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

export default HeroTj;
