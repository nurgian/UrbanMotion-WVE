import React from 'react';
import './RouteOverlay.css';

const RouteOverlay = ({ isOpen, toggleOverlay, imagePath }) => {
  if (!isOpen) return null;

  return (
    <div className="route-overlay">
      <div className="route-overlay-content">
        <img src={imagePath} alt="Rute Transportasi" />
        <button className="route-close-btn" onClick={toggleOverlay}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default RouteOverlay;
