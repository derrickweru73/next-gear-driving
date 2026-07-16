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

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  //updating the dashboard to display if student has passed theory quiz
const [theoryResult, setTheoryResult] = useState(null);

useEffect(() => {
  const result = JSON.parse(localStorage.getItem("theoryResult"));

  if (result) {
    setTheoryResult(result);
  }
}, []);

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
            to="/book-lesson"
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            <CalendarDays size={20} />
            Practical Lessons
          </Link>

          <Link
            to="/payments"
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
        </nav>

        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 flex justify-center items-center gap-3"
          >
            <LogOut size={18} />
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

          <button className="relative bg-white shadow rounded-full p-3">
            <Bell className="text-[#F97316]" size={22} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              2
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
            <h2 className="text-3xl font-bold mt-4">3</h2>
            <p className="text-gray-500">Practical Lessons</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-green-600">
            <CheckCircle2 className="text-green-600" />
            <h2 className="text-3xl font-bold mt-4">Paid</h2>
            <p className="text-gray-500">Payment Status</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-yellow-500">
            <Trophy className="text-yellow-500" />
            <h2 className="text-3xl font-bold mt-4">Pending</h2>
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
                  <span>20%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div className="h-3 w-[20%] rounded-full bg-[#0F172A]" />
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

          {/* Next Step */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">
              Next Step
            </h2>

            <div className="rounded-xl border p-5">
              <Clock3 className="text-[#F97316]" />
              
              {/* redirect students to the correct page when they have passed theoy assess */}
              <h3 className="font-bold text-lg mt-4">
                {theoryResult?.passed
                  ? "Book Practical Lessons"
                  : "Complete Theory Lessons"}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {theoryResult?.passed
                  ? "Congratulations! You passed the theory assessment. You can now book your practical driving lessons."
                  : "Finish all theory topics and pass your quizzes before booking your practical driving lessons."}
              </p>

              <Link
                to={theoryResult?.passed ? "/book-lesson" : "/theory-lessons"}
                className="inline-block mt-6 bg-[#F97316] hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                {theoryResult?.passed
                  ? "Book Practical Lesson"
                  : "Continue Learning"}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
