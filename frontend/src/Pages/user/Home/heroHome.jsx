import React from "react";
import "./heroHome.css";

const HeroH = ({ className = "hero-Home" }) => {
  return (
    <div className={`hero-container-Home ${className}`}>
      <div className="hero-overlay-Home">
        <div className="hero-content-Home">
          <div className="hero-text-Home">
            <h1>Semua dalam satu solusi mobilitas anda di Jakarta</h1>
            <p>
              Selamat datang di Urban Motion. Nikmati kemudahan akses transportasi umum, rental kendaraan, dan layanan
              driver untuk perjalanan yang nyaman dan efisien di Jakarta!
            </p>
            <div className="btn-H flex gap-5 mt-3">
              <a href="/daftar-harga" className="btn btn-custom">
                Sewa Kendaraan
              </a>
              <a href="/transportasi-umum/KRL" className="btn btn-custom">
                Informasi Transportasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroH;
