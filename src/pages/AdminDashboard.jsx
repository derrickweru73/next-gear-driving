import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  CarFront,
  CreditCard,
  CalendarDays,
  UserCheck,
  Settings,
} from "lucide-react";

const cards = [
  {
    title: "Manage Students",
    description: "View, update and manage student accounts",
    icon: Users,
    path: "/admin/students",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Theory Lessons",
    description: "Create and manage theory lessons and quizzes",
    icon: BookOpen,
    path: "/admin/theory",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Practical Lessons",
    description: "Manage driving sessions and instructors",
    icon: CarFront,
    path: "/admin/practical",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Payments",
    description: "Approve and track student payments",
    icon: CreditCard,
    path: "/admin/payments",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Bookings",
    description: "Manage lesson bookings",
    icon: CalendarDays,
    path: "/admin/bookings",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      {/* Header */}
      <div className="bg-[#0F172A] text-white p-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        <p className="mt-2 text-gray-300">
          Control and manage Next Gear Driving LMS
        </p>
      </div>

      <div className="p-8">
        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <Users className="text-blue-600" />
            <h2 className="text-3xl font-bold mt-3">120</h2>
            <p className="text-gray-500">Total Students</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <BookOpen className="text-orange-600" />
            <h2 className="text-3xl font-bold mt-3">15</h2>
            <p className="text-gray-500">Theory Lessons</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <CarFront className="text-green-600" />
            <h2 className="text-3xl font-bold mt-3">45</h2>
            <p className="text-gray-500">Practical Sessions</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <CreditCard className="text-yellow-600" />
            <h2 className="text-3xl font-bold mt-3">80</h2>
            <p className="text-gray-500">Completed Payments</p>
          </div>
        </div>

        {/* Management Cards */}
        <h2 className="text-2xl font-bold mt-10 mb-5">System Management</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                to={card.path}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mt-5">{card.title}</h3>

                <p className="text-gray-500 mt-2">{card.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Recent Activities */}

        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Settings />
            <h2 className="text-2xl font-bold">Recent Activities</h2>
          </div>

          <ul className="space-y-4">
            <li className="border-b pb-3">New student registered</li>

            <li className="border-b pb-3">
              Payment approved for student account
            </li>

            <li>New practical lesson added</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
