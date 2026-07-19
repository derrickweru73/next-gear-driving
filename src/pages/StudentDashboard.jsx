import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  CreditCard,
  User,
  LogOut,
  CheckCircle2,
  Clock3,
  Trophy,
  Bell,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
    const [unreadNotifications, setUnreadNotifications] = useState(0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  //updating the dashboard to display if student has passed theory quiz
const [theoryResult, setTheoryResult] = useState(null);
const [nextLesson, setNextLesson] = useState(null);
// new state variables
const [payment, setPayment] = useState(null);
const [booking, setBooking] = useState(null);
const [practicalLessons, setPracticalLessons] = useState([]);

const certificateReady = theoryResult?.passed;



//std lessonbooking payments theoryresult and all prac
 useEffect(() => {
   const result = JSON.parse(localStorage.getItem("theoryResult"));

   if (result) {
     setTheoryResult(result);
   }

   const bookings = JSON.parse(localStorage.getItem("lessonBookings")) || [];

   const studentBooking = bookings.find((item) => item.email === user?.email);

   if (studentBooking) {
     setNextLesson(studentBooking);
   }

   const payments = JSON.parse(localStorage.getItem("payments")) || [];
    const lessons = JSON.parse(localStorage.getItem("practicalLessons")) || [];

   if (user) {
     const studentPayment = payments.find((item) => item.email === user.email);

     const studentBooking = bookings.find((item) => item.email === user.email);

     setPayment(studentPayment || null);
     setBooking(studentBooking || null);
   }

   setPracticalLessons(lessons);

   const notifications =
     JSON.parse(localStorage.getItem("notifications")) || [];

   const unread = notifications.filter(
     (notification) => !notification.read,
   ).length;

   setUnreadNotifications(unread);
 }, [user]);

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">Next Gear</h1>
          <p className="text-[#F97316]">Student Portal</p>
        </div>

        <nav className="flex-1 py-8">
          <Link
            to="/student-dashboard"
            className="flex items-center gap-3 px-6 py-4 bg-[#F97316]"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/theory-lessons"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <BookOpen size={20} />
            Theory Lessons
          </Link>

          <Link
            to="/practical-lessons"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CalendarDays size={20} />
            Practical Lessons
          </Link>

          <Link
            to="/student-payments"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CreditCard size={20} />
            Payments
          </Link>

          <Link
            to="/student-profile"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <User size={20} />
            Profile
          </Link>
          <Link
            to="/student-notifications"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <User size={20} />
            Notification
          </Link>
        </nav>

        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 flex justify-center items-center gap-3"
          >
            <LogOut size={12} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-12">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">
              Welcome Back, {user?.fullName}
            </h1>

            <p className="text-gray-600 mt-2">
              Ready for your next driving lesson? Continue your journey toward
              earning your driving licence.
            </p>
          </div>

          <button
            onClick={() => navigate("/student-notifications")}
            className="relative bg-white shadow rounded-full p-3 hover:bg-gray-100 transition"
          >
            <Bell className="text-[#F97316]" size={22} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadNotifications}
            </span>
          </button>
        </div>

        {/* Statistics display theory progress dynamically based on the quiz result */}
        <div className="grid lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-[#F97316]">
            <BookOpen className="text-[#F97316]" />
            <h2 className="text-3xl font-bold mt-4">
              {theoryResult?.passed ? "100%" : "70%"}
            </h2>
            <p className="text-gray-500">Theory Progress</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-[#0F172A]">
            <CalendarDays className="text-[#F97316]" />
            <h2 className="text-3xl font-bold mt-4">
              {practicalLessons.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-green-600">
            <CheckCircle2 className="text-green-600" />
            <h2 className="text-3xl font-bold mt-4">
              {payment ? payment.status : "Pending"}
            </h2>
            <p className="text-gray-500">Payment Status</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-yellow-500">
            <Trophy className="text-yellow-500" />
            <h2 className="text-3xl font-bold mt-4">
              {booking ? booking.status : "Not Booked"}
            </h2>
            <p className="text-gray-500">Driving Test</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {/* Progress update theory lesson progress automatically after passing the quiz*/}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">
              Course Progress
            </h2>

            {/* increase progress bar to 100% once the quiz is passed */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Theory Lessons</span>
                  <span>{theoryResult?.passed ? "100%" : "70%"}</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-[#F97316]"
                    style={{
                      width: theoryResult?.passed ? "100%" : "70%",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Practical Lessons</span>
                  <span>{booking ? "100%" : "0%"}</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-[#0F172A]"
                    style={{
                      width: booking ? "100%" : "0%",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Driving Test</span>
                  <span>Locked</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 mt-8">
            <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">
              Upcoming Lesson
            </h2>

            {nextLesson ? (
              <div className="space-y-3">
                <p>
                  <strong>Instructor:</strong> {nextLesson.instructor}
                </p>

                <p>
                  <strong>Date:</strong> {nextLesson.date}
                </p>

                <p>
                  <strong>Time:</strong> {nextLesson.time}
                </p>

                <p>
                  <strong>Status:</strong> {nextLesson.status}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">
                You have not booked any practical lesson yet.
              </p>
            )}
          </div>

          {/* Next Step */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">
              Next Step
            </h2>

            <div className="rounded-xl border p-5">
              <Clock3 className="text-[#F97316]" />

              {/* redirect students to the correct page when they have passed theoy assess */}
              <h3 className="font-bold text-lg mt-4">
                {!payment
                  ? "Complete Payment"
                  : !theoryResult?.passed
                    ? "Complete Theory Lessons"
                    : !booking
                      ? "Book Practical Lessons"
                      : "Continue Practical Training"}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {!payment
                  ? "Complete your course payment to activate your account."
                  : !theoryResult?.passed
                    ? "Finish your theory lessons and pass the assessment."
                    : !booking
                      ? "You passed theory. Your next step is booking a practical lesson."
                      : "Attend your scheduled practical lessons and prepare for the driving test."}
              </p>

              <Link
                to={
                  !payment
                    ? "/payment"
                    : !theoryResult?.passed
                      ? "/theory-lessons"
                      : "/practical-lessons"
                }
                className="inline-block mt-6 bg-[#F97316] hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                {!payment
                  ? "Complete Payment"
                  : !theoryResult?.passed
                    ? "Continue Learning"
                    : !booking
                      ? "Book Practical Lesson"
                      : "View Practical Lessons"}
              </Link>
            </div>
          </div>
        </div>
        {/* Certificate */}
        <div className="mt-10 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Driving Certificate
          </h2>

          <p className="text-gray-600 mt-3">
            Your certificate becomes available after you successfully complete
            both the theory assessment and practical driving training.
          </p>

          {certificateReady ? (
            <Link
              to="/certificate"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              View Certificate
            </Link>
          ) : (
            <button
              disabled
              className="mt-6 bg-gray-300 text-gray-600 px-6 py-3 rounded-xl cursor-not-allowed"
            >
              Certificate Locked
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
