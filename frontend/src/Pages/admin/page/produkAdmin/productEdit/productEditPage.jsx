import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../componen/Header/headerAdmin";
import useFetchData from "../../../../../hook/useFeatchData";
import ProductEdit from "../../../componen/products/edit/productEdit";

const ProductEditPage = () => {
  const { id } = useParams();
  const {data, loading, error} = useFetchData(`/vehicles/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const vehicle = data.data.vehicle;

  return (
    <div>
      <div className="flex-1 overflow-auto relative uppercase">
        <HeaderAdmin title={`Edit Produk  :  ${vehicle.name}`} />
      </div>
      <main className="bg-#F5F6FA max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <ProductEdit vehicleData={vehicle}/>
      </main>
    </div>
  );
};

export default ProductEditPage;
