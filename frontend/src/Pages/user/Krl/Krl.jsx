import { useRef, useState } from "react";
import RouteOverlay from "../../../Components/RouteOverlay/RouteOverlay";

import "./Krl.css";
import Modal from "../../../Components/Modal/Modal";
import HeroKrl from "./hero-Krl";

const list_stasiun = [
  {
    id: 1,
    name: "jakartakota",
    asset: "/assets/images/Image Krl/jakartakota/1.png",
  },
  {
    id: 2,
    name: "jayakarta",
    asset: "/assets/images/Image Krl/jayakarta/1.png",
  },
  {
    id: 3,
    name: "mangga besar",
    asset: "/assets/images/Image Krl/mangga besar/1.png",
  },
  {
    id: 4,
    name: "sawah besar",
    asset: "/assets/images/Image Krl/sawah besar/1.png",
  },
  {
    id: 5,
    name: "juanda",
    asset: "/assets/images/Image Krl/juanda/1.png",
  },
  {
    id: 6,
    name: "gondangdia",
    asset: "/assets/images/Image Krl/gondangdia/1.png",
  },
  {
    id: 7,
    name: "cikini",
    asset: "/assets/images/Image Krl/cikini/1.png",
  },
  {
    id: 8,
    name: "manggarai",
    asset: "/assets/images/Image Krl/manggarai/1.png",
  },
  {
    id: 9,
    name: "tebet",
    asset: "/assets/images/Image Krl/tebet/1.png",
  },
  {
    id: 10,
    name: "cawang",
    asset: "/assets/images/Image Krl/cawang/1.png",
  },
  {
    id: 11,
    name: "duren kalibata",
    asset: "/assets/images/Image Krl/duren kalibata/1.png",
  },
  {
    id: 12,
    name: "pasar minggu baru",
    asset: "/assets/images/Image Krl/pasar minggu baru/1.png",
  },
  {
    id: 13,
    name: "pasar minggu",
    asset: "/assets/images/Image Krl/pasar minggu/1.png",
  },
  {
    id: 14,
    name: "tanjung barat",
    asset: "/assets/images/Image Krl/tanjung barat/1.png",
  },
  {
    id: 15,
    name: "lenteng agung",
    asset: "/assets/images/Image Krl/lenteng agung/1.png",
  },
  {
    id: 16,
    name: "pancasila",
    asset: "/assets/images/Image Krl/pancasila/1.png",
  },
  {
    id: 17,
    name: "kp bandan",
    asset: "/assets/images/Image Krl/kp bandan/1.png",
  },
  {
    id: 18,
    name: "rajawali",
    asset: "/assets/images/Image Krl/rajawali/1.png",
  },
  {
    id: 19,
    name: "kemayoran",
    asset: "/assets/images/Image Krl/kemayoran/1.png",
  },
  {
    id: 20,
    name: "ps senen",
    asset: "/assets/images/Image Krl/ps senen/1.png",
  },
  {
    id: 21,
    name: "sentiong",
    asset: "/assets/images/Image Krl/sentiong/1.png",
  },
  {
    id: 22,
    name: "kramat",
    asset: "/assets/images/Image Krl/kramat/1.png",
  },
  {
    id: 23,
    name: "pondok jati",
    asset: "/assets/images/Image Krl/pondok jati/1.png",
  },
  {
    id: 24,
    name: "jatinegara",
    asset: "/assets/images/Image Krl/jatinegara/1.png",
  },
  {
    id: 25,
    name: "klender",
    asset: "/assets/images/Image Krl/klender/1.png",
  },
  {
    id: 26,
    name: "buaran",
    asset: "/assets/images/Image Krl/buaran/1.png",
  },
  {
    id: 27,
    name: "klender baru",
    asset: "/assets/images/Image Krl/klender baru/1.png",
  },
  {
    id: 28,
    name: "cakung",
    asset: "/assets/images/Image Krl/cakung/1.png",
  },
  {
    id: 29,
    name: "tanah abang",
    asset: "/assets/images/Image Krl/tanah abang/1.png",
  },
  {
    id: 30,
    name: "palmerah",
    asset: "/assets/images/Image Krl/palmerah/1.png",
  },
  {
    id: 31,
    name: "kebayoran",
    asset: "/assets/images/Image Krl/kebayoran/1.png",
  },
  {
    id: 32,
    name: "duri",
    asset: "/assets/images/Image Krl/duri/1.png",
  },
  {
    id: 33,
    name: "grogol",
    asset: "/assets/images/Image Krl/grogol/1.png",
  },
  {
    id: 34,
    name: "pesing",
    asset: "/assets/images/Image Krl/pesing/1.png",
  },
  {
    id: 35,
    name: "taman kota",
    asset: "/assets/images/Image Krl/taman kota/1.png",
  },
  {
    id: 36,
    name: "bojong indah",
    asset: "/assets/images/Image Krl/bojong indah/1.png",
  },
  {
    id: 37,
    name: "rawa buaya",
    asset: "/assets/images/Image Krl/rawa buaya/1.png",
  },
  {
    id: 38,
    name: "kalideres",
    asset: "/assets/images/Image Krl/kalideres/1.png",
  },
  {
    id: 39,
    name: "ancol",
    asset: "/assets/images/Image Krl/ancol/1.png",
  },
  {
    id: 40,
    name: "tj priuk",
    asset: "/assets/images/Image Krl/tj priuk/1.png",
  },
  {
    id: 41,
    name: "angke",
    asset: "/assets/images/Image Krl/angke/1.png",
  },
  {
    id: 42,
    name: "karet",
    asset: "/assets/images/Image Krl/karet/1.png",
  },
  {
    id: 43,
    name: "sudirman",
    asset: "/assets/images/Image Krl/sudirman/1.png",
  },
];

const Krl = () => {
  // State untuk mengontrol overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stasiun, setStasiun] = useState(null);
  const containerRef = useRef(null);

  // Fungsi untuk membuka dan menutup overlay
  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  const openModal = (name) => {
    const filteredStasiun = list_stasiun.filter((stasiun) => stasiun.name == name);
    console.log(name, filteredStasiun);
    setStasiun(filteredStasiun);
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setStasiun(null);
    setIsOpenModal(false);
  };

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) => prevIndex + 1);
  };

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex) => prevIndex - 1);
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => prevIndex + 1);
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) => prevIndex - 1);
  };
  const nextSlide3 = () => {
    setCurrentIndex3((prevIndex) => prevIndex + 1);
  };

  const prevSlide3 = () => {
    setCurrentIndex3((prevIndex) => prevIndex - 1);
  };
  const nextSlide4 = () => {
    setCurrentIndex4((prevIndex) => prevIndex + 1);
  };

  const prevSlide4 = () => {
    setCurrentIndex4((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      {/* Hero Section */}
      <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="Krl">
          <div className="hero-Krl">
            <HeroKrl />
          </div>

          {/* Section KRL */}
          <section className="KRL">
            <div className="containerKrl">
              <div className="contentKrl">
                <h1>Stasiun KRL</h1>
                <h1>Commuter Line</h1>
                <p>
                  Tempat pemberhentian bagi kereta listrik, dilengkapi dengan fasilitas akses masuk, area tunggu, dan
                  layanan tiket untuk mendukung mobilitas penumpang secara efisien di kawasan perkotaan padat.
                </p>
              </div>
              <div className="imagesKrl">
                <img src="/assets/images/fotokrl.png" alt="Gambar KRL" />
              </div>
            </div>
            <div className="buttonkrl">
              <button className="button-krl" onClick={openOverlay}>
                Lihat Rute
              </button>
            </div>
          </section>

          {/* Section Slider */}
          <section className=" py-8">
            {/* slider start */}
            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg mb-10">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex1 * (100 / 2.4)}%)`,
                  }}>
                  {/* card 1 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/jakartakota/jkt1-3.png"
                            alt="Stasiun Jakarta Kota"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("jakartakota")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/jayakarta/jy1-2.png"
                            alt="Stasiun Jayakarta"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("jayakarta")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/mangga besar/m1-2.png"
                            alt="Stasiun Mangga Besar"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("mangga besar")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/sawah besar/s1-2.png"
                            alt="Stasiun Sawah Besar"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("sawah besar")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/juanda/j1-2.png"
                            alt="Stasiun Juanda"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("juanda")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/gondangdia/g1-2.png"
                            alt="Stasiun Gondangdia"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("gondangdia")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/cikini/ck1-2.png"
                            alt="Stasiun Cikini"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cikini")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/manggarai/m1-2.png"
                            alt="Stasiun Manggarai"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("manggarai")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 9 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/tebet/t1-2.png"
                            alt="Stasiun Cikini"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tebet")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 10 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/cawang/c1-2.png"
                            alt="Stasiun Cawang"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cawang")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide1}
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
                disabled={currentIndex1 >= 5}
                onClick={nextSlide1}
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
            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg mb-10">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex2 * (100 / 2.4)}%)`,
                  }}>
                  {/* card 1 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/duren kalibata/d1-2.png"
                            alt="Stasiun Duren Kalibata"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("duren kalibata")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/pasar minggu/pm1-2.png"
                            alt="Stasiun Pasar Minggu"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pasar minggu")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/pasar minggu baru/pmb1-2.png"
                            alt="Stasiun Pasar Minggu Bar"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pasar minggu baru")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/tanjung barat/tb1-2.png"
                            alt="Stasiun Tanjung Barat"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tanjung barat")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/lenteng agung/l1-2.png"
                            alt="Stasiun Lenteng Agung"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("lenteng agung")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/pancasila/p1-2.png"
                            alt="Stasiun Pancasila"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pancasila")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/kp bandan/k1-2.png"
                            alt="Stasiun Kampung Bandan"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kp bandan")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/rajawali/r1-2.png"
                            alt="Stasiun Rajawali"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("rajawali")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 9 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/kemayoran/km1-2.png"
                            alt="Stasiun Kemayoran"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kemayoran")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 10 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/ps senen/ps1-2.png"
                            alt="Stasiun Pasar Senen"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("ps senen")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide2}
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
                disabled={currentIndex2 >= 5}
                onClick={nextSlide2}
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

            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg mb-10">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex3 * (100 / 2.4)}%)`,
                  }}>
                  {/* card 1 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/sentiong/g1-2.png"
                            alt="Stasiun Gang Sentiong"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("sentiong")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/kramat/kr1-2.png"
                            alt="Stasiun Kramat"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kramat")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/pondok jati/p1-2.png"
                            alt="Stasiun Pondok Jati"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pondok jati")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/jatinegara/j1-2.png"
                            alt="Stasiun Jatinegara"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("jatinegara")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/klender/k1-2.png"
                            alt="Stasiun Klender"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("klender")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/buaran/b1-2.png"
                            alt="Stasiun Buaran"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("buaran")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/klender baru/kb1-2.png"
                            alt="Stasiun Klender Baru"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("klender baru")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/cakung/c1-2.png"
                            alt="Stasiun Cakung"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cakung")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 9 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/tanah abang/ta1-2.png"
                            alt="Stasiun Tanah Abang"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tanah abang")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 10 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/palmerah/pl1-2.png"
                            alt="Stasiun Palmerah"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("palmerah")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide3}
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
                disabled={currentIndex3 >= 5}
                onClick={nextSlide3}
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

            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex4 * (100 / 2.7)}%)`,
                  }}>
                  {/* card 1 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/kebayoran/k1-2.png"
                            alt="Stasiun Kebayoran"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kebayoran")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card cursor-pointer">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/duri/d1-2.png"
                            alt="Stasiun Duri"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("duri")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/grogol/g1-2.png"
                            alt="Stasiun Grogol"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("grogol")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/pesing/p1-2.png"
                            alt="Stasiun Pesing"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pesing")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/taman kota/tk1-2.png"
                            alt="Stasiun Taman Kota"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("taman kota")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/bojong indah/b1-2.png"
                            alt="Stasiun Bojong Indah"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bojong indah")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/rawa buaya/r1-2.png"
                            alt="Stasiun Rawa Buaya"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("rawa buaya")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/kalideres/kl1-2.png"
                            alt="Stasiun Kalideres"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kalideres")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 9 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/ancol/a1-2.png"
                            alt="Stasiun Ancol"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("ancol")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 10 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/tj priuk/t1-2.png"
                            alt="Stasiun Tanjung Priuk"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tj priuk")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 11 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/angke/a1-2.png"
                            alt="Stasiun Angke"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("angke")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 12 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/karet/k1-2.png"
                            alt="Stasiun Karet"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("karet")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 13 */}
                  <div className="swiper-slide flex-shrink-0 px-2">
                    <div className="station-card">
                      <div className="button-image">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Krl/sudirman/s1-2.png"
                            alt="Stasiun Sudirman"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("sudirman")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide4}
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
                disabled={currentIndex4 >= 8}
                onClick={nextSlide4}
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
        imagePath="/assets/images/Peta Rute/Peta Rute KRL.jpg" // Gambar rute untuk tombol "Lihat Rute"
      />
      <Modal isOpen={isOpenModal} toggleOverlay={closeModal} imagePath={stasiun?.[0]?.asset} />
    </>
  );
};

export default Krl;
