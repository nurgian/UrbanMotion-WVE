import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-KontakKami">
      <div className="contact-info-title-KontakKami">Tetap bersama kami</div>
      <div className="contact-header-title-KontakKami">Hubungi kami</div>
      <div className="contact-subtitle-KontakKami">
        <p>Jangan ragu untuk meminta konsultasi atau bertanya, langsung saja hubungi kami.</p>
      </div>

      <div className="icon-box-KontakKami">
        <div className="contact-info-item-KontakKami">
          <p className="label-KontakKami">
            <i className="fas fa-map-marker-alt"></i> {/* Ikon Tempat */}
            Tempat Kami
          </p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>

      <div className="icon-box-KontakKami">
        <div className="contact-info-item-KontakKami">
          <p className="label-KontakKami">
            <i className="fas fa-envelope"></i> {/* Ikon Email */}
            Alamat Email
          </p>
          <p>UrbanMotion.Rent@gmail.com</p>
        </div>
      </div>

      <div className="icon-box-KontakKami">
        <div className="contact-info-item-KontakKami">
          <p className="label-KontakKami">
            <i className="fas fa-phone-alt"></i> {/* Ikon Telepon */}
            Telepon
          </p>
          <p>( +62 ) 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;