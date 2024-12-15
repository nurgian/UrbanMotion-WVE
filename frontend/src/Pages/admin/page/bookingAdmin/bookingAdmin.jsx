



import useFetchData from "../../../../hook/useFeatchData";
import { getToken } from "../../../../utils/authUtils";
import BookingTable from "../../componen/booking/BookingTable";
import HeaderAdmin from "../../componen/Header/headerAdmin";

const BookingPage = () => {
  const token = getToken();
  const {data, loading, error} = useFetchData('/booking', token);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const bookings = data.data.bookings;
  
  return (
    <div className="flex-1 overflow-auto relative ">
      <HeaderAdmin title="Booking" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <BookingTable booking={bookings} />
      </main>
    </div>
  );
};
export default BookingPage;