import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../../componen/Header/headerAdmin";
import useFetchData from "../../../../../hook/useFeatchData";
import axiosInstance from "../../../../../utils/axios"
import { getToken } from "../../../../../utils/authUtils";
import { formatRupiah } from "../../../../../utils/foramtCurrency";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = getToken();
  const {data, loading, error} = useFetchData(`/vehicles/${id}`);
  const [vehicle, setVehicle] = useState({
    id: "",
    name: "",
    type: "",
    category: "",
    transmission_type: "",
    passenger_capacity: 0,
    price: 0,
    image: "",
    status: "Ready",
    air_conditioner: false,
    doors: 0,
  });
  
  useEffect(() => {
    if (data) {
      setVehicle({
        id: data.data.vehicle.id,
        name: data.data.vehicle.name,
        type: data.data.vehicle.type,
        category: data.data.vehicle.category,
        transmission_type: data.data.vehicle.transmission_type,
        passenger_capacity: data.data.vehicle.passenger_capacity,
        price: data.data.vehicle.price,
        image: data.data.vehicle.image || "",
        status: data.data.vehicle.status,
        air_conditioner: data.data.vehicle.air_conditioner,
        doors: data.data.vehicle.doors,
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDelete = async(id) => {
    if (!token) {
      alert('anda belum login')
      return
    }
    
     try {
        await axiosInstance.delete(`/vehicles/${id}`,  
          {
            headers: {Authorization: `Bearer ${token}`}
          }
      );
        navigate('/admin/product')
     } catch (error) {
        alert(error.message)
     }
  }

  function formatVehicleCategory(value) {
    switch (value) {
      case "luxuryCar":
        return "Luxury Car";
      case "cityCar":
        return "City Car";
      case "mpv":
        return "MPV";
      case "twoWheelers":
        return "Two Wheelers";
      default:
        return value; 
    }
  }
  

  

  return (
    <div>
      <div className="flex-1 overflow-auto relative uppercase">
        <HeaderAdmin title={`Detail Produk  :  ${vehicle.name}`} />
      </div>
      <div className="max-w-4xl mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{vehicle.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center">
        <img
          src={vehicle.image ? `${import.meta.env.VITE_BACKEND_URL}/${vehicle.image}` : "https://via.placeholder.com/300"}
          alt={vehicle.name}
          className="max-w-full h-auto rounded object-contain"
        />
        </div>
        {/* Details Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Details</h3>
            <ul className="list-none space-y-2 mt-2">
              <li>
                <strong>Type:</strong> {formatVehicleCategory(vehicle.type)}
              </li>
              <li>
                <strong>Category:</strong> {vehicle.category}
              </li>
              <li>
                <strong>Transmission:</strong> {vehicle.transmission_type}
              </li>
              <li>
                <strong>Passenger Capacity:</strong> {vehicle.passenger_capacity}
              </li>
              <li>
                <strong>Doors:</strong> {vehicle.doors}
              </li>
              <li>
                <strong>Air Conditioner:</strong>{" "}
                {vehicle.air_conditioner ? "Yes" : "No"}
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Price</h3>
            <p className="text-xl font-bold text-green-600">
              {formatRupiah(vehicle.price)}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Status</h3>
            <p
              className={`font-bold ${
                vehicle.status === "Ready"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {vehicle.status}
            </p>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => navigate(`/admin/product-edit/${vehicle.id}`)}>
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={() => handleDelete(vehicle.id)}>
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;


