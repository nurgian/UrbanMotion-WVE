import React from "react";
import "./RouteOverlay.css";

const Modal = ({ isOpen, toggleOverlay, imagePath }) => {
  if (!isOpen) return null;
  if (!imagePath) return null;

  return (
    <div className="route-overlay" onClick={toggleOverlay}>
      <div className="bg-[#0b2e34]">
        <img src={imagePath} alt="Rute Transportasi" />
      </div>
    </div>
  );
};

export default Modal;