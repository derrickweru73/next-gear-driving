import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, Moon, BookOpen } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Book Lesson", path: "/booking" },
  { name: "Instructors", path: "/instructors" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900">
            <CarFront className="h-6 w-6 text-yellow-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-blue-900">Next Gear</h1>

            <p className="text-xs text-slate-500">Driving LMS</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-500"
                    : "text-slate-700 hover:text-blue-900"
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
          <Button variant="ghost" size="icon" disabled>
            <Moon className="h-5 w-5 text-slate-700" />
          </Button>

          {/* Courses */}
          <Link to="/courses">
            <Button variant="ghost" size="icon">
              <BookOpen className="h-5 w-5 text-blue-900" />
            </Button>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden sm:block text-sm font-medium text-slate-700 hover:text-blue-900 transition"
          >
            Login
          </Link>

          {/* Register */}
          <Link to="/register">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
