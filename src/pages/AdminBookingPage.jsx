import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("lessonBookings")) || [];

    setBookings(storedBookings);
  }, []);

  const updateStatus = (index, status) => {
    const updatedBookings = [...bookings];

    updatedBookings[index].status = status;

    localStorage.setItem("lessonBookings", JSON.stringify(updatedBookings));

    setBookings(updatedBookings);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#0F172A]">Lesson Bookings</h1>

        <Link
          to="/admin-dashboard"
          className="bg-[#F97316] text-white px-5 py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th className="p-4">Student</th>
              <th className="p-4">Lesson</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Vehicle</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{booking.fullName}</td>

                  <td className="p-4">{booking.lesson}</td>

                  <td className="p-4">{booking.date}</td>

                  <td className="p-4">{booking.time}</td>

                  <td className="p-4">{booking.vehicle}</td>

                  <td className="p-4">{booking.status}</td>

                  <td className="p-4">
                    <button
                      onClick={() => updateStatus(index, "Approved")}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-10">
                  No lesson bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
