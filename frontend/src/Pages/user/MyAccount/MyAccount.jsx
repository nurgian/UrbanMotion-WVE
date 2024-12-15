// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MyAccount = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login pengguna
//   const navigate = useNavigate();

//   // Cek status login saat halaman pertama kali dimuat
//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     if (loggedInStatus) {
//       setIsLoggedIn(true); // Jika sudah login, set status login ke true
//     } else {
//       navigate("/login"); // Jika tidak login, arahkan ke halaman login
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn"); // Menghapus status login
//     localStorage.removeItem("role"); // Menghapus role
//     setIsLoggedIn(false); // Memperbarui state di komponen ini
//     navigate("/login"); // Arahkan ke halaman login setelah logout
//   };

//   return (
//     <div className="my-account">
//       <h1>My Account</h1>
//       {/* Konten profil pengguna di sini */}

//       {/* Tombol logout */}
//       {isLoggedIn && (
//         <div className="logout-button">
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

import { useNavigate } from "react-router-dom"; // Jika menggunakan react-router untuk navigasi
import { getToken, removeToken } from "../../../utils/authUtils";
import useFetchData from "../../../hook/useFeatchData";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import "./MyAccount.css";

const MyAccount = () => {
  const navigate = useNavigate(); // React Router untuk navigasi halaman
  const token = getToken();
  const {data, loading, error} = useFetchData('/users/profile', token);

  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    phone_number: "",
    image: "",
    photo_profile: null,
  });
  // Handle file upload
  
  useEffect(() => {
    if (data) {
    

      if(data.data.user.photo_profile && data.data.user.photo_profile.includes('uploads')) {
        setProfileData((prev) => ({
          ...prev,
          image: `${import.meta.env.VITE_BACKEND_URL}/${data.data.user.photo_profile}`,
        }));
      } else {
        setProfileData((prev) => ({
          ...prev,
          image: data.data.user.photo_profile,
        }));
      }

      if (data.data.user.phone_number) {
        setProfileData((prev) => ({
          ...prev,
          phone_number: data.data.user.phone_number.slice(1) ,
        }));
      }

      setProfileData((prev) => ({
        ...prev,
        username: data.data.user.username,
        email: data.data.user.email,
      }));


    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const handleUpdate = async() => {
    try {
      const formData = new FormData();
      let phoneNumber = profileData.phone_number

      if (!phoneNumber.startsWith("0")) {
        phoneNumber = "0" + phoneNumber;
      }
      // Append other fields to FormData
      formData.append("username", profileData.username);
      formData.append("phone_number", phoneNumber);

      if (profileData.photo_profile) {
        formData.append("image", profileData.photo_profile);
      }

      

      await axiosInstance.put("/users/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      window.location.reload();

    } catch (error) {
      alert("Error: " + error.response ? error.response.data.message : error.message);
    }
  }


  

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Hapus status login
    localStorage.removeItem("role"); // Hapus role pengguna
    removeToken() // Hapus Token
    navigate("/login"); // Arahkan pengguna ke halaman login setelah logout
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prev) => ({
        ...prev,
        photo_profile: file,
      }))
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          image: reader.result,
        }))
// Update state with the new image
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  };

  // Fungsi untuk menuju halaman histori
  const handleHistori = () => {
    navigate("/my-history"); // Arahkan ke halaman histori
  };

  const userData = data.data.user;

  return (
    <section className="myaccount-profil">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl">Profil Akun</h1>
      </div>

      {/* Container */}
      <div className=" container mx-auto px-4">
        <div className="content-acc">
          {/* Profil Section */}
          <div className="lg:w-1/3">
            <div className="bg-primary-10 shadow-md rounded-lg p-6 text-center">
            <div className="w-[150px] h-[150px] relative rounded-full mx-auto mb-4">
                  {/* Display the image */}
                  <img 
                    src={profileData.image || "./public/assets/images/windah.jpg"} 
                    className="object-cover object-center w-full h-full rounded-full" 
                    alt="Profile Picture" 
                  />

                  {/* Camera icon for uploading */}
                  <label 
                    htmlFor="file" 
                    className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-5px] right-0 z-[100px] flex justify-center items-center cursor-pointer"
                  >
                    <img 
                      src="/public/camera.svg" 
                      alt="Upload" 
                      width={20} 
                      height={20} 
                      className="text-white" 
                    />
                  </label>

                  {/* Hidden file input */}
                  <input 
                    type="file" 
                    hidden 
                    name="file" 
                    id="file" 
                    onChange={handleUploadFile} 
                  />
             </div>
              {/* <img
                src={userData.photo_profile ? userData.photo_profile : "./public/assets/images/windah.jpg"}
                alt="Profile Picture"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              /> */}
              <h2 className="text-lg text-secondary-30 font-semibold">Profi Saya</h2>
              <h4 className="text-lg text-secondary-30 font-semibold">{userData.username}</h4>
              <p className="text-secondary-30 mb-4">{userData.email}</p>

              <div className="space-x-4">
                <button
                  onClick={handleHistori}
                  className="bg-primary-20 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
                  Histori
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Detail Section */}
          <div className="lg:w-2/3">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Section */}
              <div>
                <h3 className="font-bold text-lg mb-4">Personal</h3>
                <div className="mb-4">
                  <label htmlFor="nama" className="block text-sm font-medium mb-1 ">
                    Nama
                  </label>
                  <input type="text" id="nama" defaultValue={profileData.username} className="form-input w-full border border-gray-400 p-4 rounded-md" onChange={(e) => setProfileData({...profileData, username: e.target.value})}/>
                </div>
                {/* <div className="mb-4">
                  <label htmlFor="tgl-lahir" className="block text-sm font-medium mb-1">
                    Tanggal Lahir
                  </label>
                  <input type="text" id="tgl-lahir" defaultValue="17 Agustus 1945" className="form-input w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="alamat" className="block text-sm font-medium mb-1">
                    Alamat
                  </label>
                  <input type="text" id="alamat" defaultValue="Jalan M.H Thamrin" className="form-input w-full" />
                </div> */}
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input type="email" id="email" defaultValue={profileData.email} className="form-input w-full border border-gray-400 p-4 rounded-md" disabled />
                </div>
                <div className="mb-4">
                  <label htmlFor="no-hp" className="block text-sm font-medium mb-1">
                    Nomor HP
                  </label>
                  <div className="flex items-center">
                    <span className="inline-block bg-gray-200  border border-gray-400 p-4 rounded-r-none rounded-md mr-2">+62</span>
                    <input
                      type="text"
                      id="no-hp"
                      defaultValue={profileData.phone_number}
                      className="form-input w-full rounded-l-none border border-gray-400 p-4 rounded-md"
                      onChange={(e) => setProfileData({...profileData, phone_number: e.target.value})}
                    />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <label htmlFor="instagram" className="block text-sm font-medium mb-1">
                    Instagram
                  </label>
                  <input type="text" id="instagram" defaultValue="budiman123" className="form-input w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="twitter" className="block text-sm font-medium mb-1">
                    Twitter
                  </label>
                  <input type="text" id="twitter" defaultValue="budimanja" className="form-input w-full" />
                </div> */}
              </div>

            </div>
              <button className="bg-primary-20 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition w-full mt-6" onClick={handleUpdate}>
                   Update Profile
              </button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default MyAccount;
