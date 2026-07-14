import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
   
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3B2A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#C89B3C] p-2 rounded-xl">
                <Car className="text-white w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold">Next Gear</h2>
            </div>

            <p className="text-gray-300 leading-7">
              Next Gear Driving LMS helps students become safe, confident and
              responsible drivers through modern online learning and
              professional practical lessons.
            </p>

            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <div className="space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-[#C89B3C] transition"
              >
                Home
              </Link>

              <Link
                to="/courses"
                className="block text-gray-300 hover:text-[#C89B3C] transition"
              >
                Courses
              </Link>

              <Link
                to="/login"
                className="block text-gray-300 hover:text-[#C89B3C] transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block text-gray-300 hover:text-[#C89B3C] transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Courses</h3>

            <div className="space-y-4 text-gray-300">
              <p>Beginner Driving</p>

              <p>Automatic Driving</p>

              <p>Manual Driving</p>

              <p>Defensive Driving</p>

              <p>Refresher Lessons</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone className="text-[#C89B3C]" />
                <span className="text-gray-300">+254 700 123 456</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#C89B3C]" />
                <span className="text-gray-300">info@nextgear.co.ke</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-[#C89B3C]" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Next Gear Driving LMS. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <Link to="/" className="hover:text-[#C89B3C]">
              Privacy Policy
            </Link>

            <Link to="/" className="hover:text-[#C89B3C]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
