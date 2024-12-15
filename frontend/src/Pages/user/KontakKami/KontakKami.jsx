import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapWidget from "./MapWidget";
import Hero from "./hero.jsx";
import "./KontakKami.css";
import "./../../../vars.css";

const KontakKami = () => {
  return (
    <div className="content-KontakKami">
      <div className="main-frame-KontakKami">
        <div className="Heros-KontakKami">
          <Hero />
        </div>
        <div className="card-content-KontakKami">
          {/* Bagian kiri: Formulir Kontak */}
          <div className="left-panel-KontakKami">
            <ContactForm />
          </div>

          {/* Bagian kanan: Informasi Kontak */}
          <div className="right-panel-KontakKami">
            <ContactInfo />
          </div>
        </div>

        {/* Widget Google Maps */}
        <div className="MapWidget-KontakKami"></div>
        <MapWidget />
      </div>
    </div>
  );
};

export default KontakKami;
