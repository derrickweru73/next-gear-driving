import React from "react";
import { Link } from "react-router-dom";
import {
  CarFront,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                <CarFront className="text-white" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Next Gear</h2>
                <p className="text-sm text-gray-400">Driving LMS</p>
              </div>
            </div>

            <p className="leading-7">
              Learn to drive with confidence through certified instructors,
              modern vehicles, and flexible learning schedules.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link to="/" className="block hover:text-[#F97316] transition">
                Home
              </Link>

              <Link
                to="/courses"
                className="block hover:text-[#F97316] transition"
              >
                Courses
              </Link>

              <Link
                to="/booking"
                className="block hover:text-[#F97316] transition"
              >
                Book Lesson
              </Link>

              <Link
                to="/about"
                className="block hover:text-[#F97316] transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block hover:text-[#F97316] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#F97316] mt-1" size={20} />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#F97316]" size={20} />
                <span>+254 712 345 678</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#F97316]" size={20} />
                <span>info@nextgear.co.ke</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Stay Updated
            </h3>

            <p className="mb-5">
              Get driving tips, course updates and special offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-l-xl bg-white text-black outline-none"
              />

              <button className="bg-[#F97316] hover:bg-orange-600 px-5 rounded-r-xl transition">
                <ArrowRight className="text-white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Next Gear Driving LMS. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-[#F97316] transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-[#F97316] transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
