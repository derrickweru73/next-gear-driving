import { useEffect, useState } from "react";
import axios from "axios";
import {
  CalendarDays,
  User,
  Car,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { getUsers } from "@/services/AuthApi";

const InstructorDashboard = () => {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    const savedBookings =
      JSON.parse(localStorage.getItem("lessonBookings")) || [];

    const instructorBookings = savedBookings.filter(
      (booking) => booking.instructor === "John Kamau",
    );

    setBookings(instructorBookings);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const completeLesson = async (bookingId) => {
     const feedback = "Lesson completed successfully.";

    const allBookings =
      JSON.parse(localStorage.getItem("lessonBookings")) || [];

    const booking = allBookings.find((b) => b.id === bookingId);

    const updatedBookings = allBookings.map((b) =>
      b.id === bookingId
        ? {
            ...b,
            status: "Completed",
            feedback: feedback,
          }
        : b,
    );

    localStorage.setItem("lessonBookings", JSON.stringify(updatedBookings));

    // Unlock certificate
    try {
      const users = await getUsers();

      const student = users.find((u) => u.email === booking.email);

      if (student) {
        await axios.put(
          `https://6a5608ffb17de7bebbddbc73.mockapi.io/api/users/${student.id}`,
          {
            ...student,
            courseCompleted: true,
          },
        );
      }
    } catch (error) {
      console.error(error);
    }

    loadBookings();

    alert("Lesson completed successfully. Certificate unlocked.");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Instructor Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage assigned practical lessons.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <CalendarDays className="text-[#F97316]" size={35} />
          <h2 className="text-3xl font-bold mt-4">{bookings.length}</h2>
          <p className="text-gray-500">Assigned Lessons</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <CheckCircle className="text-green-600" size={35} />
          <h2 className="text-3xl font-bold mt-4">
            {bookings.filter((lesson) => lesson.status === "Completed").length}
          </h2>
          <p className="text-gray-500">Completed Lessons</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <User className="text-blue-600" size={35} />
          <h2 className="text-3xl font-bold mt-4">
            {bookings.filter((lesson) => lesson.status !== "Completed").length}
          </h2>
          <p className="text-gray-500">Pending Lessons</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th className="p-4">Student</th>
              <th>Lesson</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vehicle</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-4">{booking.fullName}</td>

                  <td>{booking.lesson}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>
                    <div className="flex items-center gap-2">
                      <Car size={18} />
                      {booking.vehicle}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`font-semibold ${
                        booking.status === "Completed"
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td>
                    {booking.feedback ? (
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        {booking.feedback}
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td>
                    {booking.status === "Completed" ? (
                      <span className="text-green-600 font-semibold">Done</span>
                    ) : (
                      <button
                        onClick={() => completeLesson(booking.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No lessons assigned to this instructor.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorDashboard;
