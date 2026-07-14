import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Star, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#97316] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShieldCheck size={18} />
              Trusted Driving Learning Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Master Driving
              <span className="text-[#F97316]"> Skills </span>
              with Confidence 
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Learn from certified instructors, book practical lessons, complete
              theory training online, and monitor your driving progress—all in
              one modern learning platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-[#F97316] text-black px-7 py-4 rounded-xl font-semibold hover:bg-[#18382A] transition flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/courses"
                className="border-2 border-[#234E3B] text-[#234E3B] px-7 py-4 rounded-xl font-semibold hover:bg-[#234E3B] hover:text-white transition flex items-center gap-2"
              >
                <PlayCircle size={18} />
                Explore Courses
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-[#234E3B]">1,500+</h2>
                <p className="text-gray-600">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#234E3B]">98%</h2>
                <p className="text-gray-600">Pass Rate</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#234E3B]">25+</h2>
                <p className="text-gray-600">Instructors</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Driving Lesson"
              className="rounded-3xl shadow-xl w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-lg">
              <div className="flex text-yellow-500 gap-1">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Rated 4.9 / 5
              </h3>

              <p className="text-sm text-gray-500">
                From over 1,500 successful learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
