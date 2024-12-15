import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { addDays, formatDate } from "../../../../utils/dateFormat";
import { formatRupiah } from "../../../../utils/foramtCurrency";

const BookingTable = ({booking}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(booking);


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = booking.filter(
      (booking) => booking.username.toLowerCase().includes(term) || booking.id.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };





  return (
    <motion.div
      className="bg-white  backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-primary-10">Booking List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search booking..."
            className="bg-white text-primary-10 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-grey mb-4"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                ID Sewa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Nama Penyewa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Tanggal Sewa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Tanggal Pengembalian
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Nama Kendaraan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-10 uppercase tracking-wider">
                Status
              </th>
             
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
          {filteredProducts.map((booking) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}>
                <td className=" pointer px-6 py-4 whitespace-nowrap text-sm  text-primary-10 flex gap-2 items-center">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-10 ">{booking.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-10 ">{formatDate(booking.rental_date)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-10  uppercase ">{addDays(booking.rental_date, booking.total_days)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-10  uppercase ">{booking.vehicle.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-10 ">{formatRupiah(booking.total_amount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm uppercase">
                    <span
                      className={`px-4 py-2 rounded-lg font-semibold text-white ${
                        booking.status === 'pending'
                          ? 'bg-yellow-500'
                          : booking.status === 'completed'
                          ? 'bg-green-500'
                          : booking.status === 'canceled'
                          ? 'bg-red-500'
                          : 'bg-gray-500'
                      }`}
                    >
                      {booking.status}
                    </span>
                 </td>

             
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default BookingTable;



