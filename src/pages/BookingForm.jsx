import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import practicalLessons from "@/data/practicalLessons";
import { useAuth } from "@/context/AuthContext";

const BookingForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  const lesson = practicalLessons.find((item) => item.id === Number(id));

   const [booking, setBooking] = useState(() => {
     const savedBooking = localStorage.getItem("booking");

     return savedBooking
       ? JSON.parse(savedBooking)
       : {
           fullName: user?.fullName || "",
           email: user?.email || "",
           phone: user?.phone || "",
           date: "",
           time: "",
           transmission: "",
           vehicle: "",
           notes: "",
         };
   });

   useEffect(() => {
     localStorage.setItem("booking", JSON.stringify(booking));
   }, [booking]);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e) => {
     e.preventDefault();

     const bookingData = {
       lesson,
       ...booking,
       status: "Pending Payment",
     };

     // Save current booking
     localStorage.setItem("lessonBooking", JSON.stringify(bookingData));

     // Save all bookings for Admin Dashboard
     const bookings = JSON.parse(localStorage.getItem("lessonBookings")) || [];

     bookings.push({
       fullName: booking.fullName,
       email: booking.email,
       lesson: lesson.title,
       date: booking.date,
       time: booking.time,
       transmission: booking.transmission,
       vehicle: booking.vehicle,
       status: "Pending Payment",
     });

     localStorage.setItem("lessonBookings", JSON.stringify(bookings));

     navigate("/booking-success");
   };

  return (
    <div className="min-h-screen bg-[#F8F6F2] px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          Book Practical Lesson
        </h1>

        <p className="text-gray-600 mt-2">
          Complete the booking details below.
        </p>

        <div className="mt-8 bg-slate-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold">{lesson.title}</h2>

          <p className="mt-2 text-gray-600">Duration: {lesson.duration}</p>

          <p className="text-gray-600">Location: {lesson.location}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          <div>
            <label className="font-medium">Full Name</label>

            <input
              value={booking.fullName}
              readOnly
              className="w-full border rounded-xl p-3 mt-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              value={booking.email}
              readOnly
              className="w-full border rounded-xl p-3 mt-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Phone Number</label>

            <input
              value={booking.phone}
              readOnly
              className="w-full border rounded-xl p-3 mt-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Preferred Date</label>

            <input
              type="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Preferred Time</label>

            <input
              type="time"
              name="time"
              value={booking.time}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Transmission</label>

            <select
              name="transmission"
              value={booking.transmission}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Training Vehicle</label>

            <select
              name="vehicle"
              value={booking.vehicle}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle</option>
              <option>Toyota Vitz</option>
              <option>Toyota Axio</option>
              <option>Mazda Demio</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Additional Notes</label>

            <textarea
              name="notes"
              rows="4"
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div className="md:col-span-2">
            <button className="w-full bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
