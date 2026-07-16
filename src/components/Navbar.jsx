import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, Moon, BookOpen, CalendarDays, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Why Choose Us", path: "/why-us" },
  { name: "Reviews", path: "/reviews" },
  { name: "FAQs", path: "/faq" },
];

const { isAuthenticated, logout } = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  logout();
  navigate("/login");
};


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center shadow-md">
            <CarFront className="w-6 h-6 text-[#F97316]" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Next Gear</h1>

            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Driving LMS
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold transition duration-300 ${
                  isActive
                    ? "text-[#F97316]"
                    : "text-slate-700 hover:text-[#F97316]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" disabled className="rounded-full">
            <Moon className="w-5 h-5 text-slate-700" />
          </Button>

          <Link to="/courses">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-slate-100"
            >
              <BookOpen className="w-5 h-5 text-[#0F172A]" />
            </Button>
          </Link>

          <Link to="/booking">
            <Button
              variant="outline"
              className="hidden xl:flex items-center gap-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white rounded-full"
            >
              <CalendarDays className="w-4 h-4" />
              Book Lesson
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-slate-100"
            >
              <Phone className="w-5 h-5 text-[#0F172A]" />
            </Button>
          </Link>

          <Link
            to="/login"
            className="hidden md:block font-semibold text-slate-700 hover:text-[#F97316]"
          >
            Login
          </Link>

          <Link to="/register">
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-black rounded-full px-7">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
