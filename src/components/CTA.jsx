import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0F172A]">
          {/* Background decoration */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#F97316]/20"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#F97316]/10"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-block bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Start Your Journey Today
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                Ready to Become a
                <span className="text-[#F97316]"> Confident Driver?</span>
              </h2>

              <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
                Join hundreds of successful students learning with certified
                instructors using modern training vehicles. Book your first
                lesson today and take the first step towards getting your
                driving licence.
              </p>
            </div>

            {/* Right */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Book Your First Lesson
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Secure your slot today and begin learning with experienced
                instructors at your own pace.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  to="/booking"
                  className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
                >
                  Book a Lesson
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 border-2 border-[#0F172A] text-[#0F172A] py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition"
                >
                  <PhoneCall size={20} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
