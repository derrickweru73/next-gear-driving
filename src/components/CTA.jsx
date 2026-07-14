import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CarFront } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-[#234E3B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-10 md:p-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-[#234E3B] px-4 py-2 rounded-full font-semibold mb-6">
                <ShieldCheck size={18} />
                Start Your Driving Journey Today
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Become a Safe,
                <span className="text-[#234E3B]"> Confident Driver</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Join thousands of learners who have successfully completed their
                driving lessons through Next Gear Driving LMS. Learn from
                certified instructors, monitor your progress, and prepare for
                your driving test with confidence.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-[#234E3B] hover:bg-[#18382A] text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 border-2 border-[#234E3B] text-[#234E3B] hover:bg-[#234E3B] hover:text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  View Courses
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-[#F8F6F2] h-full flex items-center justify-center p-10">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                  <CarFront size={70} className="text-[#234E3B]" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Ready to Get Behind the Wheel?
                </h3>

                <p className="text-gray-600 mt-4 max-w-sm mx-auto leading-7">
                  Register today and take the first step towards earning your
                  driving license with confidence.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div>
                    <h4 className="text-2xl font-bold text-[#234E3B]">5K+</h4>
                    <p className="text-sm text-gray-500">Students</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#234E3B]">98%</h4>
                    <p className="text-sm text-gray-500">Pass Rate</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#234E3B]">15+</h4>
                    <p className="text-sm text-gray-500">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
