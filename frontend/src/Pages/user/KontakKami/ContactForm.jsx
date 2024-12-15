// import "./ContactForm.css";
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="form-KontakKami">
//       <div className="header-title-form-KontakKami">
//         <div>Hubungi kami</div>
//       </div>
//       <div className="subtitle-form-KontakKami">
//         <p>Jangan ragu untuk meminta konsultasi atau bertanya, hubungi kami</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="row-KontakKami">
//           <div className="form-field-KontakKami">
//             <label className="label-KontakKami">Nama Pertama</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Nama Pertama"
//               className="input-field-KontakKami"
//             />
//           </div>
//           <div className="form-field-KontakKami">
//             <label className="label-KontakKami">Nama Terakhir</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Nama Terakhir"
//               className="input-field-KontakKami"
//             />
//           </div>
//         </div>
//         <div className="row-KontakKami">
//           <div className="form-field-KontakKami">
//             <label className="label-KontakKami">Alamat Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="example@gmail.com"
//               className="input-field-KontakKami"
//             />
//           </div>
//           <div className="form-field-KontakKami">
//             <label className="label-KontakKami">Subjek</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Isi Subjek"
//               className="input-field-KontakKami"
//             />
//           </div>
//         </div>
//         <div className="form-field-KontakKami">
//           <label className="label-KontakKami">Pesan</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Ketik pesan di sini..."
//             className="input-field-message-KontakKami"
//           />
//         </div>
//         <button type="submit" className="submit-button-KontakKami">
//           Kirim Pesan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import "./ContactForm.css";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import Swal from "sweetalert2"; // Import SweetAlert2

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null); // Create a reference to the form for detecting outside clicks

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form before submission
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "Nama pertama tidak boleh kosong";
    if (!formData.lastName) errors.lastName = "Nama terakhir tidak boleh kosong";
    if (!formData.email) errors.email = "Email tidak boleh kosong";
    if (!formData.subject) errors.subject = "Subjek tidak boleh kosong";
    if (!formData.message) errors.message = "Pesan tidak boleh kosong";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before sending
    if (!validateForm()) {
      return; // If validation fails, don't submit
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_21w88eo", // Replace with your EmailJS service ID
        "template_c2i7vet", // Replace with your EmailJS template ID
        e.target, // Target form (this form itself)
        "X2-DlykBj_fB3IvGV" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);

          // Show SweetAlert2 success message
          Swal.fire({
            icon: "success",
            title: "Pesan Anda Telah Terkirim!",
            text: "Terima kasih telah menghubungi kami.",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log("Error sending email:", error.text);

          // Show SweetAlert2 error message
          Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan!",
            text: "Pesan Anda gagal dikirim. Coba lagi.",
            confirmButtonText: "OK",
          });
        }
      );

    // Clear the form after submission (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Detect clicks outside the form to hide error messages
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setFormErrors({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear error message when input is focused
  const handleFocus = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  return (
    <div className="form-KontakKami">
      <div className="header-title-form-KontakKami">
        <div>Hubungi kami</div>
      </div>
      <div className="subtitle-form-KontakKami">
        <p>Jangan ragu untuk meminta konsultasi atau bertanya, hubungi kami</p>
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="row-KontakKami">
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Nama Pertama</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Nama Pertama"
              className="input-field-KontakKami"
            />
            {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
          </div>
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Nama Terakhir</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Nama Terakhir"
              className="input-field-KontakKami"
            />
            {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
          </div>
        </div>
        <div className="row-KontakKami">
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Alamat Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="example@gmail.com"
              className="input-field-KontakKami"
            />
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
          </div>
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Subjek</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Isi Subjek"
              className="input-field-KontakKami"
            />
            {formErrors.subject && <div className="error-message">{formErrors.subject}</div>}
          </div>
        </div>
        <div className="form-field-KontakKami">
          <label className="label-KontakKami">Pesan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Ketik pesan di sini..."
            className="input-field-message-KontakKami"
          />
          {formErrors.message && <div className="error-message">{formErrors.message}</div>}
        </div>
        <button type="submit" className="submit-button-KontakKami">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactForm;