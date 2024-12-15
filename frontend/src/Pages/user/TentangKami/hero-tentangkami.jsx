import React from "react";
import "./hero-tentangkami.css";

const HeroTK = ({ className = "hero-TentangKami" }) => {
  return (
    <div className={`hero-container-TentangKami ${className}`}>
      <div className="hero-overlay-TentangKami">
        <div className="hero-content-TentangKami">
          <div className="hero-text-TentangKami">
            <h1>Semua dalam satu solusi mobilitas anda di Jakarta</h1>
            <p>
              Kami memberikan kemudahan akses transportasi umum, rental kendaraan, dan layanan driver untuk memastikan
              perjalanan Anda nyaman dan efisien di Jakarta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTK;
