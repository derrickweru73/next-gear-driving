import React from "react";
import { Link } from "react-router-dom";
import { Clock3, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Beginner Driving",
    image:
      "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=900&q=80",
    duration: "6 Weeks",
    rating: "4.9",
    price: "KES 18,000",
  },
  {
    id: 2,
    title: "Automatic Driving",
    image:
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=900&q=80",
    duration: "5 Weeks",
    rating: "5.0",
    price: "KES 20,000",
  },
  {
    id: 3,
    title: "Defensive Driving",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    duration: "4 Weeks",
    rating: "4.8",
    price: "KES 15,000",
  },
  {
    id: 4,
    title: "Refresher Course",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    duration: "2 Weeks",
    rating: "4.9",
    price: "KES 10,000",
  },
];

const CoursesPreview = () => {
  return (
    <section id="courses" className="bg-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#F97316] uppercase tracking-widest font-semibold">
            Our Courses
          </span>

          <h2 className="text-4xl font-bold text-[#0F172A] mt-3">
            Learn From Certified Driving Professionals
          </h2>

          <p className="text-slate-600 mt-4">
            Professional practical and theory lessons designed to help you
            become a confident, safe and licensed driver.
          </p>
        </div>

        {/* Course Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-36 object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-orange-100 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full">
                    {course.price}
                  </span>

                  <div className="flex items-center gap-1">
                    <Star
                      size={15}
                      className="text-yellow-500"
                      fill="currentColor"
                    />

                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-slate-500 text-sm">
                  <Clock3 size={16} />

                  <span>{course.duration}</span>
                </div>

                <Link
                  to="/booking"
                  className="mt-5 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Book Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 border-2 border-[#0F172A] text-[#0F172A] px-7 py-3 rounded-xl font-semibold hover:bg-[#0F172A] hover:text-white transition"
          >
            View All Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
