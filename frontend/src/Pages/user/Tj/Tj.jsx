import React, { useRef, useState } from "react";
import "./Tj.css";
import RouteOverlay from "../../../Components/RouteOverlay/RouteOverlay";
import Modal from "../../../Components/Modal/Modal";
import HeroTj from "./hero-Tj";

const list_tj = [
  {
    id: 1,
    name: "museum jakarta",
    asset: "/assets/images/Image tj/museum jakarta/2.png",
  },
  {
    id: 2,
    name: "kota",
    asset: "/assets/images/Image tj/kota/2.png",
  },
  {
    id: 3,
    name: "glodok",
    asset: "/assets/images/Image tj/glodok/2.png",
  },
  {
    id: 4,
    name: "taman sari",
    asset: "/assets/images/Image tj/taman sari/2.png",
  },
  {
    id: 5,
    name: "mangga besar",
    asset: "/assets/images/Image tj/mangga besar/2.png",
  },
  {
    id: 6,
    name: "sawah besar",
    asset: "/assets/images/Image tj/sawah besar/2.png",
  },
  {
    id: 7,
    name: "harmoni",
    asset: "/assets/images/Image tj/harmoni/2.png",
  },
  {
    id: 8,
    name: "monumen nasional",
    asset: "/assets/images/Image tj/monumen nasional/2.png",
  },
  {
    id: 9,
    name: "kebon sirih",
    asset: "/assets/images/Image tj/kebon sirih/2.png",
  },
  {
    id: 10,
    name: "mh thamrin",
    asset: "/assets/images/Image tj/mh thamrin/2.png",
  },
  {
    id: 11,
    name: "bundaran hi",
    asset: "/assets/images/Image tj/bundaran hi/2.png",
  },
  {
    id: 12,
    name: "tosari",
    asset: "/assets/images/Image tj/tosari/2.png",
  },
  {
    id: 13,
    name: "dukuh atas",
    asset: "/assets/images/Image tj/dukuh atas/2.png",
  },
  {
    id: 14,
    name: "karet",
    asset: "/assets/images/Image tj/karet/2.png",
  },
  {
    id: 15,
    name: "bendungan hilir",
    asset: "/assets/images/Image tj/bendungan hilirr/2.png",
  },
  {
    id: 16,
    name: "polda metro jaya",
    asset: "/assets/images/Image tj/polda metro jaya/2.png",
  },
  {
    id: 17,
    name: "senayan",
    asset: "/assets/images/Image tj/senayan/2.png",
  },
  {
    id: 18,
    name: "bundaran senayan",
    asset: "/assets/images/Image tj/bundaran senayan/2.png",
  },
  {
    id: 19,
    name: "masjid agung",
    asset: "/assets/images/Image tj/masjid agung/2.png",
  },
  {
    id: 20,
    name: "kejaksaan agung",
    asset: "/assets/images/Image tj/kejaksaan agung/2.png",
  },
  {
    id: 21,
    name: "asean",
    asset: "/assets/images/Image tj/asean/2.png",
  },
];
const Tj = () => {
  // State untuk mengontrol overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tj, setTj] = useState(null);
  // Fungsi untuk membuka dan menutup overlay
  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  const openModal = (name) => {
    const filteredData = list_tj.filter((stasiun) => stasiun.name == name);
    setTj(filteredData);
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setTj(null);
    setIsOpenModal(false);
  };

  //  fungsi slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  console.log(currentIndex);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      {/* Hero Section */}
      <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="Tj">
          <div className="hero-Tj">
            <HeroTj />
          </div>

          {/* Section Transjakarta */}
          <section className="TJ">
            <div className="containerTj">
              <div className="contentTj">
                <h1>Halte Busway</h1>
                <h1>Transjakarta</h1>
                <p>
                  Titik pemberhentian bus TransJakarta yang tersebar di berbagai koridor, memungkinkan penumpang
                  naik-turun dengan nyaman di jalur khusus. Setiap halte dilengkapi fasilitas seperti tempat duduk,
                  sistem tiket elektronik, dan pintu otomatis untuk akses langsung ke bus demi memastikan perjalanan
                  cepat dan aman di jalur bebas hambatan.
                </p>
              </div>
              <div className="imagesTj">
                <img src="/assets/images/fototj.png" alt="Gambar TJ" />
              </div>
            </div>
            <div className="buttontj">
              <button className="button-tj" onClick={openOverlay}>
                Lihat Rute
              </button>
            </div>
                  
          </section>

          {/* Section Slider */}
          <section className="py-8">
            {/* slider start */}
            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / 2)}%)`,
                  }}>
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/museum jakarta/1.png"
                            alt="Halte TJ Museum Jakarta"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("museum jakarta")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/kota/1.png"
                            alt="Halte TJ Kota"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kota")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/glodok/1.png"
                            alt="Halte TJ Glodok"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("glodok")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/taman sari/1.png"
                            alt="Halte TJ Taman Sari"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("taman sari")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 5 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/mangga besar/1.png"
                            alt="Halte TJ Mangga Besar"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("mangga besar")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 6 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/sawah besar/1.png"
                            alt="Halte TJ sawah besar"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("sawah besar")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 7 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/harmoni/1.png"
                            alt="Halte TJ Harmoni"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("harmoni")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 8 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/monumen nasional/1.png"
                            alt="Halte TJ Monumen Nasional"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("monumen nasional")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 10 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/kebon sirih/1.png"
                            alt="Halte TJ Kebon Sirih"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kebon sirih")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 11 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/mh thamrin/1.png"
                            alt="Halte TJ MH Thamrin"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("mh thamrin")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 12 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/bundaran hi/1.png"
                            alt="Halte TJ Bundaran HI Astra"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bundaran hi")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 13 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/tosari/1.png"
                            alt="Halte TJ Tosari"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tosari")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 14 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/dukuh atas/1.png"
                            alt="Halte TJ Dukuh Atas"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("dukuh atas")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 15 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/karet/1.png"
                            alt="Halte TJ Karet"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("karet")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 16 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/bendungan hilirr/1.png"
                            alt="Halte TJ Bendungan Hilir"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bendungan hilir")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 17 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/polda metro jaya/1.png"
                            alt="Halte TJ Polda Metro Jaya"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("polda metro jaya")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 18 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/senayan/1.png"
                            alt="Halte TJ Senayan Bank DKI"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("senayan")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 19 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/bundaran senayan/1.png"
                            alt="Halte TJ Bundaran Senayan"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bundaran senayan")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 20 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/masjid agung/1.png"
                            alt="Halte TJ Masjid Agung"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("masjid agung")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 21 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/kejaksaan agung/1.png"
                            alt="Halte TJ Kejaksaan Agung"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kejaksaan agung")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 22 */}
                  <div className="swiper-slide-tj flex-shrink-0 px-2">
                    <div className="station-card-tj">
                      <div className="button-image-tj">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image tj/asean/1.png"
                            alt="Halte TJ Asean"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("asean")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2  disabled:opacity-50 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-opacity"
                aria-label="Previous image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 disabled:opacity-50 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-opacity"
                aria-label="Next image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* slider end */}
          </section>
        </div>
      </div>
      {/* RouteOverlay Component */}
      <RouteOverlay
        isOpen={isOverlayOpen}
        toggleOverlay={closeOverlay}
        imagePath="/assets/images/Peta Rute/Peta Rute TJ.jpg" // Gambar rute untuk tombol "Lihat Rute"
      />
      <Modal isOpen={isOpenModal} toggleOverlay={closeModal} imagePath={tj?.[0]?.asset} />
    </>
  );
};

export default Tj;
