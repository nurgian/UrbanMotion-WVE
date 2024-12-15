import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./sidebar.css";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: "fa-home", color: "#6366f1", href: "/admin/dashboard" },
  { name: "Product", icon: "fa-box", color: "#8B5CF6", href: "/admin/product" },
  { name: "Booking", icon: "fa-clipboard-list", color: "#8B5CF6", href: "/admin/booking" },
  // { name: "Setting", icon: "fa-cogs", color: "#10B981", href: "/admin/settings" },
  { name: "Logout", icon: "fa-sign-out-alt", color: "#F59E0B", href: "/admin/logout" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State untuk mengontrol visibilitas overlay
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk menangani logout
  const handleLogoutAdmin = () => {
    localStorage.removeItem("isLoggedIn"); // Menghapus status login
    localStorage.removeItem("role"); // Menghapus role
    navigate("/login"); // Arahkan ke halaman login setelah logout
    setIsOverlayVisible(false); // Menutup overlay setelah logout
  };

  return (
    <motion.div
      className={`sidebar-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}>
      <div className="sidebar-content">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sidebar-logo">
          <img src="/assets/images/logo.png" alt="logo-sidebar" />
        </motion.button>

        <nav className="sidebar-menu">
          {SIDEBAR_ITEMS.map((item) =>
            item.name !== "Logout" ? (
              <Link
                key={item.href}
                to={item.href}
                className={`sidebar-menu-item ${location.pathname === item.href ? "active-item" : ""}`}>
                <i className={`fas ${item.icon} sidebar-menu-icon`} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="sidebar-menu-text"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}>
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            ) : (
              // Item Logout
              <div
                key={item.href}
                className="sidebar-menu-item"
                onClick={() => setIsOverlayVisible(true)} // Tampilkan overlay saat Logout diklik
              >
                <i className={`fas ${item.icon} sidebar-menu-icon`} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="sidebar-menu-text"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}>
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </nav>
      </div>

      {/* Overlay Konfirmasi Logout */}
      {isOverlayVisible && (
        <div className="overlay-logout-admin">
          <div className="overlay-content-logout-admin">
            <p>Apakah Anda yakin ingin keluar?</p>
            <div className="overlay-buttons-logout-admin">
              <button onClick={handleLogoutAdmin} className="btn-yes-logout-admin">
                Ya
              </button>
              <button onClick={() => setIsOverlayVisible(false)} className="btn-no-logout-admin">
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Sidebar;
