import React from "react";
import "./home.css";
import HeroH from "./heroHome";

const HomePage = () => {
  return (
    <>
      <div className="Hero-H">
        <HeroH />
      </div>

      {/* Content 1 */}
      {/* Sewa */}
      <section className="content-section1sewa">
        <div className="containerHome">
          <div className="text1">
            <h2>
              <b>Sewa Kendaraan, Solusi Mobilitas Anda!</b>
            </h2>
            <p>
              Sewa mobil atau motor dengan cepat dan mudah di Urban Motion, tersedia beragam pilihan kendaraan yang
              sesuai kebutuhan perjalanan Anda!
            </p>
            <a href="/daftar-harga" className="btn btn-custom">
              Sewa Sekarang
            </a>
          </div>
          <div className="img-container flex">
            <img
              style={{ marginRight: "10px" }}
              src="/assets/images/FortunerHome.png"
              alt="Gambar Toyota Fortuner"
              className="img-fluid rounded"
            />
            <img
              style={{ marginRight: "10px" }}
              src="/assets/images/Nmax Home.png"
              alt="Gambar Yamaha Nmax"
              className="img-fluid rounded"
            />
            <img
              style={{ marginRight: "0px" }}
              src="/assets/images/Brio Home.png"
              alt="Gambar Honda Brio"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
      {/* Informasi */}
      <section className="content-section2informasi py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Gambar */}
            <div className="imgc2 flex gap-3 lg:w-1/2">
              <img src="/assets/images/stasiun jakarta.png" alt="Gambar KRL" className="w-1/2 object-cover" />
              <img
                src="/assets/images/TransHome.png"
                alt="Gambar Transjakarta"
                className="w-1/2 object-cover rounded"
              />
            </div>

            {/* Teks */}
            <div className="text2 lg:w-1/2">
              <h2 className="text2-xl font-bold mb-4">
                Ingin Naik Transportasi Umum tapi Bingung? Temukan Lokasinya di Sini!
              </h2>
              <p className="mb-6 text-primary-10">
                Dapatkan informasi lokasi transportasi umum di Jakarta, mulai dari KRL, MRT, LRT, dan Transjakarta.
                Memudahkan perjalanan Anda menjelajahi Jakarta tanpa khawatir!
              </p>
              <a
                href="/transportasi-umum/KRL"
                className="btn btn-custom bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content 2 - Layanan */}
      <section className="my-custom-content2layanan" id="my-custom-content2layanan">
        <div className="my-custom-container">
          <div className="row justify-content-center text-center mb-4">
            <div className="my-custom-content2-text col-12">
              <h2 className="mb-4">
                <b>Layanan Yang Kami Berikan</b>
              </h2>
              <p>
                Kami menyediakan rental kendaraan fleksibel, informasi transportasi umum terkini, dan layanan driver
                profesional, termasuk driver wanita khusus bagi penumpang perempuan.
              </p>
            </div>
          </div>

          <div className="my-custom-card-container">
            {/* Card 1 */}
            <div className="my-custom-card">
              <div className="my-custom-card-body text-center">
                <div className="my-custom-service-icon">
                  <img src="/assets/images/i bus.png" alt="icon bus" className="my-custom-service-icon-img" />
                </div>
                <h3 className="my-custom-service-title">Informasi Transportasi Umum</h3>
                <p className="my-custom-service-description">
                  Temukan tempat transportasi umum terbaru, rute, dan pilihan moda yang sesuai kebutuhan perjalanan Anda
                  di Jakarta.
                </p>
                <a href="/transportasi-umum/KRL" className="btn my-custom-btn-outline">
                  Selengkapnya <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="my-custom-card">
              <div className="my-custom-card-body text-center">
                <div className="my-custom-service-icon">
                  <img src="/assets/images/i car.png" alt="icon mobil" className="my-custom-service-icon-img" />
                </div>
                <h3 className="my-custom-service-title">Rental Kendaraan</h3>
                <p className="my-custom-service-description">
                  Sewa motor dan mobil cepat dan mudah, tersedia dengan berbagai pilihan kendaraan sesuai kebutuhan
                  Anda.
                </p>
                <a href="/daftar-harga" className="btn my-custom-btn-outline">
                  Selengkapnya <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="my-custom-card">
              <div className="my-custom-card-body text-center">
                <div className="my-custom-service-icon">
                  <img src="/assets/images/i steer.png" alt="icon stir" className="my-custom-service-icon-img" />
                </div>
                <h3 className="my-custom-service-title">Layanan Driver</h3>
                <p className="my-custom-service-description">
                  Layanan driver profesional untuk perjalanan aman dan nyaman, opsi driver wanita khusus bagi penumpang
                  perempuan.
                </p>
                <a href="/sewa" className="btn my-custom-btn-outline">
                  Selengkapnya <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-9">
            <div className="col text-center">
              <a href="/tentang-kami" className="btn my-custom-btn-selengkapnya">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content 3 - Ingin Perjalanan */}
      <section className="content3ingin">
        <div className="container my-5">
          <div className="rental-card">
            <img src="/assets/images/Fortuner2.jpg" className="rental-card-img" alt="Rental Kendaraan" />
            <div className="rental-card-overlay">
              <h1 className="rental-card-title">
                Ingin perjalanan fleksibel di Jakarta? Sewa kendaraan sesuai kebutuhan Anda!
              </h1>
              <p className="rental-card-text">
                Dapatkan kendaraan sewa sesuai kebutuhan Anda di Jakarta. Dengan berbagai pilihan kendaraan, layanan ini
                memudahkan perjalanan Anda, mulai dari aktivitas sehari-hari hingga eksplorasi kota, dengan proses sewa
                yang cepat dan nyaman.
              </p>
              <div className="rental-card-btn-secondary">
                <a href="/daftar-harga" className="rental-card-btn-custom">
                  Sewa Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content 4 - Apa yang mereka katakan */}
      {/* Content 4 - Apa yang mereka katakan */}
      <section className="content4apa p-8 bg-gray-100">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Apa yang mereka katakan?</h2>
        </div>
        <div className="containerkomen mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="cardkomen p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-secondary-30 mb-6">
              Platform yang sangat membantu! Rute transportasi jelas dan rental kendaraan mudah diakses.
            </p>
            <div className="flex items-center gap-4">
              <img src="/assets/images/jefri.PNG" alt="Jefri" className="w-12 h-12 rounded-full" />
              <h5 className="font-semibold text-lg">Jefri Nichol</h5>
            </div>
          </div>
          {/* Card 2 */}
          <div className="cardkomen p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-secondary-30 mb-6">
              Driver profesional dan harga transparan membuat perjalanan saya lebih tenang dan nyaman.
            </p>
            <div className="flex items-center gap-4">
              <img src="/assets/images/sze.PNG" alt="Sheryl Jesslyn" className="w-12 h-12 rounded-full" />
              <h5 className="font-semibold text-lg">Sheryl Jesslyn</h5>
            </div>
          </div>
          {/* Card 3 */}
          <div className="cardkomen p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-secondary-30 mb-6">
              Layanan ini benar-benar membantu saya sebagai pendatang yang belum familiar dengan Jakarta.
            </p>
            <div className="flex items-center gap-4">
              <img src="/assets/images/windah.jpg" alt="Brando Franco Windah" className="w-12 h-12 rounded-full" />
              <h5 className="font-semibold text-lg">Brando Franco Windah</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
