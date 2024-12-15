import React from "react";
import "./TentangKami.css";
import HeroTK from "./hero-tentangkami";

class TentangKami extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="tentangkami">
          <div className="Hero-TK">
            <HeroTK />
          </div>

          <section className="services-tentangkami">
            <div className="container-tentangkami">
              <div className="images-tentangkami">
                <img src="/assets/images/page2.png" alt="Gambar transportasi di jakarta" />
              </div>
              <div className="content-tentangkami">
                <h2>Teman Setia Perjalanan anda di Jakarta</h2>
                <p>
                  Kami hadir untuk membantu setiap langkah Anda dengan informasi transportasi yang selalu diperbarui,
                  mencakup rute terkini. Dilengkapi juga dengan berbagai pilihan sewa kendaraan, kami siap menemani
                  setiap petualangan Anda, baik untuk perjalanan singkat maupun perjalanan jauh, sehingga Anda bisa
                  menikmati pengalaman mobilitas yang praktis, aman, dan nyaman di tengah kesibukan kota Jakarta!
                </p>
              </div>
            </div>
          </section>

          <section className="features-tentangkami">
            <h1 className="title-tentangkami">Kenapa Memilih Kami untuk Pengalaman Transportasi Terbaikmu?</h1>
            <div className="grid-tentangkami">
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img style={{ height: "70px", width: "75px" }} src="/assets/images/01.png" alt="Kredible dan akurat" />
                <h2 className="card-title">Kredibel dan Akurat</h2>
                <p className="card-text">Kami memberikan informasi yang kredibel dan akurat untuk perjalananmu.</p>
              </div>
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img style={{ height: "70px", width: "80px" }} src="/assets/images/02.png" alt="Layanan Lengkap" />
                <h2 className="card-title">Layanan Lengkap</h2>
                <p className="card-text">Layanan kami mencakup semua kebutuhan transportasi kamu.</p>
              </div>
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img style={{ height: "70px", width: "80px" }} src="/assets/images/03.png" alt="Fleksibilitas Paket" />
                <h2 className="card-title">Fleksibilitas Paket</h2>
                <p className="card-text">Pilih paket sewa yang sesuai dengan kebutuhan Anda.</p>
              </div>
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img
                  style={{ height: "70px", width: "80px" }}
                  src="/assets/images/04.png"
                  alt="Dukungan Pelanggan 24/7"
                />
                <h2 className="card-title">Dukungan Pelanggan 24/7</h2>
                <p className="card-text">Tim kami siap membantu kamu kapan saja, di mana saja.</p>
              </div>
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img
                  style={{ height: "75px", width: "80px" }}
                  src="/assets/images//05.png"
                  alt="Aplikasi Mudah digunakan"
                />
                <h2 className="card-title">Aplikasi Mudah digunakan</h2>
                <p className="card-text">Aplikasi kami dirancang untuk kemudahan penggunaan.</p>
              </div>
              <div className="cardtentangkami" style={{ backgroundColor: "#F3ECDC" }}>
                <img style={{ height: "70px", width: "85px" }} src="/assets/images/06.png" alt="Harga Bersaing" />
                <h2 className="card-title">Harga Bersaing</h2>
                <p className="card-text">Kami menawarkan harga yang kompetitif untuk layanan terbaik.</p>
              </div>
            </div>
          </section>

          <div className="Tujuan-tentangkami">
            <h1 className="tujuankami-tentangkami">Tujuan Kami</h1>
            <h2 className="subtitle-tentangkami">
              Menyediakan informasi transportasi dan sewa kendaraan yang mudah diakses untuk memenuhi kebutuhan
              perjalanan Anda!
            </h2>
            <p className="description-tentangkami">
              Layanan transportasi dan sewa kendaraan terbaik untuk perjalanan Anda. Rasakan pengalaman yang tak
              terlupakan!
            </p>

            <div className="box-tentangkami">
              <h3 className="box-title-tentangkami">Misi Kami</h3>
              <hr />
              <div className="box-content-tentangkami">
                <div className="mission-item-tentangkami">
                  <div className="mission-number">01</div>
                  <div>
                    <h4 className="mission-title">Menyediakan Informasi Terlengkap</h4>
                    <p className="mission-description">
                      Menyediakan rute perjalanan transportasi umum di Jakarta, seperti TransJakarta, KRL, MRT, dan LRT.
                    </p>
                  </div>
                </div>
                <div className="mission-item-tentangkami">
                  <div className="mission-number">02</div>
                  <div>
                    <h4 className="mission-title">Menghadirkan Layanan Sewa Kendaraan yang Fleksibel</h4>
                    <p className="mission-description">
                      Menawarkan berbagai paket sewa yang sesuai dengan kebutuhan pengguna.
                    </p>
                  </div>
                </div>
                <div className="mission-item-tentangkami">
                  <div className="mission-number">03</div>
                  <div>
                    <h4 className="mission-title">Memberikan Pengalaman Pengguna yang Memuaskan</h4>
                    <p className="mission-description">
                      Menjamin informasi akurat, harga sewa transparan, dan kemudahan akses untuk kebutuhan
                      transportasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-tentangkami">
              <h3 className="box-title-tentangkami">Visi Kami</h3>
              <hr />
              <p className="box-description-tentangkami">
                Menjadi platform informasi transportasi dan layanan sewa kendaraan terdepan di Jakarta yang memudahkan
                masyarakat dalam menjalani mobilitas harian dengan aman, nyaman, dan efisien.
              </p>
            </div>
          </div>

          <section className="jasa-tentangkami">
            <div className="container-tentangkami">
              <div className="content-page4-tentangkami">
                <div className="page4-tentangkami">
                  <img src="/assets/images/page4.png" alt="Mobil persewaan" />
                </div>
                <div className="kalimat-tentangkami">
                  <div className="petikatas-tentangkami">
                    <img src="/assets/images/petikatas.png" alt="Petik atas" />
                  </div>
                  <p>
                    Rasakan perjalanan yang lebih efisien dan nyaman dengan Urban Motion! Dapatkan semua informasi
                    tentang transportasi umum dan pilihan sewa kendaraan yang sesuai dengan kebutuhan Anda. Dengan
                    beberapa klik, perjalanan Anda akan menjadi lebih mudah dan menyenangkan!
                  </p>
                  <div className="petikbawah-tentangkami">
                    <img src="/assets/images/petikbawah.png" alt="Petik bawah" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TentangKami;
