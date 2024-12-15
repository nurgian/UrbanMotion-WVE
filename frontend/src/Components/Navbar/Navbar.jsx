import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Impor file CSS untuk gaya Navbar

export const Navbar = ({ className, ...props }) => {
  // State untuk mengatur status login, dropdown, menu mobile, dan shadow pada navbar
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login pengguna
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Status dropdown terbuka/tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Status menu mobile terbuka/tertutup
  const [activeMenu, setActiveMenu] = useState(null); // Menu aktif saat ini
  const [hasShadow, setHasShadow] = useState(false); // Menambahkan shadow ke navbar saat scroll

  const navigate = useNavigate(); // Hook untuk navigasi antar halaman
  const location = useLocation(); // Hook untuk mendapatkan informasi lokasi saat ini
  const role = localStorage.getItem("role"); // untuk mendapatkan role dari user yang sedang login

  // Menambahkan event listener untuk menambahkan shadow saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10); // Shadow aktif jika pengguna scroll lebih dari 10px
    };

    // Cek status login saat komponen pertama kali dimuat
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true); // Jika sudah login, set status login ke true
    }

    // Tambahkan listener saat komponen mount
    window.addEventListener("scroll", handleScroll);

    // Hapus listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk navigasi ke halaman login
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Fungsi untuk navigasi ke halaman profil
  const handleProfileClick = () => {
    if (role === "user") {
      navigate("/my-account");
    } else {
      navigate("/admin/dashboard");
    }
  };

  // Fungsi untuk navigasi ke halaman tertentu dan menutup menu dropdown/menu mobile
  const handleMenuClick = (route) => {
    navigate(route); // Navigasi ke halaman
    setActiveMenu(route); // Set menu aktif
    setIsMenuOpen(false); // Tutup menu mobile
    setIsDropdownOpen(false); // Tutup dropdown jika terbuka
  };

  // Fungsi untuk navigasi ke submenu dalam dropdown
  const handleSubMenuClick = (route) => {
    navigate(route); // Navigasi ke halaman submenu
    setIsMenuOpen(false); // Tutup menu mobile
    setIsDropdownOpen(false); // Tutup dropdown
    setActiveMenu("/transportasi-umum"); // Set menu "Transportasi Umum" sebagai aktif
  };

  // Array untuk daftar menu utama
  const links = [
    { path: "/", label: "Beranda" },
    { path: "/tentang-kami", label: "Tentang kami" },
    { path: "/transportasi-umum", label: "Transportasi umum" },
    { path: "/daftar-harga", label: "Daftar harga" },
    { path: "/sewa", label: "Sewa" },
    { path: "/kontak", label: "Kontak" },
  ];

  // Array untuk item dropdown di menu "Transportasi Umum"
  const dropdownItems = [
    { path: "/transportasi-umum/KRL", label: "KRL" },
    { path: "/transportasi-umum/MRT", label: "MRT & LRT" },
    { path: "/transportasi-umum/transjakarta", label: "Transjakarta" },
  ];

  return (
    // Container utama untuk navbar, menambahkan shadow jika `hasShadow` aktif
    <div className={`navbar-container ${className} ${hasShadow ? "shadow" : ""}`}>
      {/* Logo navbar */}
      <div className="navbar-logo">
        <img src="/assets/images/logo.png" alt="Logo" /> {/* Menampilkan logo */}
      </div>

      {/* Tombol toggle menu untuk tampilan mobile */}
      <button
        className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle status menu mobile
      >
        <i className={`fas fa-bars ${isMenuOpen ? "open" : ""}`}></i> {/* Ikon menu */}
      </button>

      {/* Daftar menu utama */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <div
            key={link.path} // Key unik untuk setiap menu
            onClick={
              () =>
                link.path === "/transportasi-umum" // Jika menu "Transportasi Umum" dipilih
                  ? setIsDropdownOpen(!isDropdownOpen) // Toggle dropdown
                  : handleMenuClick(link.path) // Navigasi ke halaman lain
            }
            className={`navbar-item ${activeMenu === link.path ? "active" : ""}`} // Menambahkan kelas aktif
          >
            <span className="navbar-item-text">
              {link.label} {/* Label menu */}
              {/* Ikon dropdown untuk menu "Transportasi Umum" */}
              {link.path === "/transportasi-umum" && (
                <i className={`fas fa-chevron-down ${isDropdownOpen ? "open" : ""}`}></i>
              )}
            </span>

            {/* Dropdown menu untuk "Transportasi Umum" */}
            {link.path === "/transportasi-umum" && isDropdownOpen && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <div
                    key={item.path} // Key unik untuk setiap dropdown item
                    onClick={() => handleSubMenuClick(item.path)} // Navigasi ke submenu
                    className="dropdown-item">
                    {item.label} {/* Label dropdown */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Tombol login atau profil */}
        <div
          className={`login-button ${isLoggedIn ? "desktop-visible" : ""}`}
          onClick={isLoggedIn ? handleProfileClick : handleLoginClick}>
          {/* Tampilkan ikon profil jika sudah login */}
          {isLoggedIn ? (
            <>
              <i className="fas fa-user-circle"></i> {/* Ikon profil */}
            </>
          ) : (
            <span className="login-button-text">Login</span> // Teks tombol login
          )}
        </div>
      </div>
    </div>
  );
};
