import React from "react";
import "./style.css"; // Pastikan Anda memiliki file CSS ini

const PaymentConfirmationPage = () => {
  return (
    <div className="confirmation-section">
      <div className="confirmation-container">
      <img className="confirmation-image" src="/assets/images/image konfirmasi/img-car.svg" alt="Confirmation" />
      <div className="confirmation-content">
        <div className="confirmation-header">
          <div className="status-indicator">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          </div>
          <div className="confirmation-title">Pemesanan Terkonfirmasi</div>
          <div className="confirmation-message">
            Terima kasih telah memilih Urban Motion!
            <br />
            <br />
            Pesanan anda telah berhasil kami terima dan sedang diproses. Semua informasi terkait pembayaran, detail pesanan, dan instruksi selanjutnya telah kami kirimkan ke email Anda.
            <br />
            <br />
            Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami.
            <br />
          </div>
        </div>
        <a href="./sewa">
          <button className="confirmation-button">OK</button> 
        </a>
      </div>
    </div>
    </div>
  );
};


export default PaymentConfirmationPage;