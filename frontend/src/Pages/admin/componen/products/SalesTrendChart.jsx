import { motion } from "framer-motion";
import { Edit, Eye, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PRODUCT_DATA = [
  { id: 1, name: "Brio 1", category: "Mobil", stock: "ready" },
  { id: 2, name: "Brio 2", category: "Mobil", stock: "ready" },
  { id: 3, name: "Brio 3", category: "Mobil", stock: "ready" },
  { id: 4, name: "Brio 4", category: "Mobil", stock: "ready" },
  { id: 5, name: "Brio 5", category: "Mobil", stock: "booked" },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  const handleDelete = (id) => {
    alert(`Delete product with id: ${id}`);
    // Implement delete logic here
  };

  return (
    <motion.div className="bg-white shadow-lg rounded-xl p-6 border border-gray-700 mb-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-white text-gray-800 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase"># id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Nama Kendaraan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Jenis Kendaraan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}>
                <Link to={`/product-detail/${product.id}`}>
                  <td className="px-6 py-4 text-sm text-gray-800">{product.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{product.stock}</td>
                </Link>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <Link to={`/product-detail/${product.id}`} className="mr-2 text-blue-600">
                    <Eye size={18} />
                  </Link>
                  <Link to={`/product-edit/${product.id}`} className="mr-2 text-indigo-600">
                    <Edit size={18} />
                  </Link>
                  <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-400">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
