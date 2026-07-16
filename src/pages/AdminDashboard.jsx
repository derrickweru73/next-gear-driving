import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  CarFront,
  CreditCard,
  CalendarDays,
} from "lucide-react";

const cards = [
  {
    title: "Manage Students",
    icon: Users,
    path: "/admin/students",
    color: "bg-blue-100",
  },
  {
    title: "Manage Theory",
    icon: BookOpen,
    path: "/admin/theory",
    color: "bg-orange-100",
  },
  {
    title: "Manage Practical",
    icon: CarFront,
    path: "/admin/practical",
    color: "bg-green-100",
  },
  {
    title: "Manage Payments",
    icon: CreditCard,
    path: "/admin/payments",
    color: "bg-yellow-100",
  },
  {
    title: "Manage Bookings",
    icon: CalendarDays,
    path: "/admin/bookings",
    color: "bg-purple-100",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F6F2] p-10">
      <h1 className="text-4xl font-bold text-[#0F172A]">Admin Dashboard</h1>

      <p className="text-gray-600 mt-2">
        Manage the entire driving school system.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              to={card.path}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div
                className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center`}
              >
                <Icon size={32} />
              </div>

              <h2 className="text-2xl font-bold mt-6">{card.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
