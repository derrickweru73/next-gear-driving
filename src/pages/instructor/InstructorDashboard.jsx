import { useEffect, useState } from "react";
import {
  CalendarDays,
  User,
  Car,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const InstructorDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("lessonBookings")) || [];

    setBookings(savedBookings);
  }, []);

  const completeLesson = (index) => {
    const feedback = prompt("Enter instructor feedback:");

    const updatedBookings = [...bookings];

    updatedBookings[index].status = "Completed";

    updatedBookings[index].feedback =
      feedback || "Lesson completed successfully.";

    localStorage.setItem("lessonBookings", JSON.stringify(updatedBookings));

    setBookings(updatedBookings);

    alert("Lesson marked as completed.");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Instructor Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage practical driving lessons.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <CalendarDays className="text-[#F97316]" size={35} />
          <h2 className="text-3xl font-bold mt-4">{bookings.length}</h2>
          <p className="text-gray-500">Booked Lessons</p>
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
              bookings.map((booking, index) => (
                <tr key={index} className="border-b">
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
                        onClick={() => completeLesson(index)}
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
                <td colSpan="8" className="text-center py-10">
                  No practical lessons booked yet.
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
