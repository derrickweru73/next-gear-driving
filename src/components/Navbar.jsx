import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, Moon, BookOpen, CalendarDays, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Why Choose Us", path: "/why-us" },
  { name: "Reviews", path: "/reviews" },
  { name: "FAQs", path: "/faq" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F8F6F2]/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#234E3B] flex items-center justify-center shadow-md">
            <CarFront className="w-6 h-6 text-[#C89B3C]" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#234E3B]">Next Gear</h1>

            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Driving LMS
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#234E3B]"
                    : "text-gray-700 hover:text-[#C89B3C]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            disabled
            className="rounded-full hover:bg-green-100"
          >
            <Moon className="w-5 h-5 text-[#234E3B]" />
          </Button>

          {/* Courses */}
          <Link to="/courses">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-green-100"
            >
              <BookOpen className="w-5 h-5 text-[#234E3B]" />
            </Button>
          </Link>

          {/* Book Lesson */}
          <Link to="/booking">
            <Button
              variant="outline"
              className="hidden xl:flex items-center gap-2 rounded-full border-[#234E3B] text-[#234E3B] hover:bg-[#234E3B] hover:text-white"
            >
              <CalendarDays className="w-4 h-4" />
              Book Lesson
            </Button>
          </Link>

          {/* Contact */}
          <Link to="/contact">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-green-100"
            >
              <Phone className="w-5 h-5 text-[#234E3B]" />
            </Button>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden md:block text-sm font-semibold text-gray-700 hover:text-[#234E3B] transition"
          >
            Login
          </Link>

          {/* Register */}
          <Link to="/register">
            <Button className="bg-[#234E3B] hover:bg-[#18382A] text-white rounded-full px-7 py-6">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
