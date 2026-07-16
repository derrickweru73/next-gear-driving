import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section
      id="home"
      className="bg-[#0F172A] text-white py-12 overflow-hidden"
    >
      <div className="max-5-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F97316] px-5 py-2 rounded-full font-semibold mb-8">
              <ShieldCheck size={18} />
              Kenya's Trusted Driving School
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
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
                to={isAuthenticated ? "/enrollment" : "/register"}
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
              src="https://plus.unsplash.com/premium_photo-1683133959080-c34cc9fb2f73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Driving Lesson"
              className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
