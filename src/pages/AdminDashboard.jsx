import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {  useState, useEffect } from "react"
import { getUsers } from "@/services/AuthApi";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CarFront,
  CreditCard,
  CalendarDays,
  CheckCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [students, setStudents] = useState([]);

  const [lessonCount, setLessonCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    loadStudents();

    const lessons = JSON.parse(localStorage.getItem("theoryLessons")) || [];

    const bookings = JSON.parse(localStorage.getItem("lessonBookings")) || [];

    const payments = JSON.parse(localStorage.getItem("payments")) || [];

    const pending =
      JSON.parse(localStorage.getItem("pendingEnrollments")) || [];

    setLessonCount(lessons.length);
    setBookingCount(bookings.length);
    setPaymentCount(payments.length);

    const activity = [];

    pending.forEach((student) =>
      activity.push(`${student.fullName} submitted enrollment`),
    );

    bookings.forEach((booking) =>
      activity.push(`${booking.fullName} booked a lesson`),
    );

    payments.forEach((payment) =>
      activity.push(`${payment.fullName} completed payment`),
    );

    setRecentActivity(activity.reverse());
  }, []);

   const loadStudents = async () => {
     const data = await getUsers();
     setStudents(data);
   };

     const approveStudent = async (id) => {
       try {
         // Update MockAPI
         const response = await axios.patch(
           `https://6a5608ffb17de7bebbddbc73.mockapi.io/api/users/${id}`,
           {
             enrolled: true,
           },
         );

         // If this student is currently logged in,
         // update the saved login session too.
         const loggedUser = JSON.parse(localStorage.getItem("user"));

         if (loggedUser && loggedUser.id === response.data.id) {
           localStorage.setItem("user", JSON.stringify(response.data));
         }

         alert("Student approved successfully!");

         loadStudents();
       } catch (error) {
         console.error(error);
         alert("Approval failed.");
       }
     };

   const handleLogout = () => {
     logout();
     navigate("/login");
   };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-3xl font-bold">Next Gear</h1>
          <p className="text-orange-500">Admin Panel</p>
        </div>

        <nav className="flex-1 py-6">
          <Link
            to="/admin-dashboard"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/students"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <Users size={20} />
            Manage Students
          </Link>

          <Link
            to="/admin/theory-lessons"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <BookOpen size={20} />
            Theory Lessons
          </Link>

          <Link
            to="/admin/practical-lessons"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CarFront size={20} />
            Practical Lessons
          </Link>

          <Link
            to="/admin/bookings"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CalendarDays size={20} />
            Lesson Bookings
          </Link>

          <Link
            to="/admin/payments"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CreditCard size={20} />
            Payments
          </Link>
        </nav>

        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">Admin Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Manage the entire Driving School LMS from one place.
        </p>

        {/* Statistics */}
        <div className="grid lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Students</h2>
            <p className="text-4xl font-bold mt-4">{students.length}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Theory Lessons</h2>
            <p className="text-4xl font-bold mt-4">{lessonCount}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Bookings</h2>
            <p className="text-4xl font-bold mt-4">{bookingCount}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-500">Payments</h2>
            <p className="text-4xl font-bold mt-4">{paymentCount}</p>
          </div>
        </div>

        {/* Student Enrollment */}
        <div className="bg-white rounded-2xl shadow p-8 mt-10">
          <h2 className="text-2xl font-bold mb-6">Student Enrollment</h2>

          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center border p-4 rounded-xl"
              >
                <div>
                  <h3 className="font-bold">{student.fullName}</h3>

                  <p className="text-gray-500">{student.email}</p>

                  <p>Course: {student.course}</p>

                  <p>Status: {student.enrolled ? "Enrolled" : "Pending"}</p>
                </div>

                {!student.enrolled && (
                  <button
                    onClick={() => approveStudent(student.id)}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                  >
                    Approve
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/admin/theory-lessons"
                className="bg-orange-500 text-white rounded-xl py-4 text-center"
              >
                Add Theory Lesson
              </Link>

              <Link
                to="/admin/practical-lessons"
                className="bg-blue-600 text-white rounded-xl py-4 text-center"
              >
                Add Practical Lesson
              </Link>

              <Link
                to="/admin/payments"
                className="bg-green-600 text-white rounded-xl py-4 text-center"
              >
                Approve Payments
              </Link>

              <Link
                to="/admin/students"
                className="bg-purple-600 text-white rounded-xl py-4 text-center"
              >
                View Users
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

            <ul className="space-y-3">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <li key={index}>• {activity}</li>
                ))
              ) : (
                <li>No recent activity.</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
