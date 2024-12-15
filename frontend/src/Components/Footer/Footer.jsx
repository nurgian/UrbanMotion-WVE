import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    const footerStyle = {
      fontFamily: "'Open Sans', sans-serif",
    };

    return (
      <section className="footer" style={footerStyle}>
        <div className="footer-container">
          <div className="footer-section">
            <img src="/assets/images/logo.png" alt="logo Urban Motion" />
            <p>
              Website informasi mengenai transportasi umum dan sewa kendaraan dengan layanan profesional di DKI Jakarta.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-icon"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-icon"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-icon"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest text-icon"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Navigasi</h3>
            <div className="nav-columns">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-caret-right"></i> Beranda
                  </a>
                </li>
                <li>
                  <a href="/tentang-kami">
                    <i className="fa fa-caret-right"></i> Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/transportasi-umum">
                    <i className="fa fa-caret-right"></i> Transportasi Umum
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/daftar-harga">
                    <i className="fa fa-caret-right"></i> Daftar Harga
                  </a>
                </li>
                <li>
                  <a href="/sewa">
                    <i className="fa fa-caret-right"></i> Sewa
                  </a>
                </li>
                <li>
                  <a href="/kontak-kami">
                    <i className="fa fa-caret-right"></i> Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section-3">
            <h3 className="kontak-title">Kontak Kami</h3>
            <div className="content-flex-start">
              <p>
                Surabaya, Indonesia
                <i className="fa fa-map-marker" style={{ marginLeft: "15px" }}></i>
              </p>
              <p>
                UrbanMotion@gmail.com
                <i className="fa fa-envelope" style={{ marginLeft: "15px" }}></i>
              </p>
              <p>
                (+62) 856 0738 5940
                <i className="fa fa-phone" style={{ marginLeft: "15px" }}></i>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>URBAN MOTION</p>
        </div>
      </section>
    );
  }
}

export default Footer;
