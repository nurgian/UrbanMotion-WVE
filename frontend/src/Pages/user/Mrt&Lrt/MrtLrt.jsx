import React, { useRef, useState } from "react";
import "./MrtLrt.css";
import RouteOverlay from "../../../Components/RouteOverlay/RouteOverlay";
import Modal from "../../../Components/Modal/Modal";
import HeroMrtLrt from "./hero-MrtLrt";

const list_mrt = [
  {
    id: 1,
    name: "lebak bulus grab",
    asset: "/assets/images/Image Mrt/lebak bulus grab/1.png",
  },
  {
    id: 2,
    name: "fatmawati",
    asset: "/assets/images/Image Mrt/fatmawati/1.png",
  },
  {
    id: 3,
    name: "cipete raya",
    asset: "/assets/images/Image Mrt/cipete raya/1.png",
  },
  {
    id: 4,
    name: "haji nawi",
    asset: "/assets/images/Image Mrt/haji nawi/1.png",
  },
  {
    id: 5,
    name: "blok a",
    asset: "/assets/images/Image Mrt/blok a/1.png",
  },
  {
    id: 6,
    name: "blok m",
    asset: "/assets/images/Image Mrt/blok m/1.png",
  },
  {
    id: 7,
    name: "asean",
    asset: "/assets/images/Image Mrt/asean/1.png",
  },
  {
    id: 8,
    name: "senayan mastercard",
    asset: "/assets/images/Image Mrt/senayan mastercard/1.png",
  },
  {
    id: 9,
    name: "istora mandiri",
    asset: "/assets/images/Image Mrt/istora mandiri/1.png",
  },
  {
    id: 10,
    name: "bendungan hilir",
    asset: "/assets/images/Image Mrt/bendungan hilir/1.png",
  },
  {
    id: 11,
    name: "setiabudi astra",
    asset: "/assets/images/Image Mrt/setiabudi astra/1.png",
  },
  {
    id: 12,
    name: "dukuh atas bni",
    asset: "/assets/images/Image Mrt/dukuh atas bni/1.png",
  },
  {
    id: 13,
    name: "bundaran HI",
    asset: "/assets/images/Image Mrt/bundaran HI/1.png",
  },
];

const list_lrt = [
  {
    id: 1,
    name: "dukuh atas",
    asset: "/assets/images/Image lrt/dukuh atas/1.png",
  },
  {
    id: 2,
    name: "setia budi",
    asset: "/assets/images/Image lrt/setia budi/1.png",
  },
  {
    id: 3,
    name: "rasuna said",
    asset: "/assets/images/Image lrt/rassuna said/1.png",
  },
  {
    id: 4,
    name: "kuningan",
    asset: "/assets/images/Image lrt/kuningan/1.png",
  },
  {
    id: 5,
    name: "pancoran",
    asset: "/assets/images/Image lrt/pancoran/1.png",
  },
  {
    id: 6,
    name: "cikoko",
    asset: "/assets/images/Image lrt/cikoko/1.png",
  },
  {
    id: 7,
    name: "ciliwung",
    asset: "/assets/images/Image lrt/ciliwung/1.png",
  },
  {
    id: 8,
    name: "cawang",
    asset: "/assets/images/Image lrt/cawang/1.png",
  },
  {
    id: 9,
    name: "tmii",
    asset: "/assets/images/Image lrt/tmii/1.png",
  },
  {
    id: 10,
    name: "kampung rambutan",
    asset: "/assets/images/Image lrt/kampung rambutan/1.png",
  },
  {
    id: 11,
    name: "ciracas",
    asset: "/assets/images/Image lrt/ciracas/1.png",
  },
  {
    id: 12,
    name: "halim",
    asset: "/assets/images/Image lrt/halim/1.png",
  },
];

const MrtLrt = () => {
  // State untuk mengontrol overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayImage, setOverlayImage] = useState(""); // Untuk menyimpan path gambar

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mrt, setMrt] = useState(null);
  const [lrt, setLrt] = useState(null);
  const [type, setType] = useState(null);

  // Fungsi untuk membuka overlay dengan gambar tertentu
  const openOverlay = (imagePath) => {
    setOverlayImage(imagePath);
    setIsOverlayOpen(true);
  };

  // Fungsi untuk menutup overlay
  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setOverlayImage(""); // Reset gambar
  };

  const openModal = (name, type) => {
    const filteredData =
      type === "mrt"
        ? list_mrt.filter((stasiun) => stasiun.name == name)
        : list_lrt.filter((stasiun) => stasiun.name == name);
    if (type === "mrt") {
      setMrt(filteredData);
    } else {
      setLrt(filteredData);
    }
    setType(type);
    setIsOpenModal(true);
  };
  const closeModal = (type) => {
    // reset data
    if (type === "mrt") {
      setMrt(null);
    } else {
      setLrt(null);
    }
    setType(null);
    setIsOpenModal(false);
  };

  //  fungsi slider
  const [currentIndexMrt, setCurrentIndexMrt] = useState(0);
  const [currentIndexLrt, setCurrentIndexLrt] = useState(0);

  const containerRef = useRef(null);

  console.log(currentIndexLrt, currentIndexMrt);
  const nextSlide = (type) => {
    if (type === "mrt") {
      setCurrentIndexMrt((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndexLrt((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = (type) => {
    if (type === "mrt") {
      setCurrentIndexMrt((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndexLrt((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="MrtLrt">
          <div className="hero-MrtLrt">
            <HeroMrtLrt />
          </div>

          {/* Section Mrt */}
          <section className="MRT">
            <div className="containerMrt">
              <div className="contentMrt">
                <h1>Stasiun MRT</h1>
                <h1>Commuter Line</h1>
                <p>
                  Tempat pemberhentian khusus untuk layanan kereta Mass Rapid Transit (MRT) yang menghubungkan wilayah
                  di Jakarta melalui jalur cepat dan efisien. tempat pemberhentian khusus untuk layanan kereta Mass
                  Rapid Transit (MRT) yang menghubungkan wilayah di Jakarta melalui jalur cepat dan efisien.
                </p>
              </div>
              <div className="imagesMrt">
                <img src="/assets/images/fotomrt.png" alt="Gambar MRT" />
              </div>
            </div>
            <div className="buttonmrt">
              <button className="button-mrt" onClick={openOverlay}>
                Lihat Rute
              </button>
            </div>
                  
          </section>

          {/* Section Slider */}
          <section className="py-8">
            {/* slider start */}
            <div className="relative  mx-auto overflow-hidden rounded-lg shadow-lg">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndexMrt * (100 / 2.7)}%)`,
                  }}>
                  {/* Card 1 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/lebak bulus grab/1-1.png"
                            alt="Stasiun MRT Lebak Bulus Grab"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("lebak bulus grab", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/fatmawati/1-1.png"
                            alt="Stasiun MRT Fatamawati Indomaret"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("fatmawati", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/cipete raya/1-1.png"
                            alt="Stasiun MRT Cipete Raya"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cipeteraya", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/haji nawi/1-1.png"
                            alt="Stasiun MRT Haji Nawi"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("haji nawi", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 5 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/blok a/1-1.png"
                            alt="Stasiun MRT Blok A"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("blok a", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 6 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/blok m/1-1.png"
                            alt="Stasiun MRT Blok M"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("blok m", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 7 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/asean/1-1.png"
                            alt="Stasiun MRT Asean"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("asean", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 8 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/senayan mastercard/1-1.png"
                            alt="Stasiun MRT Senayan Mastercard"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("senayan mastercard", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 9 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/istora mandiri/1-1.png"
                            alt="Stasiun MRT Istora Mandiri"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("istora mandiri", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 10 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/bendungan hilir/1-1.png"
                            alt="Stasiun MRT Bendungan Hilir"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bendungan hilir", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 11 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/setiabudi astra/1-1.png"
                            alt="Stasiun MRT Setiabudi Astra"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("setiabudi astra", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 12 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/dukuh atas bni/1-1.png"
                            alt="Stasiun MRT Dukuh Atas BNI"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("dukuh atas bni", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* card 13 */}
                  <div className="swiper-slide-mrt flex-shrink-0 px-2">
                    <div className="station-card-mrt">
                      <div className="button-image-mrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image Mrt/bundaran HI/1-1.png"
                            alt="Stasiun MRT Bundaran HI Bank DKI"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("bundaran HI", "mrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => prevSlide("mrt")}
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
                disabled={currentIndexMrt >= 8}
                onClick={() => nextSlide("mrt")}
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

          {/* Section Lrt */}
          <section className="LRT">
            <div className="containerLrt">
              <div className="contentLrt">
                <h1>Stasiun LRT</h1>
                <h1>Commuter Line</h1>
                <p>
                  Tempat pemberhentian kereta Light Rail Transit (LRT) yang melayani rute singkat dengan jalur layang,
                  umumnya di Jakarta dan sekitarnya. Setiap stasiun LRT dilengkapi fasilitas modern seperti area tunggu
                  tertutup, akses lift, dan gerbang tiket otomatis, memberikan kenyamanan bagi penumpang di kawasan
                  perkotaan.
                </p>
              </div>
              <div className="imagesLrt">
                <img src="/assets/images/fotolrt.png" alt="Gambar LRT" />
              </div>
            </div>
            <div className="buttonlrt">
              <button className="button-lrt" onClick={openOverlay}>
                Lihat Rute
              </button>
            </div>
                  
          </section>

          {/* Section Slider */}
          <section className="py-8">
            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg">
              <div className="overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndexLrt * (100 / 3)}%)`,
                  }}>
                  {/* Card 1 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/dukuh atas/1-1.png"
                            alt="Stasiun LRT Dukuh Atas"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("dukuh atas", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/setia budi/1-1.png"
                            alt="Stasiun LRT Setia Budi"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("setia budi", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/rasuna said/1-1.png"
                            alt="Stasiun LRT Rasuna Said"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("rasuna said", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/kuningan/1-1.png"
                            alt="Stasiun LRT Kuningan"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kuningan", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/pancoran/1-1.png"
                            alt="Stasiun LRT Pancoran"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("pancoran", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 6 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/cikoko/1-1.png"
                            alt="Stasiun LRT Cikoko"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cikoko", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 7 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/ciliwung/1-1.png"
                            alt="Stasiun LRT Ciliwung"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("ciliwung", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 8 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/cawang/1-1.png"
                            alt="Stasiun LRT Cawang"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("cawang", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 9 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/tmii/1-1.png"
                            alt="Stasiun LRT TMII"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("tmii", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 10 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/kampung rambutan/1-1.png"
                            alt="Stasiun LRT Kampung Rambutan"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("kampung rambutan", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 11 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/ciracas/1-1.png"
                            alt="Stasiun LRT Ciracas"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("ciracas", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 12 */}
                  <div className="swiper-slide-lrt flex-shrink-0 px-2">
                    <div className="station-card-lrt">
                      <div className="button-image-lrt">
                        <button className="border-none bg-white">
                          <img
                            src="/assets/images/Image lrt/halim/1-1.png"
                            alt="Stasiun LRT Halim"
                            className="w-120 h-120 object-cover rounded-lg shadow-lg"
                            onClick={() => openModal("halim", "lrt")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => prevSlide(lrt)}
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
                disabled={currentIndexLrt >= 8}
                onClick={() => nextSlide("lrt")}
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
          </section>
        </div>
      </div>
      {/* RouteOverlay Component */}
      <RouteOverlay
        isOpen={isOverlayOpen}
        toggleOverlay={closeOverlay}
        imagePath={overlayImage} // Gambar rute sesuai tombol
      />
      <Modal
        isOpen={isOpenModal}
        toggleOverlay={closeModal}
        imagePath={type === "mrt" ? mrt?.[0]?.asset : type === "lrt" ? lrt?.[0]?.asset : null}
      />
    </>
  );
};

export default MrtLrt;
