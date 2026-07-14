import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0F172A] text-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F97316] px-5 py-2 rounded-full font-semibold mb-8">
              <ShieldCheck size={18} />
              Kenya's Trusted Driving School
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Master the Road
              <span className="block text-[#F97316]">With Confidence</span>
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8">
              Learn from certified instructors through practical driving
              lessons, online theory classes, mock driving tests and modern
              dual-controlled training vehicles.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/register"
                className="bg-[#F97316] hover:bg-[#EA580C] px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Enroll Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/courses"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white hover:text-[#0F172A] transition"
              >
                <PlayCircle size={18} />
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
              alt="Driving Lesson"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
